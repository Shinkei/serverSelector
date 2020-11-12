/**
 * Calcilates the distance between 2 geo points
 * @param {number} lat1 - latitude of point 1
 * @param {number} lng1 - longitude of points 1
 * @param {number} lat2 - latitude of point 2
 * @param {number} lng2 - longitude of point 2
 * Taken from stackoverflow
 */
const distanceBetweenPoitns = (lat1, lng1, lat2, lng2) => {
  var p = Math.PI / 180;
  var c = Math.cos;
  var a =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lng2 - lng1) * p))) / 2;

  return 12742 * Math.asin(Math.sqrt(a));
};

/**
 * This are the coordinates of each region and the zoom to apply in the leaflet map
 */
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
    latitude: 40,
    longitude: -96,
    zoom: 3.5
  },
  {
    name: "south america",
    latitude: -21.0,
    longitude: -61.0,
    zoom: 3
  }
];

/**
 * Calculate which region is the closest to the user location
 * @param {Object} userLocation - user latitude and longitude
 */
const getClosestRegion = userLocation => {
  if (!userLocation || !userLocation.latitude || !userLocation.longitude) {
    return null
  }
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

/**
 * return the region object using the region name
 * @param {string} name - region name
 */
const getRegionByName = name => {
  return REGION_COORDINATES.find(region => region.name === name);
};

export { getClosestRegion, getRegionByName };
