import { DefaultButton } from "@/app/components/buttons/defaultButtonsComponent/defaultButton";
import LogoFormatadaInicial from "@/app/components/itensPages/LogoFormatadaInicial";

export default function Home() {
  return (
    // Adicione `min-h-screen` para ocupar 100% da altura da tela
    <div className="min-h-screen grid place-items-center p-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <LogoFormatadaInicial />
        <h1 className="title-text text-center">BEM VINDO AO HORTIFRUTI</h1>
        <div className="flex flex-col gap-4">
          <DefaultButton
            texto="Entrar sem login"
            destino="home"
            className="text-2xl"
          />
          <DefaultButton
            texto="Fazer login"
            destino="login"
            className="text-2xl"
          />
        </div>
        <a href="/cadastroCentral" className="underline text-[18px]">
          Quero me Cadastrar
        </a>
      </div>
    </div>
  );
}