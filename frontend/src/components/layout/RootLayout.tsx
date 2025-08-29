import { Link, Outlet } from 'react-router-dom'
import { Search, ShoppingBag, Heart, User } from 'lucide-react'

export default function RootLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b">
        <nav className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
          <div className="w-32"></div> {/* Spacer izquierdo */}
          <Link to="/" className="text-xl font-bold tracking-wide">Boutique</Link>
          <div className="flex items-center gap-4 w-32 justify-end">
            <Link 
              to="/products" 
              className="hover:bg-gray-100 p-2 rounded-full transition-colors"
              title="Search products"
            >
              <Search size={20} className="text-gray-700 hover:text-gray-900" />
            </Link>
            <button 
              className="hover:bg-gray-100 p-2 rounded-full transition-colors"
              title="Favorites"
            >
              <Heart size={20} className="text-gray-700 hover:text-gray-900" />
            </button>
            <Link 
              to="/cart" 
              className="hover:bg-gray-100 p-2 rounded-full transition-colors"
              title="Cart"
            >
              <ShoppingBag size={20} className="text-gray-700 hover:text-gray-900" />
            </Link>
            <button 
              className="hover:bg-gray-100 p-2 rounded-full transition-colors"
              title="Profile"
            >
              <User size={20} className="text-gray-700 hover:text-gray-900" />
            </button>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-10 text-sm/6 text-gray-600">
          © {new Date().getFullYear()} Boutique. All rights reserved.
        </div>
      </footer>
    </div>
  )
}