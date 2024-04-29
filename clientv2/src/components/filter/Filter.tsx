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

function Filter() {
  return (
    <>
      {/* big screen view */}
      <div className="hidden sm:block pb-4">
        {/* <h1 className="font-light sm:block hidden text-xl">
          Search results for <b>London</b>
        </h1> */}
        <div className="mb-4 mt-2">
          <div className="">
            <Input id="city" name="city" placeholder="City Location" />
          </div>
        </div>
        <div className="bottom flex flex-wrap  justify-between">
          <div className="item">
            <Select>
              <SelectTrigger className="w-[100px]">
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
          </div>
          <div className="item">
            <Select>
              <SelectTrigger className="w-[100px]">
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
          <div className="item">
            <Input
              type="number"
              className="w-[100px]"
              id="minPrice"
              name="minPrice"
              placeholder="Min Price"
            />
          </div>
          <div className="item">
            <Input
              type="number"
              className="w-[100px]"
              id="maxPrice"
              name="maxPrice"
              placeholder="Max Price"
            />
          </div>
          <div className="item mt-4 sm:mt-0">
            <Input
              type="text"
              id="bedroom"
              className="w-[100px]"
              name="bedroom"
              placeholder="Bed room"
            />
          </div>

          <Button className="hover:bg-yellow-600 border border-transparent mt-4 sm:mt-0 rounded-md bg-yellow-500 text-white ">
            <img src="/search.png" alt="" className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* mobile view */}
      <div className="sm:hidden pb-4">
        <MobileFilter />
      </div>
    </>
  );
}

export default Filter;
