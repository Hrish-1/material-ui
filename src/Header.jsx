import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { AcUnitRounded } from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  },
  AppBarStyles: {
    marginBottom: "20px"
  }
}));

export default (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.AppBarStyles}>
      <Toolbar>
        <Typography className={classes.typographyStyles}>Hrishikesh</Typography>
        <AcUnitRounded />
      </Toolbar>
    </AppBar>
  );
};
