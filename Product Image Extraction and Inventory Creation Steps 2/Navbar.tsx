import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wider">
            URBAN APPAREL
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-300 transition duration-300">
              HOME
            </Link>
            <Link href="/collections/godspeed" className="hover:text-gray-300 transition duration-300">
              GODSPEED
            </Link>
            <Link href="/collections/adg" className="hover:text-gray-300 transition duration-300">
              ADG
            </Link>
            <Link href="/products" className="hover:text-gray-300 transition duration-300">
              ALL PRODUCTS
            </Link>
          </nav>
          
          {/* User Actions */}
          <div className="flex items-center space-x-6">
            <Link href="/search" className="hover:text-gray-300 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            <Link href="/account" className="hover:text-gray-300 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link href="/cart" className="hover:text-gray-300 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden hover:text-gray-300 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
