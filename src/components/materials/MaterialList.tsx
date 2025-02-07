
import React from 'react';
import { MaterialItem } from './MaterialItem';
import { Category, Size, Color, SortOrder } from './MaterialSearch';

const materials = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/f4fb4c8b462d48ecb8affa69b88c58d2/b42cfc47b0d6b0da428c6d73211d879168b3c9de70de0d961ebfbe9b58953d4c?placeholderIfAbsent=true",
    name: "Gildan T-Shirt - Red / M",
    quantity: 13,
    threshold: 24,
    status: 'low',
    category: 't-shirts',
    color: 'Red' as Color,
    size: 'M' as Size
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/f4fb4c8b462d48ecb8affa69b88c58d2/b42cfc47b0d6b0da428c6d73211d879168b3c9de70de0d961ebfbe9b58953d4c?placeholderIfAbsent=true",
    name: "Gildan T-Shirt - Red / L",
    quantity: 46,
    threshold: 24,
    status: 'high',
    category: 't-shirts',
    color: 'Red' as Color,
    size: 'L' as Size
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/f4fb4c8b462d48ecb8affa69b88c58d2/1d3798a43a94ac846ae5304099c157f80b8b4abdf93f7957738a0e3932f7e52e?placeholderIfAbsent=true",
    name: "Gildan T-Shirt - Black / S",
    quantity: 21,
    threshold: 24,
    status: 'normal',
    category: 't-shirts',
    color: 'Black' as Color,
    size: 'S' as Size
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/f4fb4c8b462d48ecb8affa69b88c58d2/1d3798a43a94ac846ae5304099c157f80b8b4abdf93f7957738a0e3932f7e52e?placeholderIfAbsent=true",
    name: "Gildan T-Shirt - Black / M",
    quantity: 34,
    threshold: 24,
    status: 'high',
    category: 't-shirts',
    color: 'Black' as Color,
    size: 'M' as Size
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/f4fb4c8b462d48ecb8affa69b88c58d2/1d3798a43a94ac846ae5304099c157f80b8b4abdf93f7957738a0e3932f7e52e?placeholderIfAbsent=true",
    name: "Gildan T-Shirt - White / L",
    quantity: 29,
    threshold: 24,
    status: 'high',
    category: 't-shirts',
    color: 'White' as Color,
    size: 'L' as Size
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/f4fb4c8b462d48ecb8affa69b88c58d2/80ad436a839376ae2f137b0fe49ac9c1ff276353d9d6889dde0dd5aed058677f?placeholderIfAbsent=true",
    name: "Gildan T-Shirt - Gray / XL",
    quantity: 34,
    threshold: 24,
    status: 'high',
    category: 't-shirts',
    color: 'Gray' as Color,
    size: 'XL' as Size
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/f4fb4c8b462d48ecb8affa69b88c58d2/80ad436a839376ae2f137b0fe49ac9c1ff276353d9d6889dde0dd5aed058677f?placeholderIfAbsent=true",
    name: "Gildan T-Shirt - Gray / XL",
    quantity: 34,
    threshold: 24,
    status: 'high',
    category: 't-shirts',
    color: 'Gray' as Color,
    size: 'XL' as Size
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/f4fb4c8b462d48ecb8affa69b88c58d2/80ad436a839376ae2f137b0fe49ac9c1ff276353d9d6889dde0dd5aed058677f?placeholderIfAbsent=true",
    name: "Gildan T-Shirt - Gray / XL",
    quantity: 34,
    threshold: 24,
    status: 'high',
    category: 't-shirts',
    color: 'Gray' as Color,
    size: 'XL' as Size
  }
] as const;

interface MaterialListProps {
  selectedCategory: Category;
  selectedColors: Color[];
  selectedSizes: Size[];
  sortOrder: SortOrder;
}

export const MaterialList = ({ selectedCategory, selectedColors, selectedSizes, sortOrder }: MaterialListProps) => {
  const filteredMaterials = materials.filter(material => {
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory;
    const matchesColor = selectedColors.length === 0 || selectedColors.includes(material.color);
    const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(material.size);
    
    return matchesCategory && matchesColor && matchesSize;
  });

  const sortedMaterials = [...filteredMaterials].sort((a, b) => {
    switch (sortOrder) {
      case 'asc':
        return a.name.localeCompare(b.name);
      case 'desc':
        return b.name.localeCompare(a.name);
      case 'quantity':
        return b.quantity - a.quantity;
      default:
        return 0;
    }
  });

  return (
    <div className="bg-white rounded-lg shadow"> 
      {sortedMaterials.map((material, index) => (
        <MaterialItem key={index} {...material} />
      ))}
    </div>
  );
};