import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Search } from 'lucide-react'
import ProductCard from '../components/product/ProductCard'

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState('')

  const products = [
    { slug: 'elegant-dress', name: 'Elegant Dress', price: 129, tag: 'new' as const },
    { slug: 'modern-blazer', name: 'Modern Blazer', price: 159, tag: 'bestseller' as const },
    { slug: 'classic-pants', name: 'Classic Pants', price: 89 },
    { slug: 'premium-shirt', name: 'Premium Shirt', price: 79 },
    { slug: 'midi-skirt', name: 'Midi Skirt', price: 69, tag: 'sale' as const },
    { slug: 'denim-jacket', name: 'Denim Jacket', price: 119 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Search Bar */}
      <div className="mb-12">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* You might also like section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-8">You might also like</h2>
        
        {/* Filters */}
        <div className="mb-12 pb-6 border-b">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="font-medium text-sm">Filters:</span>
            <button className="px-4 py-2 border rounded-full text-sm hover:bg-gray-50 transition-colors">
              All
            </button>
            <button className="px-4 py-2 border rounded-full text-sm hover:bg-gray-50 transition-colors">
              Dresses
            </button>
            <button className="px-4 py-2 border rounded-full text-sm hover:bg-gray-50 transition-colors">
              Tops
            </button>
            <button className="px-4 py-2 border rounded-full text-sm hover:bg-gray-50 transition-colors">
              Pants
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {products.map((product) => (
          <ProductCard 
            key={product.slug} 
            slug={product.slug}
            name={product.name}
            price={product.price}
            tag={product.tag}
          />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-16">
        <button className="border border-black px-8 py-3 font-medium hover:bg-black hover:text-white transition-colors">
          Load More Products
        </button>
      </div>
    </div>
  )
}