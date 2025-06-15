// components/Header.tsx
import { Search, ShoppingCart, User, MapPin } from 'lucide-react';
import LogoFormatadaInicial from '@/app/components/itensPages/LogoFormatadaInicial';

interface HeaderProps {
  userName?: string;
  location?: string;
}

export default function Header({ 
  userName = "Maria", 
  location = "Asa Sul, Brasília - DF, 70390-000" 
}: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo - Mais refinado */}
          <div className='pt-3'>
          <LogoFormatadaInicial/>
          </div>

          {/* Search Bar - Mais elegante */}
          <div className="flex-1 max-w-xl mx-4 md:mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400 w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Buscar frutas, verduras..."
                className="block w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Navigation - Mais limpo */}
          <nav className="flex items-center space-x-6">
            <a href="#" className="hidden md:block text-gray-600 hover:text-green-600 font-medium text-sm transition-colors">
              Home
            </a>
            <a href="#" className="hidden md:block text-gray-600 hover:text-green-600 font-medium text-sm transition-colors">
              Categorias
            </a>
            <button className="p-2 text-gray-500 hover:text-green-600 relative transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <div className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 rounded-full px-3 py-1.5 cursor-pointer transition-colors">
              <User className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700 font-medium text-sm">{userName}</span>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Location Bar - Mais sutil */}
      <div className="bg-gray-50 px-4 py-1.5 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center">
          <MapPin className="w-3.5 h-3.5 text-gray-400 mr-1.5" />
          <span className="text-xs text-gray-500 truncate max-w-[180px] sm:max-w-none">
            {location}
          </span>
        </div>
      </div>
    </header>
  );
}