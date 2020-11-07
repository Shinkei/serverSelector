import React from "react";
import ReactDOM from "react-dom";
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
body:{
  backgroundColor: 'gold'
}
})

const App = () => {
  const classes = useStyles()
  return <div className={classes.body}>Aiven server selector</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
