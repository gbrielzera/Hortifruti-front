import React from "react";

// Importando componentes reutilizáveis de UI
import InputBar from "@/app/components/inputs/textInput"; // Componente de input de texto customizado
import { DefaultButton } from "@/app/components/buttons/defaultButtonsComponent/defaultButton"; // Botão padrão estilizado
import LogoFormatadaInicial from "@/app/components/itensPages/LogoFormatadaInicial"; // Logo que aparece no topo da página
import Footer from "../components/itensPages/Footer";

export default function CadastroProdutorEmpresa() {
  return (
    <div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
      {/* Logo no topo da tela */}
      <LogoFormatadaInicial className="mt-1 mb-4" />
      
      {/* Container central do formulário */}
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl mx-4 mb-8 overflow-hidden border border-gray-100">
        
        {/* Título da Página */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Cadastro Produtor/Empresa
          </h1>
          <p className="text-gray-600">
            Para completar seu acesso é necessário que preencha alguns dados:
          </p>
        </div>

        {/* Início do Formulário */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Seção: Dados Pessoais */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-3 pb-2 border-b border-gray-200">
              Dados Pessoais
            </h2>
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="nome" className="mb-2 font-medium text-gray-700">Nome</label>
            <InputBar placeholder="" id="nome" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="telefone" className="mb-2 font-medium text-gray-700">Telefone</label>
            <InputBar placeholder="" id="telefone" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cpf" className="mb-2 font-medium text-gray-700">CPF</label>
            <InputBar placeholder="" id="cpf" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium text-gray-700">Email</label>
            <InputBar placeholder="" id="email" />
          </div>

          {/* Seção: Endereço */}
          <div className="md:col-span-2 mt-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-3 pb-2 border-b border-gray-200">
              Endereço
            </h2>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="endereco" className="mb-2 font-medium text-gray-700">Endereço Completo</label>
            <InputBar placeholder="" id="endereco" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cep" className="mb-2 font-medium text-gray-700">CEP</label>
            <InputBar placeholder="" id="cep" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="numero" className="mb-2 font-medium text-gray-700">Número</label>
            <InputBar placeholder="" id="numero" />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="complemento" className="mb-2 font-medium text-gray-700">Complemento</label>
            <InputBar placeholder="" id="complemento" />
          </div>

          {/* Seção: Dados Empresariais */}
          <div className="md:col-span-2 mt-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-3 pb-2 border-b border-gray-200">
              Dados Empresariais
            </h2>
          </div>

          <div className="flex flex-col">
            <label htmlFor="cnpj" className="mb-2 font-medium text-gray-700">CNPJ</label>
            <InputBar placeholder="" id="cnpj" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="ccir" className="mb-2 font-medium text-gray-700">
              Certificado de Cadastro de Imóvel Rural
            </label>
            <InputBar placeholder="" id="ccir" />
          </div>

          {/* Seção: Dados Bancários */}
          <div className="md:col-span-2 mt-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-3 pb-2 border-b border-gray-200">
              Dados Bancários
            </h2>
          </div>

          <div className="flex flex-col">
            <label htmlFor="conta" className="mb-2 font-medium text-gray-700">Conta</label>
            <InputBar placeholder="" id="conta" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="agencia" className="mb-2 font-medium text-gray-700">Agência</label>
            <InputBar placeholder="" id="agencia" />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="pix" className="mb-2 font-medium text-gray-700">Chave Pix</label>
            <InputBar placeholder="" id="pix" />
          </div>

          {/* Seção: Segurança */}
          <div className="md:col-span-2 mt-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-3 pb-2 border-b border-gray-200">
              Segurança
            </h2>
          </div>

          <div className="flex flex-col">
            <label htmlFor="senha" className="mb-2 font-medium text-gray-700">Criar senha</label>
            <InputBar placeholder="" id="senha" type="password" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmarSenha" className="mb-2 font-medium text-gray-700">Confirmar senha</label>
            <InputBar placeholder="" id="confirmarSenha" type="password" />
          </div>
        </form>

        {/* Botão de confirmação - Apenas UI, sem lógica de envio */}
        <div className="mt-8 flex justify-center">
          <DefaultButton
            texto="Confirmar Cadastro"
            className="w-full max-w-xs rounded-lg bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-semibold transition shadow-md hover:shadow-lg"
          />
        </div>
      </div>
    </div>
          <Footer/>
</div>
  );
}
