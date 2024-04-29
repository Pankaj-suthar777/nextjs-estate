import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex items-center gap-4">
          <img src={item.img} alt="" className="w-16 h-12 rounded-md" />
          <div className="textContainer">
            <Link to={`/${item.id}`} className="text-blue-500 font-bold">
              {item.title}
            </Link>
            <span className="text-gray-600">{item.bedroom} bedroom</span>
            <b className="text-green-500">$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
