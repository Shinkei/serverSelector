import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

import aws from "../../img/aws.svg";
import azure from "../../img/azure.svg";
import digitalOcean from "../../img/do.svg";
import google from "../../img/google.svg";
import upcloud from "../../img/upcloud.svg";

const useStyles = createUseStyles({
  root: {
    border: "solid 1px",
    borderColor: "#F38361",
    borderRadius: 4,
    textAlign: "center",
    fontFamily: "ubuntu",
    cursor: "pointer"
  },
  selected: {
    color: "#FFFFFF",
    backgroundColor: "#F38361"
  },
  unselected: {
    backgroundColor: "#FFFFFF",
    color: "#F38361"
  },
  nameContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center"
  },
  company: {
    margin: 0
  },
  name: {
    margin: "6px 0px 0px"
  },
  logo: {
    width: "20%",
    height: 45,
    marginRight: 12
  }
});

const COMPANY_LOGOS = {
  google: google,
  aws: aws,
  do: digitalOcean,
  upcloud: upcloud,
  azure: azure
};

const ServerCard = ({ name, selected, onClick }) => {
  const classes = useStyles();

  const parts = name.split("-");
  const companyName = parts.shift();
  const logo = COMPANY_LOGOS[companyName];
  return (
    <button
      className={classNames(
        classes.root,
        selected ? classes.selected : classes.unselected
      )}
      onClick={() => onClick(name)}
    >
      <div className={classes.nameContainer}>
        <img src={logo} alt="serverLogo" className={classes.logo}></img>
        {/* <h5 className={classes.company}>{parts.shift().toUpperCase()}</h5> */}
        <p className={classes.name}>{parts.join(" ")}</p>
      </div>
    </button>
  );
};

export default ServerCard;
