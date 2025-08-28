import { useState } from 'react'
import { Link } from 'react-router-dom'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  size: string
  slug: string
}

export default function Cart() {
  // Mock cart data - después implementarás el estado global del carrito
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Vestido Elegante',
      price: 129.00,
      quantity: 1,
      size: 'M',
      slug: 'vestido-elegante'
    },
    {
      id: 2,
      name: 'Blazer Moderno',
      price: 159.00,
      quantity: 2,
      size: 'L',
      slug: 'blazer-moderno'
    }
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(items => items.filter(item => item.id !== id))
    } else {
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 50 ? 0 : 9.95
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-7xl text-center">
        <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
        <p className="text-gray-600 mb-8">
          Añade algunos productos para comenzar tu compra
        </p>
        <Link 
          to="/products" 
          className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
        >
          Continuar Comprando
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 border rounded">
                {/* Product Image */}
                <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                  Img
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <Link 
                    to={`/product/${item.slug}`}
                    className="font-medium hover:text-gray-600"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    Talla: {item.size}
                  </p>
                  <p className="font-semibold mt-2">€{item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 border hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>

                {/* Remove Item */}
                <button 
                  onClick={() => updateQuantity(item.id, 0)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          {/* Continue Shopping */}
          <div className="mt-8">
            <Link 
              to="/products" 
              className="text-sm border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors"
            >
              ← Continuar Comprando
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="text-lg font-semibold mb-4">Resumen del Pedido</h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Envío</span>
                <span>
                  {shipping === 0 ? 'Gratis' : `€${shipping.toFixed(2)}`}
                </span>
              </div>
              {shipping === 0 && (
                <p className="text-xs text-green-600">
                  ¡Envío gratuito en pedidos superiores a €50!
                </p>
              )}
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors mb-4">
              Proceder al Pago
            </button>

            <div className="text-xs text-gray-600 space-y-1">
              <p>• Envío en 2-3 días laborables</p>
              <p>• Devoluciones gratuitas en 30 días</p>
              <p>• Pago seguro garantizado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}