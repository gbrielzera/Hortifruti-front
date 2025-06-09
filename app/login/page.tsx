import { DefaultButton } from "@/app/components/buttons/defaultButtonsComponent/defaultButton";
import LogoFormatadaInicial from "@/app/components/pages/LogoFormatadaInicial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100vh] m-0 p-0 border-0 outline-none overflow-hidden">
      <div className="m-10">
      <LogoFormatadaInicial/>
      </div>
      <div className="flex flex-col  items-center ">
        <div>
          <h1 className="title-text">Login </h1>
        </div>
        <div>
          <h2>Usuário/E-mail</h2>
          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@exemplo.com"
              className="border-2 w-70"
            />
          </form>
          <h2>Senha</h2>
          <form>
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="senha..."
              className="border-2 w-70"
            />
          </form>
          <div className="flex items-center">
            <DefaultButton
              texto="Entre"
              width={100}
              height={30}
              className="m-2"
            />
            <div>
              <p className="text-center">Acessar com:</p>
              <div className="flex gap-2.5">
                <a href="google.com">
                  <Image
                    src="/google-logo.svg"
                    width={30}
                    height={30}
                    alt="Logo do google"
                    className="border-4"
                  />
                </a>
                <p>ou</p>
                <a href="gov.br">
                  <Image
                    src="/gov-logo.svg"
                    width={80}
                    height={30}
                    alt="Logo do gov.br"
                    className=""
                  />
                </a>
              </div>
            </div>
          </div>

          <a href="/home" className="underline mb-1.5">
            Esquecia a Senha
          </a>
        </div>
      </div>
    </div>
  );
}
