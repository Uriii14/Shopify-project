import { Link } from 'react-router-dom'

export default function Catalog() {
  const products = [
    { id: 1, name: 'Vestido Elegante', price: 129.00, slug: 'vestido-elegante' },
    { id: 2, name: 'Blazer Moderno', price: 159.00, slug: 'blazer-moderno' },
    { id: 3, name: 'Pantalón Clásico', price: 89.00, slug: 'pantalon-clasico' },
    { id: 4, name: 'Camisa Premium', price: 79.00, slug: 'camisa-premium' },
    { id: 5, name: 'Falda Midi', price: 69.00, slug: 'falda-midi' },
    { id: 6, name: 'Chaqueta Denim', price: 119.00, slug: 'chaqueta-denim' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Todos los Productos</h1>
        <p className="text-gray-600 text-lg">
          Descubre nuestra colección completa de {products.length} productos
        </p>
      </div>

      {/* Filters */}
      <div className="mb-12 pb-6 border-b">
        <div className="flex flex-wrap gap-3 items-center">
          <span className="font-medium text-sm">Filtros:</span>
          <button className="px-4 py-2 border rounded-full text-sm hover:bg-gray-50 transition-colors">
            Todos
          </button>
          <button className="px-4 py-2 border rounded-full text-sm hover:bg-gray-50 transition-colors">
            Vestidos
          </button>
          <button className="px-4 py-2 border rounded-full text-sm hover:bg-gray-50 transition-colors">
            Tops
          </button>
          <button className="px-4 py-2 border rounded-full text-sm hover:bg-gray-50 transition-colors">
            Pantalones
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link 
            key={product.id} 
            to={`/product/${product.slug}`}
            className="group"
          >
            <div className="aspect-square bg-gray-100 mb-4 group-hover:bg-gray-200 transition-colors">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                {product.name}
              </div>
            </div>
            <h3 className="font-medium mb-1">{product.name}</h3>
            <p className="text-gray-600">€{product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-16">
        <button className="border border-black px-8 py-3 font-medium hover:bg-black hover:text-white transition-colors">
          Cargar Más Productos
        </button>
      </div>
    </div>
  )
}