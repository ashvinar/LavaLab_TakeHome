import React, { useState, useEffect } from 'react';
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
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(initialQuantity);

  // Synchronize local quantity state with the prop whenever it changes
  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      toast({
        title: "Quantity updated",
        description: `Decreased ${name} quantity by 1`,
      });
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    toast({
      title: "Quantity updated",
      description: `Increased ${name} quantity by 1`,
    });
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-white h-[48px] mb-[15px] last:mb-0 transform transition-transform duration-300 m-5">
      <div className="flex items-center gap-4 transform transition-all duration-300 -mt-10">
        <img src={image} alt={name} className="w-12 h-12 rounded object-cover transform transition-all duration-300" />
        <span className="font-medium material-name transform transition-all duration-300 ">{name}</span>
      </div>
      <div className="flex items-center gap-4 transform transition-all duration-300 -mt-10 -mr-3.5">
        <div className="flex items-stretch rounded-md border border-border overflow-hidden h-[48px]  transform transition-all duration-300 ">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-[48px] w-[48px] rounded-none transform transition-all duration-300"
            onClick={handleDecrease}
          >
            <Minus className="h-6 w-5 text-gray-500" />
          </Button>
          <div className="flex flex-col items-center transform transition-all duration-300 w-[100px] ">
            <div className={cn(
              "flex flex-col items-center px-6 h-[36px] w-[100px] justify-center w-full transform transition-all duration-300 ",
              quantity < threshold 
                ? "bg-[#FAF2E3] text-black border border-[#C19A4D]" 
                : "bg-white text-black border border-[#D4D4D4] "
            )}>
              <span className="text-lg transform transition-all duration-300 font-chivo-mono">{quantity}</span>
            </div>
            <div className={cn(
              "flex items-center justify-center px-6 w-full transform transition-all duration-300 -mt-2",
              quantity < threshold 
                ? "bg-[#C19A4D] text-white border border-[#C19A4D]"
                : "bg-[#F2F2F2] text-[#808080] border border-[#D4D4D4]"
            )}>
              <span className="text-xs transform transition-all duration-300 font-chivo-mono">{threshold} PCS</span>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-[48px] w-[48px] rounded-none transform transition-all duration-300"
            onClick={handleIncrease}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
