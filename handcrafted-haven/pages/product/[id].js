import { useRouter } from 'next/router';
import Recommendations from '../../components/Recommendations';

const ProductPage = ({ product, userId }) => {
  const router = useRouter();

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>

      <button className="btn btn-primary">Add to Cart</button>

      {/* Recommendations Section */}
      <Recommendations userId={userId} />
    </div>
  );
};

// Fetch the product details for the page
export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`${process.env.API_URL}/products/${id}`);
  const product = await res.json();

  // You can pass the logged-in user ID as a prop or fetch it from session
  const userId = 1; // Example static user ID, replace with actual user ID from session or cookie

  return {
    props: { product, userId },
  };
}

export default ProductPage;
