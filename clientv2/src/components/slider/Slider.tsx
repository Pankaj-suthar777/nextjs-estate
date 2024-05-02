import { X } from "lucide-react";
import { useState } from "react";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <>
      <div className="w-full sm:h-80 flex sm:gap-4 gap-2">
        {imageIndex !== null && (
          <div className="fullSlider absolute w-full h-full top-0 left-0 bg-black flex justify-between items-center z-50">
            <div
              className="arrow flex z-[666] items-center justify-center cursor-pointer flex-1"
              onClick={() => changeSlide("left")}
            >
              <img src="/arrow.png" alt="" className="w-10 md:w-8 sm:w-6" />
            </div>
            <div className="flex-[10]">
              <img
                src={images[imageIndex]}
                alt=""
                className="w-full h-full object-cover "
              />
            </div>
            <div
              className="arrow flex items-center justify-center flex-1 z-[666] cursor-pointer"
              onClick={() => changeSlide("right")}
            >
              <img
                src="/arrow.png"
                alt=""
                className="w-10 md:w-8 sm:w-6 transform rotate-180"
              />
            </div>
            <div
              className="close absolute top-0 right-0 text-white text-3xl font-bold py-12 px-20 cursor-pointer"
              onClick={() => setImageIndex(null)}
            >
              <X />
            </div>
          </div>
        )}
        <div className="bigImage flex-3">
          <img
            src={images[0]}
            alt=""
            className="w-full h-full min-w-[80%] object-cover cursor-pointer rounded-xl"
            onClick={() => setImageIndex(0)}
          />
        </div>
        <div className="smallImages flex-1 gap-y-2 flex flex-col justify-between">
          {images.slice(1).map((image, index) => (
            <img
              src={image}
              alt=""
              key={index}
              className="min-w-[150px] w-[180px] h-24 cursor-pointer rounded-xl"
              onClick={() => setImageIndex(index + 1)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
