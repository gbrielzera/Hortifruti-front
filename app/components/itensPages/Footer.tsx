// components/Footer.tsx
import { Facebook, Instagram, Mail, MapPin, Phone, Clock, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Grade principal com 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          
          {/* Coluna 1: Informações da loja */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-green-700 flex items-center">
              <ShoppingBag className="mr-2" />
              Hortifruti
            </h3>
            <p className="text-gray-600 mb-3">
              Frescor e qualidade direto do produtor para sua mesa desde 2010.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>Av. das Hortaliças, 456 - São Paulo/SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>(11) 9876-5432</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>Seg-Sáb: 7h às 19h</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Links úteis */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold mb-3 text-gray-800">Navegação</h4>
              <ul className="space-y-2">
                {['Home', 'Produtos', 'Ofertas', 'Sobre Nós'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-green-600">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 text-gray-800">Ajuda</h4>
              <ul className="space-y-2">
                {['FAQ', 'Entregas', 'Pagamentos', 'Trocas'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-green-600">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coluna 3: Newsletter e redes sociais */}
          <div>
            <h4 className="font-bold mb-3 text-gray-800">Newsletter</h4>
            <p className="text-gray-600 mb-3">
              Cadastre-se para receber ofertas exclusivas
            </p>
            
            <form className="mb-4 flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <button 
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Enviar
              </button>
            </form>
            
            <div>
              <h4 className="font-bold mb-2 text-gray-800">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-2 md:mb-0">
            © {new Date().getFullYear()} Hortifruti. Todos os direitos reservados.
          </div>
          
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-green-600">
              Termos de Serviço
            </Link>
            <Link href="#" className="text-gray-500 hover:text-green-600">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}