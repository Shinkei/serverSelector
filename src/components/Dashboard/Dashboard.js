import React, { useState, useEffect } from "react";
import Header from "../Header";
import { createUseStyles } from "react-jss";
import Sidebar from "../Sidebar";
import Map from "../Map";
import { getServers, getRegions } from "../../services";
import { getClosesRegion, getRegionByName } from "../../../util/utils";

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

  const [region, setregion] = useState(null);
  const [regionName, setregionName] = useState("");
  const [regions, setRegions] = useState([]);
  const [servers, setServers] = useState([]);

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
      setregion(closestRegion);
    });

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const servers = await getServers(regionName);
      setServers(servers);
    };

    fetchData();
  }, [regionName]);

  const onRegionSelect = regionName => {
    setregionName(regionName);
    setregion(getRegionByName(regionName));
  };

  const onServerSelect = serverName => {
    const updatedServers = [...servers]
    for(let server of updatedServers) {
      if(server.cloud_name === serverName) {
        server['selected'] = true
      } else {
        server['selected'] = false
      }
    }
    setServers(updatedServers)
  };

  const marks = servers.map(server => ({
    name: server.cloud_name,
    latitude: server.geo_latitude,
    longitude: server.geo_longitude,
    selected: server.selected || false
  }));

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <Sidebar
          options={regions.map((region, index) => ({
            key: index,
            name: region
          }))}
          className={classes.leftSidebar}
          onOptionClick={onRegionSelect}
        />
        <Sidebar
          options={servers.map((server, index) => ({
            key: index,
            name: server.cloud_name
          }))}
          className={classes.leftSidebar}
          onOptionClick={onServerSelect}
        />
        <div className={classes.leftSidebar}>
          <Map region={region || {}} marks={marks || []} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
