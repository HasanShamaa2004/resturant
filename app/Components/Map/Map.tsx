"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import L from "leaflet";
import { LatLng } from "leaflet";

const icon = L.icon({
  iconUrl: "/assets/icons/marker-icon.png",
  iconRetinaUrl: "/assets/icons/marker-icon-2x.png",
  shadowUrl: "/assets/icons/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapProps {
  defaultLocation: { lat: number; lng: number };
  zoom: number;
  onChangeLocation: (lat: number, lng: number) => void;
  onChangeZoom: (zoom: number) => void;
}

// مكون لتحديث مركز الخريطة
function MapCenter({ position }: { position: LatLng }) {
  const map = useMap();
  useEffect(() => {
    map.setView(position, map.getZoom());
  }, [position, map]);
  return null;
}

// مكون لمراقبة أحداث الخريطة
function MapEvents({
  onChangeLocation,
  onChangeZoom,
}: {
  onChangeLocation: (lat: number, lng: number) => void;
  onChangeZoom: (zoom: number) => void;
}) {
  const map = useMapEvents({
    zoom: () => {
      onChangeZoom(map.getZoom());
    },
    click: (e) => {
      const { lat, lng } = e.latlng;
      onChangeLocation(lat, lng);
    },
  });
  return null;
}

const Map = ({
  defaultLocation,
  zoom,
  onChangeLocation,
  onChangeZoom,
}: MapProps) => {
  const [position, setPosition] = useState<LatLng>(
    new LatLng(defaultLocation.lat, defaultLocation.lng)
  );

  // تحديث الموقع عندما يتغير defaultLocation
  useEffect(() => {
    setPosition(new LatLng(defaultLocation.lat, defaultLocation.lng));
  }, [defaultLocation]);

  const handleLocationChange = (lat: number, lng: number) => {
    setPosition(new LatLng(lat, lng));
    onChangeLocation(lat, lng);
  };

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      style={{ height: "300px", width: "100%", borderRadius: "12px" }}
      className="!max-w-[820px] w-full rounded-xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon} />
      <MapEvents
        onChangeLocation={handleLocationChange}
        onChangeZoom={onChangeZoom}
      />
      <MapCenter position={position} />
    </MapContainer>
  );
};

export default Map;
