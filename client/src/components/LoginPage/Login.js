import React from "react";
import {
  BrowserRouter as Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";
import CssBaseline from "@material-ui/core/CssBaseline";
import LinkMUI from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import { useStyles } from "./styles/LoginPageStyle";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <LinkMUI color="inherit" href="">
        Matcha
      </LinkMUI>{" "}
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
          <div className={classes.paper}>
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
          </div>
          <Box mt={4}>
            <Copyright />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
