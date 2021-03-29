import React from "react";
import {
  Button, TextField, Link, Grid,
  Typography, makeStyles
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

const ResetPassword = ({ url }) => {
  const classes = useStyles();

  return (
    <>
      <Typography component="h1" variant="h5">
        Reset Password
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Send email
        </Button>
        <Grid container justify="flex-end">
          <Grid item xs={12}>
            <Link
              href={`${url}/sign-in`}
              variant="body2"
            >{`Have an account? Sign In`}</Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default ResetPassword;
