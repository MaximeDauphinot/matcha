import React from "react";
import {
  Button, TextField, Typography,
  FormControlLabel, Checkbox,
  Link, Grid, makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const SignIn = ({ url }) => {
  const classes = useStyles();

  return (
    <>
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
    </>
  );
};

export default SignIn;
