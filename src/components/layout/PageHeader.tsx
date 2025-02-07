import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  tabs?: Array<{
    label: string;
    active?: boolean;
  }>;
}

export const PageHeader = ({ title, subtitle, tabs }: PageHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h1 className="text-[28px] font-medium text-[#222222] leading-none">{title}</h1>
          {subtitle && (
            <>
              <span className="text-[#8E9196] text-[28px] leading-none">/</span>
              <span className="text-[#8E9196] text-[28px] leading-none">{subtitle}</span>
            </>
          )}
        </div>
        
        {tabs && (
  <div className="flex items-center gap-2 bg-[#EAEAEA] p-1 rounded-lg">
    {tabs.map((tab, index) => (
      <Button
        key={index}
        variant="ghost"
        className={cn(
          "px-6 py-2 rounded-md text-sm font-medium transition",
          tab.active
            ? "bg-white text-black shadow-sm border border-gray-300"
            : "text-gray-500 hover:text-black"
        )}
      >
        {tab.label}
      </Button>
    ))}
  </div>
)}
      </div>
    </div>
  );
};