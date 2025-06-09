import Image from "next/image";

interface LogoFormatadaInicialProps {
  className?: string;
}

export default function LogoFormatadaInicial({ className }: LogoFormatadaInicialProps) {
  return (
    <div className={className}>
      <Image
        src="/logo-maca-verde.svg"
        alt="Icone"
        width={70}
        height={50}
      />
    </div>
  );
}
