"use client"; // Indica que este é um componente do lado do cliente

// Importações de componentes
import Header from '@/app/components/itensPages/Header';
import { PaymentForm } from '@/app/components/checkout/PaymentForm';
import Footer from '@/app/components/itensPages/Footer';

export default function Checkout() {
  /**
   * Componente principal da página de checkout
   * Exibe o formulário de pagamento e resumo do pedido
   */
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabeçalho da página */}
      <Header />
      
      {/* Conteúdo principal da página */}
      <main className="flex-grow p-4 max-w-md mx-auto w-full">
        {/* Componente do formulário de pagamento */}
        <PaymentForm />

        {/* Seção de resumo da compra */}
        <div className="mt-8">
          {/* Título da seção */}
          <h2 className="text-xl font-bold mb-4">Resumo da compra:</h2>
          
          {/* Container do resumo com fundo cinza */}
          <div className="bg-gray-100 p-4 rounded">
            <div className="mb-2">
              {/* Informações do vendedor */}
              <p className="font-semibold">Descrição:</p>
              <p>Frutaria da vera</p>
              
              {/* Localização (placeholder - normalmente viria de props ou estado) */}
              <p>Localização:</p>
              
              {/* Divisor visual */}
              <div className="border-t my-1"></div>
              
              {/* Taxa de entrega fixa (em uma aplicação real, isso poderia ser dinâmico) */}
              <p>Taxa de entrega: R$ 5</p>
            </div>
            
            {/* Itens do pedido (exemplo com um único item) */}
            <div className="border-t pt-2">
              <p>Laranja: R$ 2,50</p>
            </div>
          </div>
        </div>

        {/* Total do pedido */}
        <div className="mt-4 font-bold text-lg flex justify-between">
          <span>Total:</span>
          {/* Valor total calculado (exemplo estático) */}
          <span>R$ 3,00</span>
        </div>

        {/* Botão para finalizar o pedido */}
        <button 
          className="w-full bg-green-600 text-white py-3 rounded-lg font-bold mt-6 hover:bg-green-700 transition-colors"
          // Em uma implementação real, aqui teria um onClick para enviar o pedido
        >
          Finalizar Pedido
        </button>
      </main>

      {/* Rodapé da página */}
      <Footer />
    </div>
  );
}