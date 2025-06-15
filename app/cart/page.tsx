"use client";

import { ShoppingCart } from 'lucide-react';
import Footer from '../components/itensPages/Footer';
import Header from '../components/itensPages/Header';

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Cabeçalho */}
        <Header/>

      {/* Conteúdo Principal */}
      <main className="flex-grow p-4 max-w-md mx-auto w-full">
        {/* Estado do Carrinho */}
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <div className="flex flex-col items-center justify-center py-8">
            <ShoppingCart size={48} className="text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700">Seu carrinho está vazio</h2>
            <p className="text-gray-500 mt-2 text-center">
              Adicione produtos para continuar
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
          <div className="p-4 border-b">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Laranja</h3>
                <p className="text-gray-500 text-sm">R$ 2,50/kg</p>
              </div>
              <span className="font-bold">R$ 2,50</span>
            </div>
            
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center border rounded-full">
                <button className="px-3 py-1 text-lg">-</button>
                <span className="px-2">1</span>
                <button className="px-3 py-1 text-lg">+</button>
              </div>
              
              <button className="text-red-500 text-sm font-medium">
                Remover
              </button>
            </div>
          </div>
        </div>

        {/* Resumo do Pedido (comentado) */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h3 className="font-bold mb-3">Resumo do Pedido</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>R$ 2,50</span>
            </div>
            <div className="flex justify-between">
              <span>Entrega</span>
              <span>R$ 0,50</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>R$ 3,00</span>
            </div>
          </div>
        </div>

        {/* Botão Principal (comentado) */}

        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold shadow-lg">
          Finalizar Compra
        </button>

      </main>

      {/* Rodapé */}
      <Footer/>
    </div>
  );
}