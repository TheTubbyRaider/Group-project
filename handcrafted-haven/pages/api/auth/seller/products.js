import { sellers } from '../../data';

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      const { id, name, description } = req.body;
      const seller = sellers.find((seller) => seller.id === id);
      if (!seller) {
        return res.status(404).json({ message: 'Seller not found' });
      }
      const newProduct = { id: Date.now().toString(), name, description };
      seller.products.push(newProduct);
      return res.status(201).json(newProduct);

    default:
      return res.status(405).json({ message: 'Method Not Allowed' });
  }
}


const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['Jewelry', 'Art', 'Home Decor', 'Toys', 'Craft Supplies'], // Add more categories as needed
    required: true,
  },
  rating: { type: Number, min: 0, max: 5 },
  image: { type: String }, // URL or file path for product image
});

module.exports = mongoose.model('Product', productSchema);
