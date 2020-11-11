import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

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
  }
});

const Card = ({ name, selected, onClick }) => {
  const classes = useStyles();
  return (
    <button
      className={classNames(
        classes.root,
        selected ? classes.selected : classes.unselected
      )}
      onClick={() => onClick(name)}
    >
      <p>{name}</p>
    </button>
  );
};

export default Card;
