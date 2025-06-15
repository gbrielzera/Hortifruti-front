import React from "react";

interface InputProps {
  value?: string | number;
  type?: "text" | "password" | "email" | "number" | "search" | "tel" | "url";
  width?: string | number;
  height?: string | number;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputBar({
  value,
  type = "text",
  width = "100%",
  height,
  className = "",
  placeholder,
  onChange,
}: InputProps) {
  const style = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
      style={style}
    />
  );
}