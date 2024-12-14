// components/ProductForm.js

import { useState } from 'react';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Jewelry');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle product creation logic (send data to API)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <textarea placeholder="Product Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Jewelry">Jewelry</option>
        <option value="Art">Art</option>
        <option value="Home Decor">Home Decor</option>
      </select>
      <input type="number" min="0" max="5" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
