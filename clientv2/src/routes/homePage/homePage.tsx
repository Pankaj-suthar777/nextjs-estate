import SearchBar from "../../components/searchBar/SearchBar";

function HomePage() {
  return (
    <div className="grid xl:grid-cols-3 grid-cols-1 gap-12 place-items-center h-screen">
      <div className="col-span-2">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="lg:text-7xl md:text-5xl text-4xl  font-semibold leading-snug">
            Find Real Estate & Get Your Dream Place
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <SearchBar />
          <div className="boxes sm:flex justify-between hidden">
            <div className="">
              <h1 className="text-[32px] font-bold">16+</h1>
              <h2 className="text-[20px] font-thin">Years of Experience</h2>
            </div>
            <div className="">
              <h1 className="text-[32px] font-bold">200</h1>
              <h2 className="text-[20px] font-thin">Award Gained</h2>
            </div>
            <div className="">
              <h1 className="text-[32px] font-bold">2000+</h1>
              <h2 className="text-[20px] font-thin">Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 xl:flex hidden bg-[#fcf5f3] relative ">
        <img
          src="/bg.png"
          alt=""
          className="h-full w-[115%] object-contain z-10"
        />
      </div>
    </div>
  );
}

export default HomePage;
