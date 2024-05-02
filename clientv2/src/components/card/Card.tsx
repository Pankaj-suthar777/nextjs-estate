import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  function truncateText(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return (
        words.slice(0, maxWords).join(" ") +
        (words.length > maxWords ? "..." : "")
      );
    }
    return text;
  }

  return (
    <div>
      <>
        <div className="flex flex-col sm:flex-row w-full h-[400px] sm:h-[240px] overflow-hidden rounded-lg">
          <div className="sm:p-2 sm:w-1/2 ">
            <img
              className="rounded-xl object-cover w-full h-[260px] sm:h-full"
              src={item.img}
              alt="Article"
            />
          </div>
          <div className="sm:p-4 p-2 text-start w-full sm:w-1/2 flex flex-col justify-between">
            <div className="sm:space-y-0 space-y-1">
              <h2 className="title text-xl font-semibold text-gray-700 transition duration-300 hover:text-black">
                <Link
                  to={`/${item.id}`}
                  style={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 1,
                    maxWidth: "100%",
                  }}
                >
                  {truncateText(item.title, 30)}
                </Link>
              </h2>

              <p className="mt-2 flex items-center text-sm text-gray-600">
                <img src="/pin.png" alt="" className="w-4 h-4 mr-2" />
                <span>{item.address}</span>
              </p>
            </div>
            <p className="sm:text-xl hidden sm:block font-light w-fit sm:mt-0 mt-4 p-1 rounded bg-yellow-200">{`$ ${item.price}`}</p>
            <div className="mt-4 flex sm:hidden items-center justify-between space-x-4 flex-wrap">
              <p className="text-xl  w-fit p-1 rounded font-semibold px-2 ">{`$ ${item.price}`}</p>
              <div className="flex gap-x-2 items-center">
                <div className=" flex items-center gap-2 bg-[whitesmoke] p-1 rounded">
                  <img src="/bed.png" alt="" className="w-4 h-4" />
                  <span>{item.bedroom} bedroom</span>
                </div>
                <div className="feature flex items-center gap-2 bg-[whitesmoke] p-1 rounded">
                  <img src="/bath.png" alt="" className="w-4 h-4" />
                  <span>{item.bathroom} bathroom</span>
                </div>
              </div>
            </div>
            <div className="mt-4 hidden sm:block">
              <div className="flex gap-x-2 items-center">
                <div className=" flex items-center gap-2 bg-[whitesmoke] p-1 rounded">
                  <img src="/bed.png" alt="" className="w-4 h-4" />
                  <span>{item.bedroom} bedroom</span>
                </div>
                <div className="feature flex items-center gap-2 bg-[whitesmoke] p-1 rounded">
                  <img src="/bath.png" alt="" className="w-4 h-4" />
                  <span>{item.bathroom} bathroom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Card;
