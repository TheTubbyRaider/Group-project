
import Product from '../../models/Product';

export default async function handler(req, res) {
  const { category, price, rating } = req.query;

  const filters = {};
  if (category) filters.category = category;
  if (price) filters.price = { $lte: price }; // Max price filter
  if (rating) filters.rating = { $gte: rating }; // Min rating filter

  try {
    const products = await Product.find(filters);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
}
