import { DefaultButton } from "@/app/components/buttons/defaultButtonsComponent/defaultButton";
import LogoFormatadaInicial from "@/app/components/pages/LogoFormatadaInicial";
import Image from "next/image";
import InputBar from "../components/inputs/textInput";

export default function EsqueciaMinhaSenha() {
    return (
        <div className="flex flex-col h-screen items-center justify-center m-2">
            <LogoFormatadaInicial />
            <div className="p-4">
                <div className="justify-start items-start">
                    <h2>Digite Seu Email de Recuperação</h2>
                </div>
                <div className="flex gap-4">
                    <InputBar type="text" placeholder="" />
                    <DefaultButton texto="Confirmar" width={100} height={40}  />
                </div>
                <div className="justify-start items-start">
                    <h2>Digite Seu Email de Recuperação</h2>
                </div>
                <div className="flex gap-4">
                    <InputBar type="text" placeholder="" />
                    <DefaultButton texto="Enviar" width={100} height={40} />
                </div>
            </div>
        </div>
    )
}