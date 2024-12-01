import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-key';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Both email and password are required' });
    }

    // Find seller from the database (for now, simulate the lookup)
    const existingSeller = {
      email: 'seller@example.com',  // simulate an existing seller's email
      password: '$2a$10$VH2nM5lmATks3kBxqYSHsOGQ6YRGX9FQGbAtzF79ODBFcxksZXfiW', // example hashed password
    };

    // Compare password with the hashed password
    const isMatch = await bcrypt.compare(password, existingSeller.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create JWT Token
    const token = jwt.sign({ email: existingSeller.email }, JWT_SECRET, { expiresIn: '1h' });

    // Respond with the token
    res.status(200).json({ message: 'Login successful', token });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
