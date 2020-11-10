import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    padding: 12,
    backgroundColor: "#FFFFFF"
  }
});

const RegionSelector = ({ coordinates }) => {
  const map = useMap();
  map.flyTo(
    { lat: coordinates.lat || 0, lng: coordinates.lng || 0 },
    coordinates.zoom || 1
  );
  return null;
};

const Map = ({ marks, region }) => {
  const classes = useStyles();
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0, zoom: 1 });

  useEffect(() => {
    setCoordinates({
      lat: region.latitude,
      lon: region.longitude,
      zoom: region.zoom
    });
  }, [region]);

  return (
    <MapContainer
      center={[0, 0]}
      zoom={coordinates.zoom}
      scrollWheelZoom={false}
      className={classes.root}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Array.isArray(marks) &&
        marks.map((mark, index) => {
          return (
            <Marker key={index} position={[mark.latitude, mark.longitude]} />
          );
        })}
      <RegionSelector coordinates={coordinates} />
    </MapContainer>
  );
};

export default Map;
