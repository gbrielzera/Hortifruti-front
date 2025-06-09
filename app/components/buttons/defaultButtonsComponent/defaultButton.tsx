import React from "react";
import Link from "next/link";

interface ButtonProps {
  texto: string;
  destino?: string;
  onClick?: () => Promise<void> | void;
  type?: "button" | "submit" | "reset";
  width?: string | number;  // Aceita string ("500px") ou number (500)
  height?: string | number; // Aceita string ("75px") ou number (75)
  className?: string;       // Classes adicionais
}

export const DefaultButton = ({ 
  texto, 
  destino, 
  onClick, 
  type = "button",
  width = 500,       // Valor padrão
  height = 75,       // Valor padrão
  className = ""     // Classes adicionais padrão vazias
}: ButtonProps) => {
  // Converte números para pixels se necessário
  const btnWidth = typeof width === 'number' ? `${width}px` : width;
  const btnHeight = typeof height === 'number' ? `${height}px` : height;

  // Classes base do botão
  const baseClasses = "rounded-2xl border-2 border-black p-2 text-center shadow-md shadow-black flex justify-center items-center hover:bg-green-100 transition-colors duration-300 hover:cursor-pointer";

  // Se tiver destino, comporta-se como link
  if (destino) {
    return (
      <Link href={destino}>
        <button 
          className={`${baseClasses} ${className}`}
          style={{ width: btnWidth, height: btnHeight }}
          type={type}
        >
          {texto}
        </button>
      </Link>
    );
  }

  // Se não tiver destino, comporta-se como botão com ação
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      style={{ width: btnWidth, height: btnHeight }}
      type={type}
    >
      {texto}
    </button>
  );
};