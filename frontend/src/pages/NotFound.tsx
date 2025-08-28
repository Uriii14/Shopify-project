import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Página No Encontrada
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida a otra ubicación.
        </p>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link 
            to="/" 
            className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
          >
            Volver al Inicio
          </Link>
          
          <Link 
            to="/products" 
            className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors"
          >
            Ver Productos
          </Link>
        </div>

        {/* Decorative element */}
        <div className="mt-12 text-gray-300">
          <svg className="mx-auto h-12 w-12" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  )
}