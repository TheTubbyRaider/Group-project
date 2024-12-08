import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const SellerProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    description: '',
    products: [],
  });
  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Fetch the seller profile on component mount
    axios.get('/api/seller/profile')
      .then((response) => {
        setProfile(response.data);
        setNewDescription(response.data.description);
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
      });
  }, []);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    axios.put('/api/seller/profile', { description: newDescription })
      .then((response) => {
        setProfile(response.data);
        setEditing(false);
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

  const handleAddProduct = () => {
    router.push('/seller/add-product');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-5">Seller Profile</h1>
      <div className="profile-details">
        <div className="flex justify-between">
          <div className="profile-info">
            <h2 className="text-2xl">Name: {profile.name}</h2>
            <div className="description">
              <h3 className="text-xl">Description:</h3>
              {editing ? (
                <textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="border p-2 w-full"
                />
              ) : (
                <p>{profile.description}</p>
              )}
            </div>
            <button
              onClick={editing ? handleSaveClick : handleEditClick}
              className="bg-blue-500 text-white p-2 mt-2"
            >
              {editing ? 'Save' : 'Edit Profile'}
            </button>
          </div>
        </div>

        <h3 className="text-2xl mt-5">Products</h3>
        <ul>
          {profile.products.map((product) => (
            <li key={product.id} className="mb-4">
              <h4 className="text-xl">{product.name}</h4>
              <p>{product.description}</p>
              <button className="bg-red-500 text-white p-2 mt-2">Delete</button>
            </li>
          ))}
        </ul>
        <button
          onClick={handleAddProduct}
          className="bg-green-500 text-white p-2 mt-4"
        >
          Add New Product
        </button>
      </div>
    </div>
  );
};

export default SellerProfile;
