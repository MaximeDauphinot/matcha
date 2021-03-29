import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles/LoginPageStyle";

const SignIn = ({ url }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <form className={classes.form}>
        <TextField
          required
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
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
          autoComplete="current-password"
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
    </Fragment>
  );
};

export default SignIn;
