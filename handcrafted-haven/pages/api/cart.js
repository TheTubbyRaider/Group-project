// pages/api/cart.js

export default function handler(req, res) {
    if (req.method === 'GET') {
      // Return cart data (from a database or session)
      const cart = JSON.parse(req.cookies.cart || '[]');
      res.status(200).json(cart);
    }
  
    if (req.method === 'POST') {
      const { product } = req.body;
      let cart = JSON.parse(req.cookies.cart || '[]');
      cart.push(product);
      res.setHeader('Set-Cookie', `cart=${JSON.stringify(cart)}; path=/; HttpOnly`);
      res.status(200).json(cart);
    }
  
    if (req.method === 'DELETE') {
      const { productId } = req.body;
      let cart = JSON.parse(req.cookies.cart || '[]');
      cart = cart.filter((item) => item._id !== productId);
      res.setHeader('Set-Cookie', `cart=${JSON.stringify(cart)}; path=/; HttpOnly`);
      res.status(200).json(cart);
    }
  }
  