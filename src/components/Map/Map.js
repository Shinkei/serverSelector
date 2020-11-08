import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    padding: 12,
    backgroundColor: "#FFFFFF"
  }
});

const REGION_COORDINATES = [
  { 'europe': { coordinates: { latitude: 51, longitude: 10 }, zoom: 3.5 } },
  { 'africa': { coordinates: { latitude: 11.50, longitude: 17.75 }, zoom: 3} },
  { 'south asia': { coordinates: { latitude: 22.96, longitude: 86.05 }, zoom: 3} },
  { 'southeast asia': { coordinates: { latitude: 6.21, longitude: 106.85 }, zoom: 3} },
  { 'east asia': { coordinates: { latitude: 24.59, longitude: 126.83}, zoom: 3} },
  { 'australia': { coordinates: { latitude: -24.77, longitude: 134.75}, zoom: 3.5} },
  { 'north america': { coordinates: { latitude: 38.20, longitude: -99.44}, zoom: 3.5} },
  { 'south america': { coordinates: { latitude: -21.00, longitude: -61.00}, zoom: 3} }
];

const Map = () => {
  const classes = useStyles();
  const [latitude, ] = useState(-21.00);
  const [longitude, ] = useState(-61.00);

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={3.5}
      scrollWheelZoom={false}
      className={classes.root}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[26.07, 50.55]} />
    </MapContainer>
  );
};

export default Map;
