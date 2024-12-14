// pages/api/reviews.js

import dbConnect from '../../lib/dbConnect';
import Review from '../../models/Review';
import Product from '../../models/Product';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    // Get reviews for a specific product
    const { productId } = req.query;

    try {
      const reviews = await Review.find({ productId })
        .populate('productId', 'name image')
        .sort({ createdAt: -1 });
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching reviews' });
    }
  } else if (req.method === 'POST') {
    // Add a new review
    const { productId, rating, reviewText, userEmail } = req.body;

    try {
      const newReview = new Review({
        productId,
        rating,
        reviewText,
        userEmail,
      });

      await newReview.save();

      // Update product's average rating
      const product = await Product.findById(productId);
      const reviews = await Review.find({ productId });
      const averageRating =
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

      product.rating = averageRating;
      await product.save();

      res.status(201).json(newReview);
    } catch (error) {
      res.status(500).json({ error: 'Error saving review' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
