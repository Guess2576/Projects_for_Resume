import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import './SignupPage.css';
import {CognitoUserPool, CognitoUserAttribute, CognitoUser,AuthenticationDetails} from "amazon-cognito-identity-js";
import { AwsConfig } from './AwsConfig';
import {fromCognitoIdentityPool} from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';


export default function SignupPage() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [isSignUp, setIsSignUp] = useState(true);
  const [confirmationCode, setConfirmationCode]= useState('');
  const [showConfirmation, setShowConfirmationCode]=useState(false);

  const poolData={
    UserPoolId:AwsConfig.userPoolId,
    ClientId:AwsConfig.userPoolWebClientId,
  };

  

  const userPool=new CognitoUserPool(poolData);


  const [signUpForm, setSignUpForm] = useState({
    username: '',
    email: '',
    password: '',
    bio: '',
  });

  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });

  

  const handleSignUpChange = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };

  const handleSignInChange = (e) => {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if(!signUpForm.username||!signUpForm.email||!signUpForm.password||!signUpForm.bio){
      alert('All fields must be filled out before signing up');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    if (!passwordRegex.test(signUpForm.password)) {
      alert('Password must be at least 8 characters and include upper/lowercase, number, and special char.');
      return;
    }

    console.log("Signing up with",signUpForm);
    

    const attributeList=[
      new CognitoUserAttribute({Name:"email", Value:signUpForm.email}),
      new CognitoUserAttribute({Name: "preferred_username", Value:signUpForm.username}),
      new CognitoUserAttribute({Name:"custom:bio", Value:signUpForm.bio})
    ];

  
    userPool.signUp(signUpForm.username,signUpForm.password,attributeList,null,(err,result)=>{
      if(err){
        alert(err.message || "Error signing up with Cognito");
        return;
      }

      const cognitoUser=result.user;
      console.log("Cognito signup successful", cognitoUser.getUsername());
      setShowConfirmationCode(true);

      
    })

  };

  const createUserProfile=async(formData) =>{

    const{session} = formData;
    const idToken =session.getIdToken().getJwtToken();

    const credentials= fromCognitoIdentityPool({
      client:  new CognitoIdentityClient({ region:"us-east-2"}),
      identityPoolId:"us-east-2:f6b450be-c89f-4ce9-a932-c6e7c04702da",
      logins:{
        [`cognito-idp.us-east-2.amazonaws.com/${AwsConfig.userPoolId}`]: idToken,
      },

    });

    console.log("FormData inside creativeUserProfile:",formData);

    console.log("username:", formData.username);
    console.log("email:", formData.email);
    console.log("password:", formData.password);
    console.log("bio:", formData.bio);
    try {

      if(!formData.username||!formData.email||!formData.bio){
        throw new Error("Missing required fields in formData");
      }
      
      const res = await fetch("https://jqgvxa1i9d.execute-api.us-east-2.amazonaws.com/dev/profile", {
      
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'signup',
          id: Date.now().toString(),
          Username: formData.username,
          email: formData.email,
          password: formData.password,
          bio: formData.bio,
          
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to create profile');
      }


      alert('Profile created successfully!');
      setIsSignUp(false); // Switch to sign-in form after successful sign-up
    } catch (apiErr) {
      console.error('Sign Up failed:', apiErr);
      alert(apiErr.message || 'Sign Up failed. Please try again.');
    }
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://jqgvxa1i9d.execute-api.us-east-2.amazonaws.com/dev/profile", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'signin',
          email: signInForm.email,
          password: signInForm.password,
        }),
      });
  
      const data = await res.json();
      
      if (res.ok) {
        if (!data.user) {
          throw new Error("User data not received from server");
        }
        
        localStorage.setItem('user', JSON.stringify(data.user));
        alert("Signed in successfully!");
        console.log("User data:", data.user);
        
        // Use navigate to redirect
        navigate('/profilepage');
      } else {
        throw new Error(data.error || "Sign-in failed");
      }
    } catch (error) {
      console.error('Sign In error:', error);
      alert(error.message || "Error signing in. Please try again.");
    }
  };

  const handleConfirm =(e)=>{
    e.preventDefault();

    const userData={
      Username:signUpForm.username,
      Pool:userPool,
    };

    const cognitoUser=new CognitoUser(userData);

    cognitoUser.confirmRegistration(confirmationCode,true, (err, result) =>{
      if(err){
        console.error("Confirmation error:", err);
        alert(err.message ||"Confirmation failed.");
        return;
      }

        alert("Account confirmed! You can now sign in.");

        const authDetails= new AuthenticationDetails({
          Username:signUpForm.username,
          Password:signUpForm.password,
        });

        cognitoUser.authenticateUser(authDetails,
          
          {
            onSuccess:function(session){
            console.log('Authentication successful. Session:', session);

              createUserProfile({ ...signUpForm,session}).then(() =>{
                setIsSignUp(false);
                setShowConfirmationCode(false);
                setSignUpForm({username:'',email:'',password:'',bio:''});
                setConfirmationCode('');
              })
              .catch((error) =>{
                console.error("Error creating profile after confirmation:",error);
                alert("Profile creation failed after confirmation.")
              });
              
            },

            onFailure:function(err){
              console.error("Authentication failed after confirmation:",err);
              alert(err.message || "Failed to authenticae after confirmation.");
            },
          }
        );

        
      
    });
  };

  return (
    <div className="signup-page fade-slide-in">
      <h1 className='fade-slide-in'>{isSignUp ? 'Create Your Profile' : 'Sign In'}</h1>

      {isSignUp ? (
        <form
        key="signup"
         onSubmit={handleSignUp}
         className="signup-form fade-slide-in"
         >
          <input
            name="username"
            placeholder="Username"
            value={signUpForm.username}
            onChange={handleSignUpChange}
            required
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={signUpForm.email}
            onChange={handleSignUpChange}
            required
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={signUpForm.password}
            onChange={handleSignUpChange}
            required
          />
          <textarea
            name="bio"
            placeholder="Short bio"
            value={signUpForm.bio}
            onChange={handleSignUpChange}
            rows={3}
          />
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <form onSubmit={handleSignIn} className="signin-form fade-slide-in">
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={signInForm.email}
            onChange={handleSignInChange}
            required
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={signInForm.password}
            onChange={handleSignInChange}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        
      )}

      {showConfirmation && isSignUp && (
        <form onSubmit={handleConfirm} className="confirmation-form fade-slide-in">
          <input
           type="text"
           placeholder="Enter confirmation code"
           value={confirmationCode}
           onChange={(e)=> setConfirmationCode(e.target.value)}required/>
           <button type="submit">Confirm</button>
        </form>
      )}

      <p className='fade-slide-in'>
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-button fade-slide-in">
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
}