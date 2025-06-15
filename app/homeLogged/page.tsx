"use client";

import React, { useState } from 'react';
import { ShoppingCart, Star, X, Plus, Minus } from 'lucide-react';
import { DefaultButton } from "@/app/components/buttons/defaultButtonsComponent/defaultButton";
import Header from '../components/itensPages/Header';
import Footer from '../components/itensPages/Footer';

interface Fruta {
  id: number;
  nome: string;
  preco: number;
  desconto: number;
  imagem: string;
  categoria: string;
  descricao: string;
}

interface Categoria {
  nome: string;
  icone: string;
}

interface Hortifruti {
  nome: string;
  rating: number;
  imagem: string;
}

interface Notificacao {
  usuario: string;
  texto: string;
  numero: number;
}

const FrutasShowcase = () => {
  // Estados do componente
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState<Fruta | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Dados mockados
  const frutas: Fruta[] = [
    { id: 1, nome: 'Maçã', preco: 3.99, desconto: 20, imagem: '🍎', categoria: 'Doces', descricao: 'Maçã vermelha fresquinha, rica em vitaminas e fibras.' },
    { id: 2, nome: 'Banana', preco: 3.99, desconto: 20, imagem: '🍌', categoria: 'Tropicais', descricao: 'Banana nanica madura, perfeita para vitaminas e lanches.' },
    { id: 3, nome: 'Manga', preco: 1.99, desconto: 20, imagem: '🥭', categoria: 'Tropicais', descricao: 'Manga tommy doce e suculenta, ideal para sobremesas.' }
  ];

  const categorias: Categoria[] = [
    { nome: 'Tropicais', icone: '🥥' },
    { nome: 'Cítricas', icone: '🍊' },
    { nome: 'Frutas vermelhas', icone: '🍓' },
    { nome: 'Orgânicas', icone: '🌱' }
  ];

  const hortifrutis: Hortifruti[] = Array(5).fill({ 
    nome: 'Frutaria', 
    rating: 3, 
    imagem: '🏪' 
  });

  const notificacoes: Notificacao[] = [
    { usuario: 'Ana ribeiro', texto: 'Chegou muito rápido e fresquinhas🍓🍎', numero: 1 },
    { usuario: 'Ana ribeiro', texto: 'Chegou muito rápido e fresquinhas🍓🍎', numero: 2 },
    { usuario: 'Ana ribeiro', texto: 'Chegou muito rápido e fresquinhas🍓🍎', numero: 3 }
  ];

  // Funções auxiliares
  const openPopup = (fruta: Fruta) => {
    setSelectedFruit(fruta);
    setQuantity(1);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedFruit(null);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const calcularPrecoComDesconto = (preco: number, desconto: number) => {
    return (preco * (1 - desconto / 100)).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho da aplicação */}
      <Header />

      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Seção Hero com notificações */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Peça suas Frutas<br />Frescas agora!
            </h1>
            <p className="text-xl text-green-600 font-semibold mb-4">Até 30% off</p>
            <DefaultButton 
              texto="Ver ofertas" 
              width={200} 
              height={50}
              className="bg-gray-200 hover:bg-green-200 transition-colors"
            />
          </div>
          
          {/* Card de notificações */}
          <div className="bg-gray-200 rounded-3xl p-6 w-full md:w-80">
            <h2 className="font-bold mb-4">Últimas avaliações</h2>
            {notificacoes.map((notif, index) => (
              <div key={index} className="flex items-center mb-4 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  {notif.numero}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">{notif.usuario}</p>
                  <p className="text-xs text-gray-600">{notif.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de produtos mais vendidos */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Produtos mais vendidos:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {frutas.map((fruta) => (
              <div 
                key={fruta.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl">
                    {fruta.imagem}
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    -{fruta.desconto}%
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{fruta.nome}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-gray-500 line-through text-sm">R$ {fruta.preco.toFixed(2)}</span>
                      <span className="text-green-600 font-bold ml-2">R$ {calcularPrecoComDesconto(fruta.preco, fruta.desconto)}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => openPopup(fruta)}
                    className="w-full bg-gray-200 hover:bg-green-200 border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-center transition-colors"
                    aria-label={`Adicionar ${fruta.nome} ao carrinho`}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Adicionar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de categorias */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Categorias:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categorias.map((categoria, index) => (
              <div 
                key={index} 
                className="text-center cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl mx-auto mb-2">
                  {categoria.icone}
                </div>
                <p className="text-sm font-medium">{categoria.nome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de hortifrutis mais visitados */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Hortifrutis mais visitados:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {hortifrutis.map((hortifruti, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="h-20 sm:h-24 bg-gray-200 rounded-lg flex items-center justify-center text-3xl mb-3">
                  {hortifruti.imagem}
                </div>
                <h3 className="font-medium mb-2">{hortifruti.nome}</h3>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className={`w-4 h-4 ${starIndex < hortifruti.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Espaço reservado para comentários */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Comentários:</h2>
          <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center text-gray-500">
            Área para depoimentos dos clientes
          </div>
        </section>
      </div>

      {/* Popup de detalhes do produto */}
      {showPopup && selectedFruit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Cabeçalho do popup */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{selectedFruit.nome}</h2>
                <button 
                  onClick={closePopup}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Fechar popup"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Imagem do produto */}
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-8xl mb-4">
                {selectedFruit.imagem}
              </div>

              {/* Informações do produto */}
              <div className="mb-4">
                <p className="text-gray-600 mb-2">{selectedFruit.descricao}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-gray-500 line-through">R$ {selectedFruit.preco.toFixed(2)}</span>
                    <span className="text-green-600 font-bold text-xl ml-2">
                      R$ {calcularPrecoComDesconto(selectedFruit.preco, selectedFruit.desconto)}
                    </span>
                  </div>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                    -{selectedFruit.desconto}%
                  </span>
                </div>
              </div>

              {/* Controle de quantidade */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-medium">Quantidade:</span>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={decrementQuantity}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Reduzir quantidade"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-lg min-w-[2rem] text-center">{quantity}</span>
                  <button 
                    onClick={incrementQuantity}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Aumentar quantidade"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">Total:</span>
                  <span className="font-bold text-xl text-green-600">
                    R$ {(parseFloat(calcularPrecoComDesconto(selectedFruit.preco, selectedFruit.desconto)) * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Botões de ação */}
              <div className="space-y-3">
                <DefaultButton 
                  texto="Adicionar ao Carrinho" 
                  width="100%" 
                  height={50}
                  className="bg-green-600 hover:bg-green-700 text-white transition-colors"
                  onClick={() => {
                    alert(`${quantity}x ${selectedFruit.nome} adicionado ao carrinho!`);
                    closePopup();
                  }}
                />
                <DefaultButton 
                  texto="Comprar Agora" 
                  width="100%" 
                  height={50}
                  className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  onClick={() => {
                    alert(`Comprando ${quantity}x ${selectedFruit.nome}!`);
                    closePopup();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    
      {/* Rodapé da aplicação */}
      <Footer />
    </div>
  );
};

export default FrutasShowcase;