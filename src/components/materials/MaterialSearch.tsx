
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { ArrowRightLeft, SlidersHorizontal, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import { AddMaterialForm } from './AddMaterialForm';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export type Category = 'all' | 't-shirts' | 'hoodies' | 'pants';
export type Size = 'S' | 'M' | 'L' | 'XL';
export type Color = 'Red' | 'Black' | 'White' | 'Gray';
export type SortOrder = 'asc' | 'desc' | 'quantity';

interface MaterialSearchProps {
  onCategoryChange: (category: Category) => void;
  selectedCategory: Category;
  onColorChange: (colors: Color[]) => void;
  selectedColors: Color[];
  onSizeChange: (sizes: Size[]) => void;
  selectedSizes: Size[];
  onSortChange?: (order: SortOrder) => void;
}

export const MaterialSearch = ({ 
  onCategoryChange, 
  selectedCategory,
  onColorChange,
  selectedColors,
  onSizeChange,
  selectedSizes,
  onSortChange = () => {} 
}: MaterialSearchProps) => {
  const isMobile = useIsMobile();

  const handleColorToggle = (color: Color) => {
    if (selectedColors.includes(color)) {
      onColorChange(selectedColors.filter(c => c !== color));
    } else {
      onColorChange([...selectedColors, color]);
    }
  };

  const handleSizeToggle = (size: Size) => {
    if (selectedSizes.includes(size)) {
      onSizeChange(selectedSizes.filter(s => s !== size));
    } else {
      onSizeChange([...selectedSizes, size]);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-auto md:flex-1 gap-4">
        <div className="relative flex-1 w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search Materials"
            className="pl-10 w-full"
          />
        </div>
        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="border-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '24px' }}>
              <path d="M6 8H18" stroke="#858585" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 12H15" stroke="#858585" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11 16H13" stroke="#858585" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Inventory</SheetTitle>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Colors</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['Red', 'Black', 'White', 'Gray'].map((color) => (
                      <div key={color} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`color-${color}`}
                          checked={selectedColors.includes(color as Color)}
                          onCheckedChange={() => handleColorToggle(color as Color)}
                        />
                        <Label htmlFor={`color-${color}`}>{color}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Sizes</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`size-${size}`}
                          checked={selectedSizes.includes(size as Size)}
                          onCheckedChange={() => handleSizeToggle(size as Size)}
                        />
                        <Label htmlFor={`size-${size}`}>{size}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className = "border-none">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '24px' }}>
                <path d="M19 15L16 18L13 15" stroke="#858585" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 18V6" stroke="#858585" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 9L8 6L11 9" stroke="#858585" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 6V18" stroke="#858585" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onSortChange('asc')}>
                A to Z
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSortChange('desc')}>
                Z to A
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSortChange('quantity')}>
                By Quantity
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <AddMaterialForm />
    </div>
  );
};
