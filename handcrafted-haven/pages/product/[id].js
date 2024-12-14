// pages/product/[id].js

import { useState, useEffect } from 'react';
import ReviewForm from '../../components/ReviewForm';

const ProductPage = ({ product }) => {
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    // Fetch reviews for the product
    const fetchReviews = async () => {
      const response = await fetch(`/api/reviews?productId=${product._id}`);
      const data = await response.json();
      setReviews(data);
    };
    
    fetchReviews();
  }, [product]);

  const handleReviewSubmitted = () => {
    // Refetch reviews after a new review is submitted
    const fetchReviews = async () => {
      const response = await fetch(`/api/reviews?productId=${product._id}`);
      const data = await response.json();
      setReviews(data);
    };
    fetchReviews();
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review._id}>
          <p>Rating: {review.rating}</p>
          <p>{review.reviewText}</p>
          <p>By: {review.userEmail}</p>
        </div>
      ))}
      <ReviewForm productId={product._id} onReviewSubmitted={handleReviewSubmitted} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://yourapi.com/products/${params.id}`);
  const product = await res.json();
  return { props: { product } };
}

export default ProductPage;
