import React from 'react';

export const PaymentForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Informe os dados do seu cartão</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Número do cartão *</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Data de validade *</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="MM/AA"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Código de segurança *</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="CVC"
            />
          </div>
        </div>
      </div>
    </div>
  );
};