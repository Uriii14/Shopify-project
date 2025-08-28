import { Routes, Route } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Catálogo de productos */}
        <Route path="/products" element={<Catalog />} />

        {/* Detalle de producto por slug */}
        <Route path="/product/:slug" element={<ProductDetail />} />

        {/* Carrito */}
        <Route path="/cart" element={<Cart />} />
      </Route>

      {/* 404 para rutas no encontradas */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
