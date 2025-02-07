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
          <div className="flex items-center gap-2">
            {tabs.map((tab, index) => (
              <Button
                key={index}
                variant={tab.active ? "default" : "ghost"}
                className={cn(
                  "px-6 py-2 rounded-lg text-sm font-medium",
                  tab.active 
                    ? "bg-white text-[#222222] shadow-sm hover:bg-gray-50" 
                    : "text-[#8E9196] hover:text-[#222222] hover:bg-white/50"
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