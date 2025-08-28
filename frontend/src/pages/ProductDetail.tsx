import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

export default function ProductDetail() {
  const { slug } = useParams()
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [quantity, setQuantity] = useState(1)

  const product = {
    name: 'Vestido Elegante',
    price: 129.00,
    description: 'Un vestido elegante perfecto para cualquier ocasión especial. Confeccionado con materiales de alta calidad y un diseño atemporal que nunca pasa de moda.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: ['Imagen Principal', 'Vista Lateral', 'Detalle']
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla')
      return
    }
    console.log('Añadido al carrito:', { slug, size: selectedSize, quantity })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link to="/" className="hover:text-black">Inicio</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-black">Productos</Link>
        <span className="mx-2">/</span>
        <span className="text-black">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Product Images */}
        <div>
          <div className="aspect-square bg-gray-100 mb-6">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              {product.images[0]}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                  {image}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-medium mb-8">€{product.price.toFixed(2)}</p>
          
          <p className="text-gray-700 mb-10 leading-relaxed">
            {product.description}
          </p>

          {/* Size Selection */}
          <div className="mb-8">
            <h3 className="font-medium mb-4">Talla</h3>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 border rounded font-medium transition-colors ${
                    selectedSize === size 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-10">
            <h3 className="font-medium mb-4">Cantidad</h3>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border rounded hover:bg-gray-50 transition-colors"
              >
                −
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border rounded hover:bg-gray-50 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition-colors mb-8"
          >
            Añadir al Carrito
          </button>

          {/* Product Details */}
          <div className="border-t pt-8">
            <h3 className="font-medium mb-4">Detalles del Producto</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Material: 100% Algodón premium</p>
              <p>• Cuidado: Lavar a máquina en agua fría</p>
              <p>• Origen: Hecho en España</p>
              <p>• Envío gratuito en pedidos superiores a €50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}