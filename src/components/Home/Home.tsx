import React, {FC} from "react";
import {useHome} from "../../store/home/selectors";

import {Button, Box, makeStyles, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {activateHomePage} from "../../store/home/actions";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh"
  },
  textBlock: {
    textAlign: "center",
    margin: 20
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 4,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    fontFamily: "'Varela Round', sans-serif;",
    fontWeight: 600,
    fontSize: "16px"
  },
  title: {
    color: "#9DB49D",
    fontFamily: "'Shadows Into Light', cursive;",
    fontWeight: 600,
    fontSize: "40px",
    lineHeight: "50px"
  },
  subtitle: {
    color: "#9DB49D",
    fontFamily: "'Shadows Into Light', cursive;",
    fontWeight: 600,
    fontSize: "35px",
    lineHeight: "45px"
  },
  helpText: {
    color: "#FE6B8B",
    fontFamily: "'Varela Round', sans-serif;",
    fontWeight: 600,
    fontSize: "16px",
    marginTop: "20px"
  }
});

export const Home: FC = () => {
  const state = useHome();
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Box className={classes.root}>
      <Box className={classes.textBlock}>
        <Typography className={classes.title}>{"My name is Ihor Fedorkiv"}</Typography>
        <Typography className={classes.subtitle}>{"I'm a software engineer"}</Typography>
      </Box>
      <Button className={classes.button} onClick={() => dispatch(activateHomePage.init({data: true}))}>
        {"Click This Button"}
      </Button>
      {state.isHomePage && <Typography className={classes.helpText}>{"The update is coming soon"}</Typography>}
    </Box>
  );
};
