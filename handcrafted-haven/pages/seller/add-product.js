import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/seller/products', product)
      .then((response) => {
        router.push('/seller/profile');
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-5">Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block">Product Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block">Product Description:</label>
          <textarea
            name="description"
            id="description"
            value={product.description}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
