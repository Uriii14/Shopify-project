import { Link, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b">
        <nav className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-wide">Boutique</Link>
          <div className="flex gap-6 text-sm">
            <Link to="/products" className="hover:underline">Shop</Link>
            <Link to="/cart" className="hover:underline">Cart</Link>
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