import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Radius } from 'lucide-react';

export const AddMaterialForm = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full md:w-auto bg-[#444EAA] hover:bg-[#7C3AED] rounded-sm" style={{width: '108px', height: '36px'}}>
          + Add New
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-[540px]">
        <SheetHeader className="mb-8">
          <SheetTitle>Add New Material</SheetTitle>
          <SheetDescription>
            Fill in the details below to add a new material to your inventory.
          </SheetDescription>
        </SheetHeader>
        
        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="material-name">Material Name</Label>
              <Input id="material-name" placeholder="Gildan T-Shirt" className="mt-1.5" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="color">Color</Label>
                <Select>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="black">Black</SelectItem>
                    <SelectItem value="white">White</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="size">Size</Label>
                <Select>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="s">Small</SelectItem>
                    <SelectItem value="m">Medium</SelectItem>
                    <SelectItem value="l">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="quantity">Initial Quantity</Label>
                <Input type="number" id="quantity" placeholder="0" className="mt-1.5" />
              </div>
              
              <div>
                <Label htmlFor="threshold">Threshold</Label>
                <Input type="number" id="threshold" placeholder="24" className="mt-1.5" />
              </div>
            </div>

            <div>
              <Label htmlFor="image">Image URL</Label>
              <Input id="image" placeholder="https://example.com/image.jpg" className="mt-1.5" />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" type="button">Cancel</Button>
            <Button type="submit">Add Material</Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};
