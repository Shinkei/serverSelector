import React, { useState, useEffect } from "react";
import Header from "../Header";
import { createUseStyles } from "react-jss";
import Sidebar from "../Sidebar";
import Map from "../Map";
import { getServers, getRegions } from "../../services";

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

  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0
  });
  const [regions, setRegions] = useState([]);
  const [servers, setServers] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const regions = await getRegions();
      setRegions(regions);
    };

    navigator.geolocation.getCurrentPosition(location => {
      const { coords } = location;
      setUserLocation({
        latitude: coords.latitude,
        longitude: coords.longitude
      });
    });

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const servers = await getServers();
      setServers(servers);
    };

    fetchData();
  }, [selectedRegion]);

  const marks = servers.map(server => ({
    latitude: server.geo_latitude,
    longitude: server.geo_longitude
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
        />
        <Sidebar
          options={servers.map((server, index) => ({
            key: index,
            name: server.cloud_name
          }))}
          className={classes.leftSidebar}
        />
        <Map marks={marks || []} />
      </div>
    </div>
  );
};

export default Dashboard;
