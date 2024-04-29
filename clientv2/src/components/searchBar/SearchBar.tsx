import { useState } from "react";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="">
      <div className="flex">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`px-[32px] py-[16px] border border-gray-300 rounded-none ${
              query.type === type
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <form className="border border-gray-300 flex justify-between gap-2 sm:flex-row flex-col sm:gap-0 sm:border-none">
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="border border-gray-300 px-4 py-4 w-48 sm:w-auto"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={handleChange}
          className="border border-gray-300 px-2 py-4 w-32 sm:w-auto"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          onChange={handleChange}
          className="border border-gray-300 px-2 py-4 w-32 sm:w-auto"
        />
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          className="flex-1"
        >
          <button className="flex items-center justify-center px-12 py-4 border bg-[#fece51]">
            <img src="/search.png" alt="" className="w-6 h-6" />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
