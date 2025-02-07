import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { PageHeader } from '@/components/layout/PageHeader';
import { MaterialSearch, Category, Color, Size, SortOrder } from '@/components/materials/MaterialSearch';
import { MaterialList } from '@/components/materials/MaterialList';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedColors, setSelectedColors] = useState<Color[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<Size[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <main className={`flex-1 p-4 md:p-8 ${isMobile ? 'ml-0' : 'ml-16'}`}>
        
        <div className="max-w-6xl mx-auto">
        <PageHeader
          title="Materials"
          subtitle="Blanks"
          tabs={[
            { label: "Inventory", active: true },
            { label: "Order Queue" }
          ]}
        />
          <div className="bg-white rounded-lg shadow-sm">
            <MaterialSearch 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedColors={selectedColors}
              onColorChange={setSelectedColors}
              selectedSizes={selectedSizes}
              onSizeChange={setSelectedSizes}
              onSortChange={setSortOrder}
              onSearchChange={setSearchTerm}
            />
            <MaterialList 
              selectedCategory={selectedCategory} 
              selectedColors={selectedColors}
              selectedSizes={selectedSizes}
              sortOrder={sortOrder}
              searchTerm={searchTerm}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
