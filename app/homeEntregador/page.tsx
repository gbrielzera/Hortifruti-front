'use client'; // Indica que este é um componente do lado do cliente

import React, { useState } from 'react';
import { ArrowLeft, Home, Bell, MapPin, User } from 'lucide-react';
import Footer from '../components/itensPages/Footer';
import Header from '../components/itensPages/Header';
import { DefaultButton } from '../components/buttons/defaultButtonsComponent/defaultButton';
import InputBar from '../components/inputs/textInput';

export default function DeliveryHomePage() {
  // Estado para controlar a exibição do popup de confirmação
  const [showPopup, setShowPopup] = useState(false);
  
  // Dados mockados do pedido atual (em uma aplicação real, viria de uma API)
  const [currentOrder] = useState({
    pedido: '1456782',
    valor: 'R$ 50,45',
    coletaLocal: {
      nome: 'Padaria do seu Zé',
      endereco: 'xxxxxx',
      previsao: 'xxxxxx',
      codigo: '1456782'
    },
    entregaLocal: {
      nome: 'Condomínio Belle Ville',
      endereco: 'xxxxxx',
      cliente: 'Rosa',
      previsao: 'xxxxxx',
      codigo: '1456782'
    }
  });

  // Dados mockados de ganhos e estatísticas (em uma aplicação real, viria de uma API)
  const [earnings] = useState({
    ganhosHoje: 'R$ 120,00',
    saldoTotal: 'R$ 340,76',
    rotasAceitas: 23,
    finalizadas: 20,
    recusadas: 2
  });

  // Função para aceitar a entrega (mostra o popup)
  const handleAcceptDelivery = () => {
    setShowPopup(true);
  };

  // Função para fechar o popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Função para voltar para a home (simulada)
  const handleGoHome = () => {
    setShowPopup(false);
    // Em uma aplicação real, aqui teria a navegação para a home
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho da aplicação */}
      <Header/>
      
      {/* Barra de navegação superior */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {/* Botão de voltar */}
          <ArrowLeft className="w-6 h-6 cursor-pointer" />
          
          {/* Localização atual */}
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Asa Sul, Brasília - DF, 70390-000</span>
          </div>
          
          {/* Ícone de notificações */}
          <Bell className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Seção de informações do usuário */}
      <div className="bg-white p-4 mb-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {/* Avatar e nome do usuário */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-gray-600" />
            </div>
            <span className="font-medium">Jefferson</span>
          </div>
          
          {/* Avaliação do usuário (estrelas) */}
          <div className="text-center">
            <span className="text-lg font-bold">Nota</span>
            <div className="flex items-center justify-center space-x-1">
              {[1, 2, 3, 4].map((star) => (
                <span key={star} className="text-yellow-400">★</span>
              ))}
              <span className="text-gray-300">★</span>
            </div>
          </div>
          
          {/* Botão de home */}
          <div className="bg-gray-200 px-4 py-2 rounded-full">
            <Home className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Barra de pesquisa */}
      <div className="px-4 mb-6 max-w-md mx-auto">
        <InputBar placeholder="Procurar novas entregas" />
      </div>

      {/* Seção do pedido atual */}
      <div className="px-4 mb-6 max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-4">
          {/* Cabeçalho do pedido */}
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-lg">Pedido {currentOrder.pedido}</span>
            <span className="font-bold text-lg">valor da corrida: {currentOrder.valor}</span>
          </div>

          {/* Local de coleta */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Local de coleta:</h3>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center mr-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium">{currentOrder.coletaLocal.nome}</span>
              </div>
              
              <div className="space-y-2 text-sm">
                <p><strong>Endereço:</strong> {currentOrder.coletaLocal.endereco}</p>
                <p><strong>previsão de chegada:</strong> {currentOrder.coletaLocal.previsao}</p>
                <p><strong>código do pedido:</strong> {currentOrder.coletaLocal.codigo}</p>
              </div>
            </div>
          </div>

          {/* Local de entrega */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Local de entrega:</h3>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center mr-3">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium">{currentOrder.entregaLocal.nome}</span>
              </div>
              
              <div className="space-y-2 text-sm">
                <p><strong>Endereço:</strong> {currentOrder.entregaLocal.endereco}</p>
                <p><strong>Nome do Cliente:</strong> {currentOrder.entregaLocal.cliente}</p>
                <p><strong>previsão para entrega:</strong> {currentOrder.entregaLocal.previsao}</p>
                <p><strong>código do cliente:</strong> {currentOrder.entregaLocal.codigo}</p>
              </div>
            </div>
          </div>

          {/* Mapa simplificado */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Ver mapa:</h3>
            <div className="w-full h-48 bg-gray-200 rounded-lg relative overflow-hidden">
              {/* Representação visual do mapa com pontos de coleta e entrega */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-blue-200">
                <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">ROTA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botão para aceitar entrega */}
          <div className="flex justify-center">
            <DefaultButton
              texto="ACEITAR ENTREGA"
              onClick={handleAcceptDelivery}
              width={300}
              height={50}
              className="bg-white hover:bg-green-50"
            />
          </div>
        </div>
      </div>

      {/* Seção de histórico e ganhos */}
      <div className="px-4 mb-6 max-w-md mx-auto">
        <h2 className="font-bold text-lg mb-4">Histórico:</h2>
        
        {/* Corridas pendentes e concluídas */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="text-center mb-4">
            <div className="bg-gray-200 px-6 py-2 rounded-full inline-block mb-2">
              <span className="font-medium">Corridas Pendentes</span>
            </div>
            <p className="font-medium">Pedido 145678</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-200 px-6 py-2 rounded-full inline-block mb-2">
              <span className="font-medium">Corridas Concluídas</span>
            </div>
            <div className="space-y-1">
              <p className="font-medium">Pedido 167547</p>
              <p className="text-sm text-gray-600">Vila Augusto Casa 12</p>
              <p className="text-sm text-gray-600">Lote 03</p>
            </div>
          </div>
        </div>

        {/* Ganhos e estatísticas */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h3 className="font-bold text-lg mb-4">Meus ganhos:</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Ganhos do dia</p>
              <p className="text-2xl font-bold text-green-600">{earnings.ganhosHoje}</p>
              <p className="text-sm text-gray-600 mt-2">Saldo total: {earnings.saldoTotal}</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Rotas aceitas:</span>
                <span className="font-bold">{earnings.rotasAceitas}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Finalizadas:</span>
                <span className="font-bold">{earnings.finalizadas}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Recusadas:</span>
                <span className="font-bold">{earnings.recusadas}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé da aplicação */}
      <Footer/>

      {/* Popup de confirmação de entrega aceita */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center">
            <h2 className="text-3xl font-bold mb-6">
              Entrega aceita com sucesso!
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Vá ao local de retirada para pegar o pedido do cliente.
            </p>
            
            <div className="flex justify-between items-center">
              <DefaultButton
                texto="Voltar para Home"
                onClick={handleGoHome}
                width={200}
                height={50}
                className="bg-white hover:bg-gray-50"
              />
              
              <button
                onClick={handleClosePopup}
                className="text-red-500 font-bold text-lg hover:text-red-700"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}