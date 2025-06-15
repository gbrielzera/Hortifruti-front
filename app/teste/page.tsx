import { DefaultButton } from "@/app/components/buttons/defaultButtonsComponent/defaultButton";
import LogoFormatadaInicial from "@/app/components/pages/LogoFormatadaInicial";
import Image from "next/image";
import InputBar from "../components/inputs/textInput";
import { User, Menu } from "lucide-react";

export default function EsqueciaMinhaSenha() {
    return (
        <div className="flex flex-col h-screen m-0 gap-1">
            <div className="flex flex-col justify-between">
                <div className="">
                    <h2>Adicione o seu endereço</h2>
                </div>
                <div className="flex">

                    <LogoFormatadaInicial />
                    <InputBar width={200} height={40} />
                    <div className="flex">
                        <Menu />
                        <h2>Categorias</h2>
                    </div>
                    <div className="bg-gray-500 flex h-fit w-fit m-0.5 border-4 rounded-3xl gap-1.5">
                        <User size={30} />
                        <p>Entrar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}