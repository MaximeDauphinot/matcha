import React, { useState } from "react";
import { BrowserRouter as Redirect } from "react-router-dom";
import {
  Button, TextField, Link, Box,
  Grid, Typography, makeStyles
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formRow: {
    display: "flex",
    flexDirection: "row",
  },
}))

const SignUp = ({ url }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    login: undefined,
    password: undefined,
  });

  // useEffect(() => {
  //   fetchGames() // Fetch games when component is mounted
  // }, [])

  // const fetchGames = () => {
  //   fetch('http://localhost:3000/game', {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((result) => setData(result.rows))
  //     .catch((err) => console.log('error'))
  // }

  const saveUser = async () => {
    try {
      await fetch("http://localhost:5000/new-user", {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newUser),
      });

      setLoading(false);
      setNewUser({
        firstName: "",
        lastName: "",
        email: "",
        login: "",
        password: "",
      });
      setRedirect(true);
    } catch (err) {
      throw new Error("Something went wrong when sendind datas");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(newUser);
    saveUser();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {redirect ? (
        <Redirect to="/Login/sign-in" />
      ) : (
        <>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Box className={classes.formRow}>
              <TextField
                required
                variant="outlined"
                margin="normal"
                fullWidth
                id="firstName"
                label="First name"
                name="firstName"
                // autoComplete="firstName"
                value={newUser.firstName}
                onChange={handleChange}
                autoFocus
              />
              <TextField
                required
                variant="outlined"
                margin="normal"
                fullWidth
                id="lastName"
                label="Last name"
                name="lastName"
                // autoComplete="lastName"
                value={newUser.lastName}
                onChange={handleChange}
              />
            </Box>
            <TextField
              required
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              // autoComplete="email"
              value={newUser.email}
              onChange={handleChange}
            />
            <TextField
              required
              variant="outlined"
              margin="normal"
              fullWidth
              id="login"
              label="Login"
              name="login"
              // autoComplete="login"
              value={newUser.login}
              onChange={handleChange}
            />
            <TextField
              required
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="current-password"
              value={newUser.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href={`${url}/reset-password`} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href={`${url}/sign-in`}
                  variant="body2"
                >{`Have an account? Sign In`}</Link>
              </Grid>
            </Grid>
          </form>
          {loading ? <CircularProgress color="secondary" /> : null}
        </>
      )}
    </>
  );
};

export default SignUp;
