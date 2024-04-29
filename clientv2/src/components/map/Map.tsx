import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../pin/Pin";
import "leaflet/dist/leaflet.css";

function Map({ items, height }) {
  return (
    <div className="rounded-xl w-[100%] h-full">
      <MapContainer
        center={[52.4797, -1.90269]}
        zoom={7}
        scrollWheelZoom={false}
        className={`${height} w-full rounded-xl`}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((item) => (
          <Pin item={item} key={item.id} />
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
