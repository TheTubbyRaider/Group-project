// components/ShoppingCart.js

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch cart from local storage or server if needed
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleRemoveItem = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((product) => (
            <div key={product._id} className="cart-item">
              <img src={product.image} alt={product.name} width={100} />
              <p>{product.name}</p>
              <p>${product.price}</p>
              <button onClick={() => handleRemoveItem(product._id)}>Remove</button>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <button onClick={handleCheckout} className="checkout-btn">
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default ShoppingCart;
