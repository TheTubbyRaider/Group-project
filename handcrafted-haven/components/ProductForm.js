import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ product, onSave, onCancel }) => {
  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const [price, setPrice] = useState(product?.price || '');
  const [category, setCategory] = useState(product?.category || '');

  const handleSave = async () => {
    const updatedProduct = {
      name,
      description,
      price,
      category,
    };

    try {
      const response = await axios.put(`/api/products/${product.id}`, updatedProduct);
      onSave(response.data);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="product-form">
      <h2>Edit Product</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input"
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input"
        />
      </label>
      <div className="actions">
        <button onClick={handleSave} className="btn btn-primary">Save</button>
        <button onClick={onCancel} className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
};

export default ProductForm;
