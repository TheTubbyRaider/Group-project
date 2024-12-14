// components/ProductListing.js

import { useState, useEffect } from 'react';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ price: '', rating: '', category: '' });

  useEffect(() => {
    // Fetch products based on filters from API
    const fetchData = async () => {
      const response = await fetch(
        `/api/products?category=${filters.category}&price=${filters.price}&rating=${filters.rating}`
      );
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, [filters]);

  return (
    <div>
      <div>
        <label>
          Category:
          <select onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
            <option value="">All</option>
            <option value="Jewelry">Jewelry</option>
            <option value="Art">Art</option>
            <option value="Home Decor">Home Decor</option>
            {/* Add more categories */}
          </select>
        </label>
        <label>
          Price:
          <input
            type="number"
            placeholder="Max Price"
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            min="0"
            max="5"
            placeholder="Min Rating"
            value={filters.rating}
            onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
          />
        </label>
      </div>

      <div>
        {products.map((product) => (
          <div key={product._id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating} stars</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
