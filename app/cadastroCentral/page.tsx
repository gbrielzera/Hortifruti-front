import { User, Truck, Store, Sprout } from "lucide-react";
import { DefaultButton } from "../components/buttons/defaultButtonsComponent/defaultButton";

export default function Cadastro() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-4">
          Cadastro
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Qual tipo de conta você gostaria de criar em nossa plataforma?
        </p>

        <div className="text-gray-800 font-medium mb-6">
          <div className=" flex flex-col items-center">
            <div className="border-2 border-gray-300 rounded-full w-[70px] h-[70px] flex items-center justify-center">
              <User size={50} />
            </div>
            <div className="m-2">
              <DefaultButton texto="Cliente" width={100} height={20} destino="cadastroUsuario" />
            </div>
          </div>
          <br />
          <br />
          <div className="flex justify-evenly w-full">
            <div className=" flex flex-col items-center">
              <div className="border-2 border-gray-300 rounded-full w-[70px] h-[70px] flex items-center justify-center">
                <Store size={50} />
              </div>
              <div className="m-2">
                <DefaultButton texto="Comerciante" width={100} height={20} destino="cadastroProdutorComerciante"/>
              </div>
            </div>
            <div className=" flex flex-col items-center">
              <div className="border-2 border-gray-300 rounded-full w-[70px] h-[70px] flex items-center justify-center">
                <Truck size={50} />
              </div>
              <div className="m-2">
                <DefaultButton texto="Entregador" width={100} height={20} destino="cadastroEntregador"/>
              </div>
            </div>
            <div className=" flex flex-col items-center">
              <div className="border-2 border-gray-300 rounded-full w-[70px] h-[70px] flex items-center justify-center">
                <Sprout size={50} />
              </div>
              <div className="m-2">
                <DefaultButton texto="Produtor" width={100} height={20} destino="cadastroProdutorComerciante"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
