import React from "react";
import InputBar from "@/app/components/inputs/textInput";
import { DefaultButton } from "@/app/components/buttons/defaultButtonsComponent/defaultButton";
import LogoFormatadaInicial from "@/app/components/itensPages/LogoFormatadaInicial";
import Footer from '../components/itensPages/Footer';

export default function CadastroDados() {
  return (
    <div>
      {/* Container principal da página */}
      <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Logo no topo da página */}
        <LogoFormatadaInicial className="mt-1 mb-0"/>
        
        {/* Card branco que contém o formulário */}
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-2xl m-3 mt-0 overflow-hidden">
          {/* Texto de instrução para o usuário */}
          <p className="text-center text-gray-800 mb-6">
            Para completar seu acesso é necessário que preencha alguns dados:
          </p>

          {/* Formulário de cadastro com grid responsivo */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campo Nome */}
            <div className="flex flex-col">
              <label htmlFor="nome" className="mb-1 font-medium text-gray-700">
                Nome
              </label>
              <InputBar placeholder="" id="nome" />
            </div>

            {/* Campo Sobrenome */}
            <div className="flex flex-col">
              <label
                htmlFor="sobrenome"
                className="mb-1 font-medium text-gray-700"
              >
                Sobrenome
              </label>
              <InputBar placeholder="" id="sobrenome" />
            </div>

            {/* Campo Telefone */}
            <div className="flex flex-col">
              <label
                htmlFor="telefone"
                className="mb-1 font-medium text-gray-700"
              >
                Telefone
              </label>
              <InputBar placeholder="" id="telefone" />
            </div>

            {/* Campo CPF */}
            <div className="flex flex-col">
              <label htmlFor="cpf" className="mb-1 font-medium text-gray-700">
                CPF
              </label>
              <InputBar placeholder="" id="cpf" />
            </div>

            {/* Campo Email (ocupa 2 colunas em telas médias/grandes) */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="email" className="mb-1 font-medium text-gray-700">
                Email
              </label>
              <InputBar placeholder="" id="email" />
            </div>

            {/* Campo CEP (ocupa 2 colunas em telas médias/grandes) */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="cep" className="mb-1 font-medium text-gray-700">
                CEP
              </label>
              <InputBar placeholder="" id="cep" />
            </div>

            {/* Campo Endereço (ocupa 2 colunas em telas médias/grandes) */}
            <div className="flex flex-col md:col-span-2">
              <label
                htmlFor="endereco"
                className="mb-1 font-medium text-gray-700"
              >
                Endereço
              </label>
              <InputBar placeholder="" id="endereco" />
            </div>

            {/* Campo Complemento */}
            <div className="flex flex-col">
              <label
                htmlFor="complemento"
                className="mb-1 font-medium text-gray-700"
              >
                Complemento
              </label>
              <InputBar placeholder="" id="complemento" />
            </div>

            {/* Campo Número */}
            <div className="flex flex-col">
              <label htmlFor="numero" className="mb-1 font-medium text-gray-700">
                Número
              </label>
              <InputBar placeholder="" id="numero" />
            </div>

            {/* Campo Senha */}
            <div className="flex flex-col">
              <label htmlFor="senha" className="mb-1 font-medium text-gray-700">
                Criar senha
              </label>
              <InputBar
                placeholder=""
                id="senha"
                type="password"
              />
            </div>

            {/* Campo Confirmar Senha */}
            <div className="flex flex-col">
              <label
                htmlFor="confirmarSenha"
                className="mb-1 font-medium text-gray-700"
              >
                Confirmar senha
              </label>
              <InputBar
                placeholder=""
                id="confirmarSenha"
                type="password"
              />
            </div>
          </form>

          {/* Botão de confirmação do formulário */}
          <div className="mt-6 flex justify-center">
            <DefaultButton
              texto="Confirmar"
              className="w-full rounded-full bg-green-400 text-white py-3 text-lg font-semibold hover:bg-green-300 transition"
            />
          </div>
        </div>
      </div>
      
      {/* Rodapé da página */}
      <Footer/>
    </div>
  );
}