import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-key';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, name } = req.body;

    // Simple validation
    if (!email || !password || !name) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store seller in your database (for now, we'll just simulate this)
    const newSeller = {
      email,
      name,
      password: hashedPassword,
    };

    // Create JWT Token
    const token = jwt.sign({ email: newSeller.email, name: newSeller.name }, JWT_SECRET, {
      expiresIn: '1h',
    });

    // Respond with the token
    res.status(201).json({ message: 'Seller created', token });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
