import { listData } from "../../lib/dummydata";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function ListPage() {
  const data = listData;

  return (
    <div className="max-h-[88vh] text-center w-full flex overflow-hidden relative">
      <div className="">
        <div className="pr-3 h-full flex flex-col overflow-auto">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="hidden w-[60%] h-full overflow-hidden  md:block bg-[#fcf5f3]">
        <Map items={data} height={"h-[90vh]"} />
      </div>

      <div className="absolute sm:hidden bottom-16 left-0 right-0">
        <Drawer>
          <DrawerTrigger>
            <Button className="rounded-3xl px-6">Open Map</Button>
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="mb-2">Map</DrawerTitle>
              <Map items={data} height={"h-[60vh]"} />
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <button className="py-2.5 w-full px-6 rounded-lg text-sm font-medium text-white bg-teal-600">
                  Cancel
                </button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default ListPage;
