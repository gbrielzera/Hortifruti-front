import React from 'react';

export const OrderTracker = ({
  driverName,
  deliveryCode,
  estimatedTime,
}: {
  driverName: string;
  deliveryCode: string;
  estimatedTime: string;
}) => {
  return (
    <div className="bg-green-50 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Seu pedido está a caminho</h2>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Nome do entregador:</span> {driverName}
        </p>
        <p>
          <span className="font-semibold">Forneça esse Código ao entregador:</span> {deliveryCode}
        </p>
        <p>
          <span className="font-semibold">Previsão de entrega:</span> {estimatedTime}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-bold">Acompanhe seu pedido</h3>
        {/* Aqui viria um componente de progresso/timeline */}
      </div>
    </div>
  );
};