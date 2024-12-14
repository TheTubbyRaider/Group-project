// lib/adminAuth.js

import { getSession } from 'next-auth/react';

export const requireAdmin = async (req, res) => {
  const session = await getSession({ req });
  if (!session || session.user.role !== 'admin') {
    res.status(403).json({ error: 'Access denied' });
    return false;
  }
  return true;
};
