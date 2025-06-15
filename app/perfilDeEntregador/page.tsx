'use client';

import React from 'react';
import { Camera } from 'lucide-react';
import { DefaultButton } from '../components/buttons/defaultButtonsComponent/defaultButton';
import InputBar from '../components/inputs/textInput';
import Footer from '../components/itensPages/Footer';
import Header from '../components/itensPages/Header';

// =============================================
// COMPONENTE PRINCIPAL
// =============================================

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar - Perfil e Veículos */}
          <div className="w-full lg:w-80 bg-white rounded-lg shadow-md p-6">
            {/* Seção de Foto do Perfil */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center border-4 border-gray-400">
                  <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
                </div>
                <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow hover:shadow-md">
                  <Camera size={16} className="text-gray-600" />
                </button>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-800 mt-2">
                Clique na foto para alterar
              </button>
            </div>
            
            {/* Informações do Usuário */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Jeferson San</h2>
              <p className="text-gray-600">(61)9999-99990</p>
              <p className="text-sm text-gray-500">Asa Sul, Brasília - DF, 70390-000</p>
            </div>

            {/* Lista de Veículos */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-4">Veículos Cadastrados</h3>
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <p><strong>Tipo:</strong> Carro</p>
                <p><strong>Modelo:</strong> ####</p>
                <p><strong>Ano:</strong> 2012 | <strong>Placa:</strong> XXXXX</p>

                <div className="flex flex-col gap-2 mt-3">
                  <DefaultButton
                    texto="Documento do veículo"
                    onClick={() => {}}
                    height={40}
                    width="100%"
                  />
                  <DefaultButton
                    texto="Remover Veículo"
                    onClick={() => {}}
                    height={40}
                    width="100%"
                    className="bg-red-500 text-white hover:bg-red-600"
                  />
                </div>
              </div>
            </div>

            <DefaultButton
              texto="Sair"
              onClick={() => {}}
              height={45}
              width="100%"
              className="bg-gray-200 hover:bg-gray-300"
            />
          </div>

          {/* Formulário de Edição */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">
              Mantenha seus dados sempre atualizados
            </h1>

            {/* Formulário de Dados Pessoais */}
            <h2 className="text-lg font-semibold mb-4">Editar Dados:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <InputBar placeholder="Nome" id="nome" />
              <InputBar placeholder="CEP" id="cep" />
              <InputBar placeholder="CPF" id="cpf" />
              <div className="grid grid-cols-2 gap-2">
                <InputBar placeholder="Endereço" id="endereco" />
                <InputBar placeholder="Número" id="numero" />
              </div>
              <InputBar placeholder="Email" id="email" />
              <InputBar placeholder="Complemento" id="complemento" />
            </div>
              <InputBar placeholder="Telefone" id="telefone" />

            <div className='flex justify-center mt-8'>
            <DefaultButton
              texto="Mudar Senha"
              onClick={() => {}}
              height={45}
              width={200}
              className="m-8"
            />

            </div>

            {/* Formulário de Veículos */}
            <h2 className="text-lg font-semibold mb-4">Alterar ou adicionar veículos:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <InputBar placeholder="Tipo" id="tipo" />
              <InputBar placeholder="Modelo" id="modelo" />
              <InputBar placeholder="Ano" id="ano" />
            </div>
            <div className="mb-6">
              <InputBar placeholder="Placa" id="placa" />
            </div>

<div className='flex flex-col items-center justify-center m-8 gap-4'>
  <DefaultButton
    texto="Anexar Documento do Carro"
    height={45}
    width={300}
    className="flex items-center gap-2 justify-center"
  />
  <DefaultButton
    texto="Salvar"
    height={50}
    width={150}
    className="bg-green-500 text-white hover:bg-green-600"
  />
</div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}