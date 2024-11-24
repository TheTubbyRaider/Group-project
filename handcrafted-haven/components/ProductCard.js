const ProductCard = ({ product }) => (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover mb-4 rounded-md"/>
      <h2 className="text-2xl mb-2 text-brown">{product.name}</h2>
      <p className="text-xl text-gray-700 mb-2">{product.price}</p>
      <div className="flex items-center mb-4">
        <span className="text-sm text-gray-600">{`Rating: ${product.rating}★`}</span>
      </div>
      <button className="mt-4 w-full bg-gold text-white py-2 rounded-md hover:bg-coral transition-colors">
        Add to Cart
      </button>
    </div>
  );
  
  export default ProductCard;
  