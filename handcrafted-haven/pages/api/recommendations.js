import { prisma } from '../../../lib/prisma'; // Assuming Prisma ORM is used for database management

// API Route to fetch product recommendations based on past purchases or viewed categories
export default async function handler(req, res) {
  const { userId } = req.query; // Assuming you pass the user ID to identify the buyer

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    // Fetch the user's past purchases or viewed products
    const userPurchases = await prisma.purchase.findMany({
      where: { userId: Number(userId) },
      include: {
        product: true,
      },
    });

    // Extract product categories from the user's purchases
    const categories = userPurchases.map((purchase) => purchase.product.category);

    // Get products from the same categories, excluding the ones the user has already purchased
    const recommendations = await prisma.product.findMany({
      where: {
        category: { in: categories },
        NOT: { id: { in: userPurchases.map((purchase) => purchase.productId) } },
      },
      take: 5, // Limit to 5 recommendations
    });

    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
}
