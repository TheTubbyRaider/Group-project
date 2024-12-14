// components/ProductListingPage.js

import ProductListing from './ProductListing';

const ProductListingPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Browse Our Products</h1>
      <div className="flex">
        <div className="w-1/4 p-4">
          {/* Filters section */}
          <h2 className="text-2xl font-semibold mb-4">Filters</h2>
          <ProductListing />
        </div>
        <div className="w-3/4 p-4">
          {/* Product grid */}
          <div className="grid grid-cols-3 gap-6">
            <ProductListing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
