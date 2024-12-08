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
