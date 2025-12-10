You will need Node.js to run and configure the website. Here's the install link. https://nodejs.org/en

Depending on how your computer is setup, you may need to alter the Path to accomodate node.js. Any problems with this can be solved easily with google or AI help.
Example: you may get error codes from trying to use "npm" commands if your path is not setup correctly. 

1. Clone the repository
2. Open your IDE's terminal, locate cmd, and enter the Website folder
3. Run `npm install` to install dependencies
4. Run `npm install react-icons` to install react icon dependencies
5. Run `npm install amazon-cognito-identity-js` to install AWS Cognito
6. Run `npm install @aws-sdk/credential-provider-cognito-identity @aws-sdk/client-cognito-identity @aws-sdk/client-sts` to install aws identities
7. Run `npm start` to start the development server
8.. Run `npm run build` to create a production build for AWS deployment

For general editing of the website, the development server is all that's needed. Step 5 not necessary unless testing with AWS.

You'll notice that the file extensions are .JSX. This is essentially the same thing as a JavaScript file, but it's more tailored to React. You can still write JavaScript code inside of it. More info below.

Tools for learning and using React. 
1. React.dev - React's main website. Includes guides for use.
2. Virtual DOM:
            https://www.geeksforgeeks.org/difference-between-virtual-dom-and-real-dom/
            https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
            https://www.geeksforgeeks.org/reactjs-virtual-dom/

3. Components: 
		    https://legacy.reactjs.org/docs/components-and-props.html
		    https://react.dev/reference/react/Component

4. Props:
		    https://react.dev/learn/passing-props-to-a-component

5. JSX: 
		    https://react.dev/learn/writing-markup-with-jsx

6. React Router: 
	        https://www.geeksforgeeks.org/reactjs-router/
