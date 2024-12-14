// components/ReviewForm.js

import { useState } from 'react';

const ReviewForm = ({ productId, onReviewSubmitted }) => {
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reviewText || reviewText.length < 10) {
      setError('Review text must be at least 10 characters long.');
      return;
    }

    setError('');
    const response = await fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId, rating, reviewText, userEmail }),
    });

    if (response.ok) {
      setSuccess(true);
      setRating(1);
      setReviewText('');
      onReviewSubmitted();
    } else {
      setError('There was an error submitting your review.');
    }
  };

  return (
    <div className="review-form">
      <h3>Leave a Review</h3>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Your review has been submitted!</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Rating (1-5):
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </label>
        <label>
          Your Email:
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Review:
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
