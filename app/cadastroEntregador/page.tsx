import React from "react";

// Importa o componente de input padrão usado no projeto
import InputBar from "@/app/components/inputs/textInput";

// Importa o botão padrão estilizado
import { DefaultButton } from "@/app/components/buttons/defaultButtonsComponent/defaultButton";

// Importa o logo inicial
import LogoFormatadaInicial from "@/app/components/itensPages/LogoFormatadaInicial";
import Footer from '../components/itensPages/Footer';

// Componente de página de cadastro do entregador - apenas front-end
export default function CadastroEntregador() {
  return (
    <div>
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Exibe o logo no topo da página */}
      <LogoFormatadaInicial className="mt-1 mb-0" />

      {/* Container principal do formulário */}
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-3xl m-3 mt-0 overflow-hidden">
        {/* Texto de instrução */}
        <p className="text-center text-gray-800 mb-6">
          Para completar seu acesso é necessário que preencha alguns dados:
        </p>

        {/* Formulário principal - dividido em grid com 2 colunas no desktop */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Campo Nome */}
          <div className="flex flex-col">
            <label htmlFor="nome" className="mb-1 font-medium text-gray-700">Nome</label>
            <InputBar placeholder="" id="nome" />
          </div>

          {/* Campo Telefone */}
          <div className="flex flex-col">
            <label htmlFor="telefone" className="mb-1 font-medium text-gray-700">Telefone</label>
            <InputBar placeholder="" id="telefone" />
          </div>

          {/* Campo CPF */}
          <div className="flex flex-col">
            <label htmlFor="cpf" className="mb-1 font-medium text-gray-700">CPF</label>
            <InputBar placeholder="" id="cpf" />
          </div>

          {/* Campo Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700">Email</label>
            <InputBar placeholder="" id="email" />
          </div>

          {/* Campo Endereço - ocupa as 2 colunas no desktop */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="endereco" className="mb-1 font-medium text-gray-700">Endereço</label>
            <InputBar placeholder="" id="endereco" />
          </div>

          {/* Campo CEP */}
          <div className="flex flex-col">
            <label htmlFor="cep" className="mb-1 font-medium text-gray-700">CEP</label>
            <InputBar placeholder="" id="cep" />
          </div>

          {/* Campo Número */}
          <div className="flex flex-col">
            <label htmlFor="numero" className="mb-1 font-medium text-gray-700">Número</label>
            <InputBar placeholder="" id="numero" />
          </div>

          {/* Campo Complemento - ocupa as 2 colunas no desktop */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="complemento" className="mb-1 font-medium text-gray-700">Complemento</label>
            <InputBar placeholder="" id="complemento" />
          </div>

          {/* Upload de Foto */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-700">Adicione uma foto</span>
            <input
              type="file"
              accept="image/*"
              className="text-sm border-2 rounded-2xl p-1 bg-gray-200"
            />
          </div>

          {/* Upload da CNH */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-700">Anexe sua CNH</span>
            <input
              type="file"
              accept="application/pdf,image/*"
              className="text-sm border-2 rounded-2xl p-1 bg-gray-200"
            />
          </div>

          {/* Área de cadastro do veículo */}
          <div className="md:col-span-2 flex flex-col items-center mt-4">
            <span className="text-gray-700 mb-2">Adicione seu veículo</span>

            {/* Campo Placa do carro */}
            <div className="w-full md:w-1/2 mb-2">
              <InputBar placeholder="Digite a placa do carro" id="placa" />
            </div>

            {/* Upload do documento do carro */}
            <div className="mb-2">
              <span className="text-sm text-gray-600">Anexe o documento do carro</span>
              <input
                type="file"
                accept="application/pdf,image/*"
                className="text-sm mt-1"
              />
            </div>

            {/* Botão para adicionar mais veículos - Apenas visual, sem lógica funcional */}
            <button
              type="button"
              className="px-4 py-2 mt-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Adicionar veículo +
            </button>
          </div>

          {/* Campo Criar Senha */}
          <div className="flex flex-col">
            <label htmlFor="senha" className="mb-1 font-medium text-gray-700">Criar senha</label>
            <InputBar placeholder="" id="senha" type="password" />
          </div>

          {/* Campo Confirmar Senha */}
          <div className="flex flex-col">
            <label htmlFor="confirmarSenha" className="mb-1 font-medium text-gray-700">Confirmar senha</label>
            <InputBar placeholder="" id="confirmarSenha" type="password" />
          </div>
        </form>

        {/* Botão de confirmação - apenas front-end, sem envio real */}
        <div className="mt-6 flex justify-center">
          <DefaultButton
            texto="Confirmar"
            className="w-full rounded-full bg-green-400 text-white py-3 text-lg font-semibold hover:bg-green-300 transition"
          />
        </div>
      </div>
    </div>
          <Footer/>
    </div>
  );
}
