import { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = ({ userId }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`/api/recommendations?userId=${userId}`);
        setRecommendations(response.data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    if (userId) {
      fetchRecommendations();
    }
  }, [userId]);

  if (!recommendations.length) {
    return <p>No recommendations available.</p>;
  }

  return (
    <div className="recommendations">
      <h3>Recommended for You</h3>
      <div className="recommendation-list">
        {recommendations.map((product) => (
          <div key={product.id} className="recommendation-item">
            <img src={product.imageUrl} alt={product.name} />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button className="btn btn-primary">View Product</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
