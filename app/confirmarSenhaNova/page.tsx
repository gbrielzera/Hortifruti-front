import { DefaultButton } from "@/app/components/buttons/defaultButtonsComponent/defaultButton";
import LogoFormatadaInicial from "@/app/components/pages/LogoFormatadaInicial";
import Image from "next/image";
import InputBar from "../components/inputs/textInput";

export default function NovaSenha() {
    return (
        <div className="flex flex-col h-screen items-center justify-center m-2">
            <LogoFormatadaInicial />
            <div className="p-4">
                <div className="justify-start items-start">
                    <h2>Digite a nova senha</h2>
                </div>
                <div className="flex gap-4">
                    <InputBar type="text" placeholder="" />
                </div>
                <div className="justify-start items-start">
                    <h2>Digite a senha novamente</h2>
                </div>
                <div className="flex gap-4">
                    <InputBar type="text" placeholder="" />
                </div>
                <div className="flex justify-center items-center m-4">
                <DefaultButton texto="Enviar" width={100} height={40} />
</div>
            </div>
        </div>
    )
}