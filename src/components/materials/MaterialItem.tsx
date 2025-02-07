
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface MaterialItemProps {
  image: string;
  name: string;
  quantity: number;
  threshold: number;
  status: 'low' | 'normal' | 'high';
}

export const MaterialItem = ({ image, name, quantity: initialQuantity, threshold, status }: MaterialItemProps) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const { toast } = useToast();

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
      toast({
        title: "Quantity updated",
        description: `Decreased ${name} quantity by 1`,
      });
    }
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
    toast({
      title: "Quantity updated",
      description: `Increased ${name} quantity by 1`,
    });
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-white h-[60px] mb-[15px] last:mb-0 transform transition-transform duration-300">
      <div className="flex items-center gap-4 transform transition-all duration-300">
        <img src={image} alt={name} className="w-12 h-12 rounded object-cover transform transition-all duration-300" />
        <span className="font-medium transform transition-all duration-300">{name}</span>
      </div>
      <div className="flex items-center gap-4 transform transition-all duration-300">
        <div className="flex items-stretch rounded-md border border-border overflow-hidden h-[60px] transform transition-all duration-300">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-[60px] w-[60px] rounded-none border-r border-border transform transition-all duration-300"
            onClick={handleDecrease}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <div className="flex flex-col items-center transform transition-all duration-300">
            <div className={cn(
              "flex flex-col items-center px-6 h-[36px] justify-center w-full transform transition-all duration-300",
              quantity < threshold 
                ? "bg-[#FAF2E3] text-black border border-[#C19A4D]" 
                : "bg-white text-[#555555]"
            )}>
              <span className="font-semibold text-lg transform transition-all duration-300">{quantity}</span>
            </div>
            <div className={cn(
              "flex items-center justify-center h-[24px] px-6 w-full transform transition-all duration-300",
              quantity < threshold 
                ? "bg-[#C19A4D] text-white border border-[#C19A4D] border-3"
                : "bg-[#D4D4D4] text-black border border-[#D4D4D4] border-3"
            )}>
              <span className="text-xs whitespace-nowrap transform transition-all duration-300">{threshold} PCS</span>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-[60px] w-[60px] rounded-none border-l border-border transform transition-all duration-300"
            onClick={handleIncrease}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
