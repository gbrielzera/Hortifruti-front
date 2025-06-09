import { DefaultButton } from "../components/buttons/defaultButtonsComponent/defaultButton";

export default function Home() {
  return (
    <>
    <h1 className="text-6xl text-center">
        home
    </h1>
    <div className="flex justify-center m-2.5">
    <DefaultButton texto="VOLTAR" destino="/" className="text-2xl"/>
    </div>
    </>
  )
}