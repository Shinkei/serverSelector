import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import { createUseStyles } from "react-jss";
import {Icon} from 'leaflet'

const useStyles = createUseStyles({
  root: {
    padding: 12,
    backgroundColor: "#FFFFFF"
  }
});

/**
 * This is a component needed for the map to use some events to move the location
 */
const RegionSelector = ({ coordinates }) => {
  const map = useMap();
  map.flyTo(
    { lat: coordinates.lat || 0, lng: coordinates.lng || 0 },
    coordinates.zoom || 1
  );
  return null;
};

const Map = ({ markers, region }) => {
  const classes = useStyles();
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0, zoom: 1 });

  useEffect(() => {
    setCoordinates({
      lat: region.latitude,
      lng: region.longitude,
      zoom: region.zoom
    });
  }, [region]);

  const normalIcon = new Icon({
    iconUrl: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF',
    iconSize: [21, 34]
  })
  const selectedIcon = new Icon({
    iconUrl: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|ff0000&chf=a,s,ee00FFFF',
    iconSize: [21, 34]
  })

  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lng]}
      zoom={coordinates.zoom}
      scrollWheelZoom={false}
      className={classes.root}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Array.isArray(markers) &&
        markers.map((mark, index) => {
          return (
            <Marker key={index} position={[mark.latitude, mark.longitude]} icon={mark.selected ? selectedIcon : normalIcon}>
              <Popup>{mark.name}</Popup>
            </Marker>
          );
        })}
      <RegionSelector coordinates={coordinates} />
    </MapContainer>
  );
};

export default Map;
