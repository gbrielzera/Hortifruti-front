// Importando apenas os ícones utilizados da biblioteca lucide-react
import { User, Truck, Store, Sprout } from "lucide-react";
// Importando o componente de botão estilizado
import { DefaultButton } from "../components/buttons/defaultButtonsComponent/defaultButton";

// Componente funcional principal da página de Cadastro
export default function Cadastro() {
  return (
    // Container principal com altura mínima da tela e centralização do conteúdo
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      {/* Caixa branca com padding, bordas arredondadas e sombra */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        
        {/* Título da página */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-4">
          Cadastro
        </h1>

        {/* Subtítulo/descrição explicativa */}
        <p className="text-center text-gray-700 mb-6">
          Qual tipo de conta você gostaria de criar em nossa plataforma?
        </p>

        {/* Seção que contém todos os tipos de contas disponíveis */}
        <div className="text-gray-800 font-medium mb-6">
          
          {/* Opção Cliente - exibida centralizada */}
          <div className="flex flex-col items-center">
            
            {/* Ícone dentro de um círculo com borda */}
            <div className="border-2 border-gray-300 rounded-full w-[70px] h-[70px] flex items-center justify-center">
              <User size={50} /> {/* Ícone de usuário */}
            </div>

            {/* Botão Cliente */}
            <div className="m-2">
              {/* Botão com texto "Cliente" e dimensões fixas */}
              <DefaultButton texto="Cliente" width={100} height={20} />
            </div>
          </div>

          {/* Espaçamento entre Cliente e os demais */}
          <br />
          <br />

          {/* Grid horizontal com as demais opções: Comerciante, Entregador e Produtor */}
          <div className="flex justify-evenly w-full">
            
            {/* Opção Comerciante */}
            <div className="flex flex-col items-center">
              <div className="border-2 border-gray-300 rounded-full w-[70px] h-[70px] flex items-center justify-center">
                <Store size={50} /> {/* Ícone de loja */}
              </div>
              <div className="m-2">
                <DefaultButton texto="Comerciante" width={100} height={20} />
              </div>
            </div>

            {/* Opção Entregador */}
            <div className="flex flex-col items-center">
              <div className="border-2 border-gray-300 rounded-full w-[70px] h-[70px] flex items-center justify-center">
                <Truck size={50} /> {/* Ícone de caminhão */}
              </div>
              <div className="m-2">
                <DefaultButton texto="Entregador" width={100} height={20} />
              </div>
            </div>

            {/* Opção Produtor */}
            <div className="flex flex-col items-center">
              <div className="border-2 border-gray-300 rounded-full w-[70px] h-[70px] flex items-center justify-center">
                <Sprout size={50} /> {/* Ícone de planta (produtor) */}
              </div>
              <div className="m-2">
                <DefaultButton texto="Produtor" width={100} height={20} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
