import React from "react";
import {
  BrowserRouter as Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import {
  CssBaseline,
  Link,
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "auto",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardContent: {
    padding: "20px 48px 0px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        Matcha
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Login = () => {
  const classes = useStyles();
  const { path, url } = useRouteMatch();

  return (
    <Container className={classes.container} component="main" maxWidth="sm">
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <CssBaseline />
          <Box className={classes.paper}>
            <Avatar className={classes.avatar}>
              <PeopleAltRoundedIcon />
            </Avatar>
            <Switch>
              <Route
                exact
                path={`${path}/sign-in`}
                component={() => <SignIn url={url} />}
              />
              <Route
                path={`${path}/sign-up`}
                component={() => <SignUp url={url} />}
              />
              <Route
                path={`${path}/reset-password`}
                component={() => <ResetPassword url={url} />}
              />
            </Switch>
          </Box>
          <Box mt={4}>
            <Copyright />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
