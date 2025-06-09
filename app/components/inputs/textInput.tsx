import React from "react";

interface SearchInputProps {
  placeholder: string;
  type?: string; // permite passar 'text', 'password', etc.
  id?: string;
  
}

export default function InputBar({ placeholder, type , id= "text" }: SearchInputProps) {
  return (
    <div className="flex items-center border rounded-lg px-3 py-2 w-full bg-white shadow-sm">
      <input
        type={type}
        placeholder={placeholder}
        id={id}

        className="outline-none focus:outline-none focus:ring-0 w-full text-sm text-gray-700 placeholder-gray-400"
      />
    </div>
  );
}
