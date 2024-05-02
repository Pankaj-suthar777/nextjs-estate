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
import MobileFilter from "./MobileFilter";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Search, SlidersHorizontal } from "lucide-react";
import SearchInput from "../SearchInput";

function Filter() {
  return (
    <>
      {/* big screen view */}
      <div className="hidden  sm:block pb-4 px-2">
        {/* <h1 className="font-light sm:block hidden text-xl">
          Search results for <b>London</b>
        </h1> */}

        <div className="mb-4 mt-2">
          <div className=""></div>
        </div>

        <AlertDialog>
          <div className="flex gap-x-4">
            <div className="mr-2 w-full">
              <SearchInput />
            </div>
            {/* <Input id="city" name="city" placeholder="City Location" /> */}
            <Button className="hover:bg-yellow-600 border border-transparent mt-4 sm:mt-0 rounded-md bg-yellow-500 text-white ">
              <Search />
            </Button>
            <AlertDialogTrigger>
              <Button>
                <SlidersHorizontal />
              </Button>
            </AlertDialogTrigger>
          </div>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Filter</AlertDialogTitle>
            </AlertDialogHeader>
            <div className="flex flex-col space-y-4">
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
              <div className="flex mt-2">
                <div className="flex gap-x-4 w-full">
                  <Input
                    type="number"
                    className="w-full"
                    id="minPrice"
                    name="minPrice"
                    placeholder="Min Price"
                  />
                  <Input
                    type="number"
                    className="w-full"
                    id="maxPrice"
                    name="maxPrice"
                    placeholder="Max Price"
                  />
                </div>
                <div className="item"></div>
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
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="hover:bg-yellow-600 border border-transparent rounded-lg bg-yellow-500 text-white ">
                <img src="/search.png" alt="" className="w-6 h-6" />
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* mobile view */}
      <div className="sm:hidden pb-4">
        <MobileFilter />
      </div>
    </>
  );
}

export default Filter;
