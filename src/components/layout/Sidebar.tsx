import React from 'react';
import { Button } from "@/components/ui/button";
import { LogOut, Package, Truck, Grid } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  if (isMobile) {
    return null;
  }

  const navItems = [
    { label: 'Materials', path: '/' },
    { icon: Package, label: 'Products', path: '/products' },
    { icon: Truck, label: 'Fulfillment', path: '/fulfillment' },
    { icon: Grid, label: 'Integrations', path: '/integrations' },
  ];

  return (
    <aside 
      className={cn(
        "min-h-screen flex flex-col justify-between bg-white fixed left-0 top-0 bottom-0 border-r border-gray-200 transition-all duration-300 z-50 w-16 hover:w-64"
      )}
    >
      <div className="space-y-6">
        <div className="flex items-center p-4">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/f4fb4c8b462d48ecb8affa69b88c58d2/d2e4900ee878c26ee7a92329638bd3f21142579adcf26ba56795c90e959abbaa" 
            alt="Logo" 
            className="w-8 h-8 cursor-pointer"
            onClick={() => navigate('/')}
          />
          <span className="ml-3 text-xl font-semibold text-gray-900 whitespace-nowrap overflow-hidden">Tally</span>
        </div>
        
        <nav className="px-2 space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={location.pathname === item.path ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 px-3",
                location.pathname === item.path ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50",
                item.label === 'Integrations' ? 'mt-4' : ''
              )}
              onClick={() => navigate(item.path)}
            >
              {item.label === 'Materials' ? (
                <>
                  <img src={location.pathname === item.path ? "/Property 1=Components - Active.svg" : "/Property 1=Components - Inactive.svg"} alt="Materials" className="h-6 w-6 mt-1" />
                  <span className="whitespace-nowrap overflow-hidden mt-1">{item.label}</span>
                </>
              ) : item.label === 'Products' ? (
                <>
                  <img src={location.pathname === item.path ? "/Property 1=Products  - Active.svg" : "/Property 1=Products  - Inactive.svg"} alt="Products" className="h-6 w-6 mt-1" />
                  <span className="whitespace-nowrap overflow-hidden mt-1">{item.label}</span>
                </>
              ) : item.label === 'Fulfillment' ? (
                <>
                  <img src={location.pathname === item.path ? "/Property 1=Orders - Active.svg" : "/Property 1=Orders - Inactive.svg"} alt="Fulfillment" className="h-6 w-6 mt-1" />
                  <span className="whitespace-nowrap overflow-hidden mt-1">{item.label}</span>
                </>
              ) : item.label === 'Integrations' ? (
                <>
                  <img src={location.pathname === item.path ? "/Property 1=Integrations - Active.svg" : "/Property 1=Integrations - Inactive.svg"} alt="Integrations" className="h-6 w-6 mt-1" />
                  <span className="whitespace-nowrap overflow-hidden mt-1">{item.label}</span>
                </>
              ) : (
                <item.icon className="h-6 w-6" />
              )}
            </Button>
          ))}
        </nav>
      </div>

      <div className="p-2 space-y-2 border-t border-gray-200">
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          <span className="whitespace-nowrap overflow-hidden">Logout</span>
        </Button>
        
        <div className="flex items-center p-2">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8 rounded-full"
              src="https://media.licdn.com/dms/image/v2/D5603AQFKUtvBPTikBA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699396044205?e=1744243200&v=beta&t=Mz15P-PvDPDMh7znwZQNa2oy7m-ccBzN22-zUs5qngY"
              alt="User"
            />
          </div>
          <div className="ml-3 whitespace-nowrap overflow-hidden">
            <p className="text-sm font-medium text-gray-900">Ashvin Arora</p>
            <p className="text-xs text-gray-500">Premium Member</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
