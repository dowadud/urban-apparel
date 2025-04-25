import Link from 'next/link';
import { getProducts } from '@/lib/db';

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/hero-background.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">URBAN APPAREL</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Embrace your daring side and stand out with our urban collection
          </p>
          <Link 
            href="/products" 
            className="inline-block bg-white text-black px-8 py-3 text-lg font-bold hover:bg-gray-200 transition duration-300"
          >
            SHOP NOW
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">COLLECTIONS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-96 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
              <img 
                src="/godspeed-collection.jpg" 
                alt="Godspeed Collection" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="text-3xl font-bold mb-2">GODSPEED</h3>
                <Link 
                  href="/collections/godspeed" 
                  className="inline-block border border-white px-4 py-2 hover:bg-white hover:text-black transition duration-300"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
            
            <div className="relative h-96 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
              <img 
                src="/adg-collection.jpg" 
                alt="ADG Collection" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="text-3xl font-bold mb-2">ADG</h3>
                <Link 
                  href="/collections/adg" 
                  className="inline-block border border-white px-4 py-2 hover:bg-white hover:text-black transition duration-300"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">NEW ARRIVALS</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="mb-4 overflow-hidden">
                  <img 
                    src={product.image_path.replace('/home/ubuntu', '')} 
                    alt={product.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400">Shop Now</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-block border border-white px-6 py-3 text-lg hover:bg-white hover:text-black transition duration-300"
            >
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">JOIN THE MOVEMENT</h2>
            <p className="text-xl mb-8">Subscribe to our newsletter for exclusive drops and special offers</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-white text-black font-bold hover:bg-gray-200 transition duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
