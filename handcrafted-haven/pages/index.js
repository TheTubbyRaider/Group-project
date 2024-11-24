import Head from 'next/head'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Handcrafted Wooden Bowl',
      price: '$35',
      rating: 4.5,
      image: '/images/bowl.jpg',
    },
    {
      id: 2,
      name: 'Ceramic Vase',
      price: '$45',
      rating: 4.7,
      image: '/images/vase.jpg',
    },
    {
      id: 3,
      name: 'Woven Basket',
      price: '$25',
      rating: 4.3,
      image: '/images/basket.jpg',
    },
    {
      id: 4,
      name: 'Clay Pot',
      price: '$40',
      rating: 4.8,
      image: '/images/pot.jpg',
    },
  ];

  return (
    <>
      <Head>
        <title>Handcrafted Haven</title>
        <meta name="description" content="A marketplace for handcrafted goods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header and Navigation */}
      <header className="sticky top-0 bg-white shadow-md">
        <nav className="flex justify-between items-center p-4">
          <div className="text-2xl font-serif text-brown">Handcrafted Haven</div>
          <div className="space-x-4">
            <a href="#" className="text-brown">Home</a>
            <a href="#products" className="text-brown">Products</a>
            <a href="#profile" className="text-brown">Profile</a>
            <a href="#cart" className="text-brown">Cart</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="p-8">
        <section id="hero" className="flex flex-col items-center mb-12">
          <h1 className="text-4xl mb-6 font-serif text-brown">Welcome to Handcrafted Haven</h1>
          <p className="text-lg mb-4 text-gray-700">Explore unique, handmade products from talented artisans.</p>
        </section>

        {/* Product Listings */}
        <section id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Handcrafted Haven. All rights reserved.</p>
      </footer>
    </>
  )
}
