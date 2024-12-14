// pages/api/admin/deleteUser/[id].js

import { getSession } from 'next-auth/react';
import User from '../../../../models/User';

export default async function handler(req, res) {
  const { id } = req.query;
  const session = await getSession({ req });

  if (!session || session.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }

  if (req.method === 'DELETE') {
    try {
      await User.findByIdAndDelete(id);
      res.status(200).json({ message: 'User deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting user' });
    }
  }
}
