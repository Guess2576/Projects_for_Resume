import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ClassReviewPage() {
  const { classId } = useParams();
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState({
    fetching: false,
    submitting: false
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Get user from localStorage
  const currentUser = localStorage.getItem('user') 
    ? JSON.parse(localStorage.getItem('user')).Username
    : null;

  const fetchReviews = async () => {
    setLoading(prev => ({ ...prev, fetching: true }));
    setError(null);
    try {
      const response = await fetch(
        `https://d9jt54w9ij.execute-api.us-east-2.amazonaws.com/dev/review?courseId=${classId}`
      );
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to load reviews");
      }
      
      const data = await response.json();
      setReviews(data.reviews || []);
    } catch (err) {
      setError(err.message);
      console.error("Fetch error:", err);
    } finally {
      setLoading(prev => ({ ...prev, fetching: false }));
    }
  };

  useEffect(() => { 
    fetchReviews(); 
  }, [classId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!currentUser) {
      setError("You must be logged in to submit a review");
      return;
    }
    
    if (!reviewText.trim()) {
      setError("Review text cannot be empty");
      return;
    }

    setLoading(prev => ({ ...prev, submitting: true }));
    setError(null);
    setSuccess(null);
    
    try {
      const response = await fetch(
        'https://d9jt54w9ij.execute-api.us-east-2.amazonaws.com/dev/review',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            courseId: classId,
            text: reviewText.trim(),
            user: currentUser
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit review");
      }

      setSuccess("Your review was submitted successfully!");
      setReviewText('');
      await fetchReviews(); // Refresh the list
    } catch (err) {
      setError(err.message);
      console.error("Submission error:", err);
    } finally {
      setLoading(prev => ({ ...prev, submitting: false }));
    }
  };

  return (
    <div className="review-container animate-slide-up" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Reviews for {classId}</h1>
      
      {/* Status Messages */}
      {error && (
        <div style={{ 
          color: '#dc3545',
          padding: '10px',
          margin: '10px 0',
          border: '1px solid #dc3545',
          borderRadius: '4px'
        }}>
          Error: {error}
        </div>
      )}
      
      {success && (
        <div style={{ 
          color: '#28a745',
          padding: '10px',
          margin: '10px 0',
          border: '1px solid #28a745',
          borderRadius: '4px'
        }}>
          {success}
        </div>
      )}

      {/* Review Form - Only show if user is logged in */}
      {currentUser ? (
        <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review here..."
            required
            disabled={loading.submitting}
            style={{
              width: '100%',
              minHeight: '120px',
              padding: '12px',
              fontSize: '16px',
              border: '1px solid #ced4da',
              borderRadius: '4px',
              marginBottom: '10px',
              resize: 'vertical'
            }}
          />
          <button 
            type="submit" 
            disabled={loading.submitting}
            style={{
              padding: '10px 20px',
              backgroundColor: loading.submitting ? '#6c757d' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            {loading.submitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      ) : (
        <div style={{ 
          padding: '15px',
          backgroundColor: '#f8f9fa',
          border: '1px solid #ddd',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          Please log in to submit a review.
        </div>
      )}

      {/* Reviews List */}
      <div className="reviews-list animate-slide-up">
        <h2 style={{ marginBottom: '20px' }}>
          Existing Reviews {reviews.length > 0 && `(${reviews.length})`}
        </h2>
        
        {loading.fetching && reviews.length === 0 ? (
          <p>Loading reviews...</p>
        ) : reviews.length > 0 ? (
          <div style={{ display: 'grid', gap: '20px' }}>
            {reviews.map((review) => (
              <div 
                key={review.reviewId}
                style={{
                  padding: '15px',
                  border: '1px solid #e9ecef',
                  borderRadius: '5px',
                  backgroundColor: '#f8f9fa'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  marginBottom: '10px'
                }}>
                  <strong>{review.user || 'Anonymous'}</strong>
                  <small style={{ color: '#6c757d' }}>
                    {new Date(review.date || review.createdAt).toLocaleString()}
                  </small>
                </div>
                <p style={{ margin: 0 }}>{review.text || review.review}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet. Be the first to review this course!</p>
        )}
      </div>

      {/* Back to Class List Link */}
      <Link
        to="/class-ratings"
        className="cta-button animate-slide-up"
        style={{ 
          marginTop: '1rem', 
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#6c757d',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          transition: 'background-color 0.3s'
        }}
      >
        Back to Class List
      </Link>
    </div>
  );
}

export default ClassReviewPage;