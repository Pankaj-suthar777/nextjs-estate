import { singlePostData, userData } from "../../lib/dummydata";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";

function SinglePage() {
  return (
    <div className="h-screen w-full flex flex-col lg:flex-row">
      <div className="lg:overflow-y-auto flex-[3] sm:px-4">
        <div className="">
          <Slider images={singlePostData.images} />
          <div className="info mt-10">
            <div className="top flex justify-between sm:flex-col sm:gap-4">
              <div className="w-full">
                <div className="post flex flex-col gap-4">
                  <h1 className="text-4xl font-medium">
                    {singlePostData.title}
                  </h1>
                  <div
                    className="address flex items-center"
                    style={{ color: "#888", fontSize: "14px" }}
                  >
                    <img
                      src="/pin.png"
                      alt=""
                      style={{
                        width: "16px",
                        height: "16px",
                        marginRight: "5px",
                      }}
                    />
                    <span>{singlePostData.address}</span>
                  </div>
                  <div
                    className="price"
                    style={{
                      backgroundColor: "rgba(254, 205, 81, 0.438)",
                      borderRadius: "5px",
                      width: "max-content",
                      fontSize: "20px",
                      fontWeight: "300",
                      padding: "5px",
                    }}
                  >{`$ ${singlePostData.price}`}</div>
                </div>

                <div className="text-sm leading-6 w-full mt-4">
                  <figure className="relative flex w-full flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                    <figcaption className="flex items-center space-x-4">
                      <img
                        src="https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb2RlcnxlbnwwfDB8fHwxNzEwMTY0NjIzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                        alt=""
                        className="flex-none w-14 h-14 rounded-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="">
                        <div className="text-base text-slate-900 font-semibold dark:text-slate-200">
                          {userData.name}
                        </div>
                        <div className="mt-0.5 dark:text-slate-300">
                          Web Developer
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div
              className="bottom mt-10 pb-10"
              style={{ color: "#555", lineHeight: "20px" }}
            >
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features flex-[2] bg-pink-50 lg:overflow-y-scroll">
        <div className="wrapper p-4 flex flex-col gap-4">
          <p className="title font-bold text-xl">General</p>
          <div className="listVertical flex flex-col gap-4 bg-white p-4 rounded">
            <div className="feature flex items-center gap-4">
              <img
                src="/utility.png"
                alt=""
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "rgba(254, 205, 81, 0.209)",
                }}
              />
              <div className="featureText">
                <span style={{ fontWeight: "bold" }}>Utilities</span>
                <p style={{ fontSize: "14px" }}>Renter is responsible</p>
              </div>
            </div>
            <div className="feature flex items-center gap-4">
              <img
                src="/pet.png"
                alt=""
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "rgba(254, 205, 81, 0.209)",
                }}
              />
              <div className="featureText">
                <span style={{ fontWeight: "bold" }}>Pet Policy</span>
                <p style={{ fontSize: "14px" }}>Pets Allowed</p>
              </div>
            </div>
            <div className="feature flex items-center gap-4">
              <img
                src="/fee.png"
                alt=""
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "rgba(254, 205, 81, 0.209)",
                }}
              />
              <div className="featureText">
                <span style={{ fontWeight: "bold" }}>Property Fees</span>
                <p style={{ fontSize: "14px" }}>
                  Must have 3x the rent in total household income
                </p>
              </div>
            </div>
          </div>
          <p className="title font-bold text-xl">Sizes</p>
          <div className="sizes flex justify-between bg-white p-4 rounded">
            <div className="size flex items-center gap-4">
              <img
                src="/size.png"
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <span>80 sqft</span>
            </div>
            <div className="size flex items-center gap-4">
              <img
                src="/bed.png"
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <span>2 beds</span>
            </div>
            <div className="size flex items-center gap-4">
              <img
                src="/bath.png"
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title font-bold text-xl">Nearby Places</p>
          <div className="listHorizontal flex justify-between bg-white p-4 rounded">
            <div className="feature flex items-center gap-4">
              <img
                src="/school.png"
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature flex items-center gap-4">
              <img
                src="/pet.png"
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature flex items-center gap-4">
              <img
                src="/fee.png"
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title font-bold text-xl">Location</p>
          <div className="">
            <Map height={"h-[200px]"} items={[singlePostData]} />
          </div>
          <div className="buttons flex justify-between">
            <button className="flex items-center gap-1 px-4 py-2 bg-white border border-yellow-500 rounded cursor-pointer">
              <img src="/chat.png" alt="" className="w-4 h-4" />
              Send a Message
            </button>
            <button className="flex items-center gap-1 px-4 py-2 bg-white border border-yellow-500 rounded cursor-pointer">
              <img src="/save.png" alt="" className="w-4 h-4" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
