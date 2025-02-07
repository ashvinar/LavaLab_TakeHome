
import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { PageHeader } from '@/components/layout/PageHeader';
import { useIsMobile } from '@/hooks/use-mobile';

const Fulfillment = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className={`flex-1 p-4 md:p-8 ${isMobile ? 'ml-0' : 'ml-16'}`}>
        <PageHeader
          title="Fulfillment"
          tabs={[
            { label: "Orders", active: true },
            { label: "History" }
          ]}
        />
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium mb-4">Order Management</h2>
            <p className="text-gray-500">Track and manage your orders here</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fulfillment;
