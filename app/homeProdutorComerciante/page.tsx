"use client";

import React, { useState } from "react";
import { User, Store, Package, Calendar, MessageCircle, Home, DollarSign } from "lucide-react";
import { DefaultButton } from "../components/buttons/defaultButtonsComponent/defaultButton";
import  InputBar  from "../components/inputs/textInput";
import Footer from "../components/itensPages/Footer";
import Header from "../components/itensPages/Header";

// =============================================
// TIPOS E INTERFACES
// =============================================

/**
 * Tipo para as categorias de produtos disponíveis
 */
type Categoria = "frutas" | "verduras" | "legumes";

/**
 * Tipo para as unidades de medida dos produtos
 */
type Unidade = "kg" | "unidade" | "litro";

/**
 * Interface que define a estrutura de um item do catálogo
 */
interface Produto {
  id: number;
  nome: string;
  categoria: Categoria;
  preco: string;
  unidade: Unidade;
  ativo: boolean;
}

/**
 * Interface para as props do popup de adicionar item
 */
interface AddItemPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: Omit<Produto, "id" | "ativo">) => void;
}

// =============================================
// COMPONENTE DO POPUP DE ADICIONAR ITEM
// =============================================

/**
 * Componente de popup para adicionar novos itens ao catálogo
 * 
 * @param isOpen Controla se o popup está visível
 * @param onClose Função para fechar o popup
 * @param onSave Função para salvar o novo item
 */
const AddItemPopup: React.FC<AddItemPopupProps> = ({ isOpen, onClose, onSave }) => {
  // Estado para armazenar os dados do novo item
  const [novoItem, setNovoItem] = useState<Omit<Produto, "id" | "ativo">>({
    nome: "",
    categoria: "frutas",
    preco: "",
    unidade: "kg",
  });

  /**
   * Função para lidar com o salvamento do novo item
   * Valida se os campos obrigatórios foram preenchidos
   */
  const handleSalvar = () => {
    if (novoItem.nome.trim() && novoItem.preco.trim()) {
      onSave(novoItem);
      // Reseta o formulário após salvar
      setNovoItem({ nome: "", categoria: "frutas", preco: "", unidade: "kg" });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
        <h3 className="text-xl font-bold mb-4">Adicionar novo item</h3>

        <div className="space-y-4">
          {/* Campo para o nome do produto */}
          <div>
            <label className="block text-sm font-medium mb-1">Nome do produto</label>
            <InputBar
              type="text"
              placeholder="Digite o nome do produto"
            />
          </div>

          {/* Seletor de categoria */}
          <div>
            <label className="block text-sm font-medium mb-1">Categoria</label>
            <select
              className="w-full border rounded-lg px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-green-500"
              value={novoItem.categoria}
              onChange={(e) => setNovoItem({ ...novoItem, categoria: e.target.value as Categoria })}
            >
              <option value="frutas">Frutas</option>
              <option value="verduras">Verduras</option>
              <option value="legumes">Legumes</option>
            </select>
          </div>

          {/* Linha com preço e unidade */}
          <div className="flex gap-2">
            {/* Campo para o preço */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Preço (R$)</label>
              <InputBar
                type="text"
                placeholder="0,00"
              />
            </div>

            {/* Seletor de unidade */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Unidade</label>
              <select
                className="w-full border rounded-lg px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-green-500"
                value={novoItem.unidade}
                onChange={(e) => setNovoItem({ ...novoItem, unidade: e.target.value as Unidade })}
              >
                <option value="kg">KG</option>
                <option value="unidade">Unidade</option>
                <option value="litro">Litro</option>
              </select>
            </div>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex gap-2 mt-6">
          <DefaultButton
            texto="Cancelar"
            onClick={onClose}
            width={140}
            height={45}
            className="bg-gray-200 hover:bg-gray-300 border-gray-400"
          />
          <DefaultButton
            texto="Salvar"
            onClick={handleSalvar}
            width={140}
            height={45}
            className="bg-green-500 text-white hover:bg-green-600 border-green-600"
          />
        </div>
      </div>
    </div>
  );
};

// =============================================
// COMPONENTE PRINCIPAL DA PÁGINA
// =============================================

/**
 * Página principal do comerciante
 * Exibe o catálogo de produtos com funcionalidades de:
 * - Busca
 * - Adição de novos itens
 * - Ativação/desativação de itens
 */
const ComercianteHome: React.FC = () => {
  // Estado para o termo de busca
  const [termoBusca] = useState("");
  // Estado para controlar a visibilidade do popup
  const [popupAberto, setPopupAberto] = useState(false);
  // Estado para armazenar os itens do catálogo
  const [produtos, setProdutos] = useState<Produto[]>([
    // Lista mockada de produtos para demonstração
    { id: 1, nome: "Maçã", categoria: "frutas", preco: "21,15", unidade: "kg", ativo: true },
    { id: 2, nome: "Banana", categoria: "frutas", preco: "21,90", unidade: "kg", ativo: true },
    { id: 3, nome: "Abacaxi", categoria: "frutas", preco: "15,50", unidade: "kg", ativo: false },
    { id: 4, nome: "Limão", categoria: "frutas", preco: "8,90", unidade: "kg", ativo: true },
    { id: 5, nome: "Laranja", categoria: "frutas", preco: "12,30", unidade: "kg", ativo: true },
    { id: 6, nome: "Alface", categoria: "verduras", preco: "3,50", unidade: "unidade", ativo: true },
    { id: 7, nome: "Abobrinha", categoria: "verduras", preco: "7,80", unidade: "kg", ativo: true },
    { id: 8, nome: "Cebola", categoria: "verduras", preco: "9,40", unidade: "kg", ativo: false },
    { id: 9, nome: "Salsa", categoria: "verduras", preco: "2,30", unidade: "unidade", ativo: true },
    { id: 10, nome: "Pimentão", categoria: "verduras", preco: "11,60", unidade: "kg", ativo: true },
  ]);

  /**
   * Alterna o status (ativo/inativo) de um produto
   * @param id ID do produto a ser alterado
   */
  const alternarStatusProduto = (id: number) => {
    setProdutos(
      produtos.map(produto =>
        produto.id === id ? { ...produto, ativo: !produto.ativo } : produto
      )
    );
  };

  /**
   * Adiciona um novo produto ao catálogo
   * @param novoProduto Dados do novo produto (sem id e status)
   */
  const adicionarNovoProduto = (novoProduto: Omit<Produto, "id" | "ativo">) => {
    const produto: Produto = {
      id: produtos.length + 1,
      ...novoProduto,
      ativo: true,
    };
    setProdutos([...produtos, produto]);
  };

  // Filtra os produtos baseado no termo de busca
  const produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );

  // Separa os produtos por categoria
  const frutas = produtosFiltrados.filter(produto => produto.categoria === "frutas");
  const verduras = produtosFiltrados.filter(produto => produto.categoria === "verduras");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho da página */}
      <Header />
      
      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Sidebar de navegação */}
        <div className="w-64 bg-white rounded-lg shadow-sm p-4">
          <div className="space-y-2">
            {/* Status da loja */}
            <div className="flex items-center gap-2 p-2 bg-gray-100 rounded">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Loja aberta</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">Dentro do horário de pagamento</p>

            {/* Menu principal */}
            <div className="space-y-1">
              <div className="flex items-center gap-3 p-2 bg-gray-100 rounded font-medium">
                <Home size={16} />
                <span>Home</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                <User size={16} />
                <span>Perfil</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                <Store size={16} />
                <span>Frescos da dona Maria</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                <Package size={16} />
                <span>Pedidos</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                <DollarSign size={16} />
                <span>Lucro: R$ 350,69</span>
              </div>
            </div>

            {/* Avaliação da loja */}
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm">Classificação</span>
                <div className="flex">
                  {[1, 2, 3, 4].map((i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                  <span className="text-gray-300">★</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">Relacionamento e vendas</p>
            </div>

            {/* Menu secundário */}
            <div className="mt-4 space-y-1">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                <Calendar size={16} />
                <span>Agendamento</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                <MessageCircle size={16} />
                <span>Chats</span>
              </div>
            </div>
          </div>
        </div>

        {/* Área do catálogo */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-4">Catálogo de Itens</h2>
              
              {/* Barra de busca */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <InputBar
                    type="text"
                    placeholder="Busque pelo nome do produto..."
                  />
                </div>
              </div>
            </div>

            {/* Seção de Frutas */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Frutas da dona Maria</h3>
                <DefaultButton
                  texto="+ Adicionar um item"
                  onClick={() => setPopupAberto(true)}
                  width={180}
                  height={40}
                  className="bg-green-50 hover:bg-green-100 border-green-500 text-green-700"
                />
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium text-gray-600 mb-2">Itens</div>
                
                {/* Lista de frutas */}
                {frutas.map((produto) => (
                  <ItemProduto 
                    key={produto.id}
                    produto={produto}
                    onToggleStatus={alternarStatusProduto}
                  />
                ))}
              </div>
            </div>

            {/* Seção de Verduras */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Verduras da dona Maria</h3>
                <DefaultButton
                  texto="+ Adicionar um item"
                  onClick={() => setPopupAberto(true)}
                  width={180}
                  height={40}
                  className="bg-green-50 hover:bg-green-100 border-green-500 text-green-700"
                />
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium text-gray-600 mb-2">Itens</div>
                
                {/* Lista de verduras */}
                {verduras.map((produto) => (
                  <ItemProduto 
                    key={produto.id}
                    produto={produto}
                    onToggleStatus={alternarStatusProduto}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé da página */}
      <Footer />

      {/* Popup para adicionar novo item */}
      <AddItemPopup
        isOpen={popupAberto}
        onClose={() => setPopupAberto(false)}
        onSave={adicionarNovoProduto}
      />
    </div>
  );
};

// =============================================
// COMPONENTE DE ITEM DO PRODUTO
// =============================================

interface ItemProdutoProps {
  produto: Produto;
  onToggleStatus: (id: number) => void;
}

/**
 * Componente que representa um item do produto no catálogo
 * 
 * @param produto Dados do produto a ser exibido
 * @param onToggleStatus Função para alternar o status do produto
 */
const ItemProduto: React.FC<ItemProdutoProps> = ({ produto, onToggleStatus }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center gap-4">
        {/* Ícone do produto */}
        <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
          <Package size={20} className="text-gray-400" />
        </div>
        
        {/* Informações do produto */}
        <div>
          <h4 className="font-medium">{produto.nome}</h4>
          <p className="text-sm text-gray-600">
            R$ {produto.preco} / {produto.unidade}
          </p>
        </div>
      </div>
      
      {/* Controle de status (ativo/inativo) */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {produto.ativo ? "Ativado" : "Desativado"}
        </span>
        <button onClick={() => onToggleStatus(produto.id)}>
          {produto.ativo ? (
            <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end pr-1">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          ) : (
            <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center justify-start pl-1">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default ComercianteHome;