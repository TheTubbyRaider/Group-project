// pages/checkout.js

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleCheckout = async () => {
    setLoading(true);

    // Get Stripe checkout session ID from API
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart, email: 'user@example.com' }), // Use actual email from user session
    });
    const { sessionId } = await response.json();

    // Redirect to Stripe checkout
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error('Error during checkout:', error);
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div>
        {cart.map((product) => (
          <div key={product._id} className="checkout-item">
            <img src={product.image} alt={product.name} width={100} />
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
        <button onClick={handleCheckout} disabled={loading}>
          {loading ? 'Processing...' : 'Proceed to Payment'}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
