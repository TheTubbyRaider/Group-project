// pages/api/admin/deleteProduct/[id].js

import { getSession } from 'next-auth/react';
import Product from '../../../../models/Product';

export default async function handler(req, res) {
  const { id } = req.query;
  const session = await getSession({ req });

  if (!session || session.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }

  if (req.method === 'DELETE') {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting product' });
    }
  }
}
