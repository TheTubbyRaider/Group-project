// pages/api/admin/data.js

import { getSession } from 'next-auth/react';
import User from '../../../models/User';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session || session.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }

  try {
    const users = await User.find();
    const products = await Product.find();
    res.status(200).json({ users, products });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
}
