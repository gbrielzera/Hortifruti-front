"use client"

import  Header from '@/app/components/itensPages/Header';
import { OrderTracker } from '@/app/components/orderStatus/OrderTracker';
import  Footer  from '@/app/components/itensPages/Footer';

export default function OrderStatusPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      
      <main className="flex-grow p-4 max-w-md mx-auto w-full">
        <OrderTracker
          driverName="João..."
          deliveryCode="123456"
          estimatedTime="11:35"
        />
      </main>

      <Footer />
    </div>
  );
}