import React, {useState, useEffect} from "react";
import Header from "../Header";
import { createUseStyles } from "react-jss";
import Sidebar from "../Sidebar";
import Map from '../Map'

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

  const [userLocation, setUserLocation] = useState({latitude: 0, longitude: 0})
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location)=> {
      const {coords} = location
      setUserLocation({latitude: coords.latitude, longitude: coords.longitude})
    })
  }, [])

  console.log(userLocation)
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <Sidebar
          options={[
            { key: "1", name: "Africa" },
            { key: "2", name: "America" },
            { key: "3", name: "Asia" }
          ]}
          className={classes.leftSidebar}
        />
        <Sidebar
          options={[
            { key: "4", name: "Africa" },
            { key: "5", name: "America" },
            { key: "6", name: "Asia" }
          ]}
          className={classes.leftSidebar}
        />
        <Map />
      </div>
    </div>
  );
};

export default Dashboard;
