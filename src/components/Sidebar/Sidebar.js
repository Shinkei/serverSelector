import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";
import Card from "../Card";

const useStyles = createUseStyles({
  root: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    display: "grid",
    gridGap: 12,
    gridTemplateRows: "repeat(auto-fill, minmax(50px, 1fr))",
    overflowY: "auto"
  },
  title: {
    color: "#FFFFFF",
    backgroundColor: "#F38361",
    textAlign: "center",
    fontFamily: "ubuntu",
    margin: 0,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Sidebar = ({ title, options, className, onOptionClick }) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root, className)}>
      <h2 className={classes.title}>{title}</h2>
      {options.map(option => {
        return (
          <Card key={options.key} name={option.name} onClick={onOptionClick} />
        );
      })}
    </div>
  );
};

export default Sidebar;
