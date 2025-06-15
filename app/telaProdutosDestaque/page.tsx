'use client'

import React from 'react';
import { DefaultButton } from '@/app/components/buttons/defaultButtonsComponent/defaultButton';
import InputBar from '@/app/components/inputs/textInput';
import Header from '../components/itensPages/Header';
import Footer from '../components/itensPages/Footer';

import {
  Edit,
  Trash,
  Camera,
  Star,
  StarOff,
  Home,
  User,
  ShoppingBag,
  BarChart,
  Calendar,
  MessageCircle,
  FolderOpen,
  Plus,
  Store,
} from 'lucide-react';

export default function ProdutosScreen() {
  const products = [
    { id: 1, name: 'Editar nome', price: 0, image: '' },
    { id: 2, name: 'Editar nome', price: 0, image: '' },
    { id: 3, name: 'Editar nome', price: 0, image: '' },
    { id: 4, name: 'Editar nome', price: 0, image: '' },
    { id: 5, name: 'Editar nome', price: 0, image: '' },
    { id: 6, name: 'Editar nome', price: 0, image: '' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen px-6 py-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-green-600 mb-1">Loja aberta</h2>
            <p className="text-sm text-gray-500">Dentro do horário de pagamento</p>
          </div>

          <nav className="space-y-4">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-3 text-gray-900 font-medium">
              <Home className="w-4 h-4" /> Home
            </div>
            <div className="flex items-center gap-2 p-3 text-sm text-gray-700">
              <User className="w-4 h-4" /> Perfil
            </div>
            <div className="flex items-center gap-2 p-3 border-l-4 border-gray-900 bg-gray-50 rounded text-gray-900 font-medium">
              <FolderOpen className="w-4 h-4" /> Frescos da dona Maria
            </div>
            <div className="flex items-center gap-2 p-3 text-sm text-gray-700">
              <ShoppingBag className="w-4 h-4" /> Pedidos
            </div>
            <div className="flex items-center gap-2 p-3 text-sm text-gray-700">
              <BarChart className="w-4 h-4" /> Lucro: R$ 350,69
            </div>
            <div className="flex items-center gap-2 p-3 text-sm text-gray-700">
              <span className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <StarOff className="w-4 h-4 text-gray-300" />
              </span>
              Classificação
            </div>
            <div className="flex items-center gap-2 p-3 text-sm text-gray-700">
              <BarChart className="w-4 h-4" /> Relacionamento e vendas
            </div>
            <div className="flex items-center gap-2 p-3 text-sm text-gray-700">
              <Calendar className="w-4 h-4" /> Agendamento
            </div>
            <div className="flex items-center gap-2 p-3 text-sm text-gray-700">
              <MessageCircle className="w-4 h-4" /> Chats
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Produtos</h1>
            <p className="text-gray-600 mb-6">Adicione produtos à sua loja...</p>

            {/* Categoria */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <InputBar placeholder="Edite o nome da sua categoria..." type="text" />
                <button className="p-2 text-gray-600 hover:text-gray-800">
                  <Edit className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow p-5 flex flex-col items-center text-center space-y-3">
                  <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
                    <Camera className="w-4 h-4" /> Adicionar foto
                  </button>
                  <div className="bg-gray-300 h-32 w-full rounded-lg flex items-center justify-center">
                    <Camera className="w-10 h-10 text-gray-400" />
                  </div>
                  <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
                    <Edit className="w-4 h-4" /> Editar valor R$
                  </button>
                  <button className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1">
                    <Trash className="w-4 h-4" /> Remover
                  </button>
                  <span className="font-medium text-gray-800">{product.name}</span>
                </div>
              ))}
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col items-center space-y-4">
              <DefaultButton
                texto={
                  <span className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />Adicionar mais produtos
                  </span>
                }
                onClick={() => {}}
                width={300}
                height={50}
              />


              <DefaultButton
                texto={
                  <span className="flex items-center gap-2">
                    <Trash className="w-4 h-4" /> Excluir toda categoria
                  </span>
                }
                onClick={() => {}}
                width={250}
                height={50}
                className="border-red-500 text-red-500 hover:bg-red-50"
              />

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
