import { sellers } from '../../data'; // Mock data or database connection

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Fetch the seller profile (mock data or fetch from DB)
      const sellerProfile = sellers.find((seller) => seller.id === req.query.id);
      if (!sellerProfile) {
        return res.status(404).json({ message: 'Seller not found' });
      }
      return res.status(200).json(sellerProfile);

    case 'PUT':
      // Update the seller profile
      const { description } = req.body;
      const sellerIndex = sellers.findIndex((seller) => seller.id === req.query.id);

      if (sellerIndex === -1) {
        return res.status(404).json({ message: 'Seller not found' });
      }

      sellers[sellerIndex].description = description;
      return res.status(200).json(sellers[sellerIndex]);

    default:
      return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
