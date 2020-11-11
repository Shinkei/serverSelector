import React, { useState, useEffect } from "react";
import Header from "../Header";
import { createUseStyles } from "react-jss";
import SectionWithTitle from "../SectionWithTitle";
import Map from "../Map";
import Card from "../Card";
import ServerCard from "../ServerCard";
import { getServers, getRegions } from "../../services";
import { getClosesRegion, getRegionByName } from "../../util/utils";

const useStyles = createUseStyles({
  root: {
    height: "100vh",
    backgroundColor: "#FAFAFA"
  },
  content: {
    marginTop: 12,
    display: "grid",
    gridGap: 12,
    gridTemplateColumns: "1fr 1fr 3fr"
  },
  leftSidebar: {
    height: "calc(100vh - 70px - 24px)"
  }
});

const Dashboard = () => {
  const classes = useStyles();

  const [region, setRegion] = useState(null);
  const [regionName, setregionName] = useState("");
  const [regions, setRegions] = useState([]);
  const [servers, setServers] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  // in the first load, it asks the browser for the user location
  // and get the closes region that are fetches from the API
  useEffect(() => {
    const fetchData = async () => {
      const regions = await getRegions();
      setRegions(regions);
    };

    navigator.geolocation.getCurrentPosition(location => {
      const { coords } = location;
      const closestRegion = getClosesRegion({
        latitude: coords.latitude,
        longitude: coords.longitude
      });
      setUserLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
        name: "Your Location",
        isUser: true
      });
      setRegion(closestRegion);
      setregionName(closestRegion.name);
    });

    fetchData();
  }, []);

  // Every time the region name changes, it calculates again the server list, fetching it from the API
  useEffect(() => {
    const fetchData = async () => {
      const servers = await getServers(regionName);
      setServers(servers);
    };

    fetchData();
  }, [regionName]);

  // Event given to the region to select one from the list
  const onRegionSelect = regionName => {
    setregionName(regionName);
    setRegion(getRegionByName(regionName));
  };

  // Event given to the servers to select one from the list
  const onServerSelect = serverName => {
    const updatedServers = [...servers];
    for (let server of updatedServers) {
      if (server.cloud_name === serverName) {
        server["selected"] = true;
      } else {
        server["selected"] = false;
      }
    }
    setServers(updatedServers);
  };

  // Map all the servers and get the data used by the markers
  const markers = servers.map(server => ({
    name: server.cloud_name,
    latitude: server.geo_latitude,
    longitude: server.geo_longitude,
    selected: server.selected || false
  }));

  if (userLocation) {
    markers.push(userLocation);
  }

  return (
    <div className={classes.root}>
      <Header region={regionName} />
      <div className={classes.content}>
        <SectionWithTitle
          title="Regions"
          className={classes.leftSidebar}
          onOptionClick={onRegionSelect}
        >
          {regions.map((region, index) => (
            <Card
              key={index}
              name={region}
              selected={region === regionName}
              onClick={onRegionSelect}
            />
          ))}
        </SectionWithTitle>
        <SectionWithTitle
          title="Servers"
          className={classes.leftSidebar}
          onOptionClick={onServerSelect}
        >
          {servers.map((server, index) => (
            <ServerCard
              key={index}
              name={server.cloud_name}
              selected={server.selected}
              onClick={onServerSelect}
            />
          ))}
        </SectionWithTitle>
        <div className={classes.leftSidebar}>
          <Map region={region || {}} markers={markers || []} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
