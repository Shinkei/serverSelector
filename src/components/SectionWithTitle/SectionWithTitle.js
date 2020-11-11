import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

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
    backgroundColor: "#5E5E5E",
    textAlign: "center",
    fontFamily: "ubuntu",
    margin: 0,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const SectionWithTitle = ({ title, className, children }) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root, className)}>
      <h4 className={classes.title}>{title}</h4>
      {children}
    </div>
  );
};

export default SectionWithTitle;
