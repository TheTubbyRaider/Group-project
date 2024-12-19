import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white p-4 md:p-6">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
          Welcome to Handcrafted Haven
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-wrap gap-6 p-4 md:p-8 lg:p-16">
        {/* Product Category 1 */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-semibold">Product Category 1</h2>
          <p className="text-sm md:text-base text-gray-600">
            Explore beautiful handcrafted products.
          </p>
        </div>

        {/* Product Category 2 */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-semibold">Product Category 2</h2>
          <p className="text-sm md:text-base text-gray-600">
            Find the perfect addition to your home.
          </p>
        </div>

        {/* Product Category 3 */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-semibold">Product Category 3</h2>
          <p className="text-sm md:text-base text-gray-600">
            Browse through unique artisan collections.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white text-center p-4">
        <p className="text-sm md:text-base">&copy; 2024 Handcrafted Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
