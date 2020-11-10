const distanceBetweenPoitns = (lat1, lon1, lat2, lon2) => {
  var p = Math.PI / 180;
  var c = Math.cos;
  var a =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

  return 12742 * Math.asin(Math.sqrt(a));
};

const REGION_COORDINATES = [
  {
    name: "europe",
    latitude: 51,
    longitude: 10,
    zoom: 3.5
  },
  {
    name: "africa",
    latitude: 11.5,
    longitude: 17.75,
    zoom: 3
  },
  {
    name: "south asia",
    latitude: 22.96,
    longitude: 86.05,
    zoom: 3
  },
  {
    name: "southeast asia",
    latitude: 6.21,
    longitude: 106.85,
    zoom: 3
  },
  {
    name: "east asia",
    latitude: 24.59,
    longitude: 126.83,
    zoom: 3
  },
  {
    name: "australia",
    latitude: -24.77,
    longitude: 134.75,
    zoom: 3.5
  },
  {
    name: "north america",
    latitude: 38.2,
    longitude: -99.44,
    zoom: 3.5
  },
  {
    name: "south america",
    latitude: -21.0,
    longitude: -61.0,
    zoom: 3
  }
];

const getClosesRegion = userLocation => {
  const regionWithDistances = REGION_COORDINATES.map(region => {
    const distance = distanceBetweenPoitns(
      userLocation.latitude,
      userLocation.longitude,
      region.latitude,
      region.longitude
    );
    return { ...region, distance };
  });
  let closestRegion = { distance: Number.MAX_SAFE_INTEGER };
  for (let region of regionWithDistances) {
    if (closestRegion.distance > region.distance) {
      closestRegion = region;
    }
  }
  return closestRegion;
};

export { getClosesRegion };
