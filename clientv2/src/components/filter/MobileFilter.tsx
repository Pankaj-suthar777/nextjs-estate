import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";

const MobileFilter = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger className="justify-end w-full flex">
          <Button>
            <SlidersHorizontal className="mr-2" />
            Filters
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="mb-2">Filters</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col px-5">
            <div>
              <Input id="city" name="city" placeholder="City Location" />
            </div>
            <div className="w-full flex gap-x-4 mt-2">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Type</SelectLabel>
                    <SelectItem value="any">any</SelectItem>
                    <SelectItem value="buy">Buy</SelectItem>
                    <SelectItem value="rent">Rent</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Property" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Property</SelectLabel>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-4 mt-2">
              <div className="item">
                <Input
                  type="number"
                  className="w-full"
                  id="minPrice"
                  name="minPrice"
                  placeholder="Min Price"
                />
              </div>
              <div className="item">
                <Input
                  type="number"
                  className="w-full"
                  id="maxPrice"
                  name="maxPrice"
                  placeholder="Max Price"
                />
              </div>
            </div>
            <div className="mt-2">
              <Input
                type="text"
                id="bedroom"
                className="w-full"
                name="bedroom"
                placeholder="Bed room"
              />
            </div>
          </div>
          <DrawerFooter className="flex flex-row items-center">
            <DrawerClose className="w-full">
              <button className="py-2.5 px-6 w-full rounded-lg text-sm font-medium text-white bg-teal-600">
                Cancel
              </button>
            </DrawerClose>
            <Button className="hover:bg-yellow-600 border border-transparent w-full rounded-lg bg-yellow-500 text-white ">
              <img src="/search.png" alt="" className="w-6 h-6" />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileFilter;
