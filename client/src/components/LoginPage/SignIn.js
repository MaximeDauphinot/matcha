import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Grid,
  makeStyles,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  message: {
    color: "red",
    fontWeight: 100,
  },
}));

const SignIn = ({ url }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    login: "",
    password: "",
    showPassword: false,
  });

  const signIn = async () => {
    try {
      const response = await fetch("http://localhost:5000/sign-in", {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(user),
      });
      const jsonRes = await response.json();

      setMessage(jsonRes.message);
      setLoading(false);
    } catch (err) {
      throw new Error("Something went wrong while sending datas");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    signIn();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          required
          variant="outlined"
          margin="normal"
          fullWidth
          id="login"
          label="Login"
          name="login"
          value={user.login}
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type={user.showPassword ? "text" : "password"}
          id="password"
          value={user.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() =>
                    setUser({
                      ...user,
                      showPassword: !user.showPassword,
                    })
                  }
                >
                  {user.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href={`${url}/reset-password`} variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              href={`${url}/sign-up`}
              variant="body2"
            >{`Don't have an account? Sign Up`}</Link>
          </Grid>
        </Grid>
      </form>
      {loading ? <CircularProgress color="secondary" /> : null}
      {message ? (
        <Box mt={4}>
          <Typography className={classes.message} component="h1" variant="h6">
            {message}
          </Typography>
        </Box>
      ) : null}
    </>
  );
};

export default SignIn;
