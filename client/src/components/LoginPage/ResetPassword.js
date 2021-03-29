import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles/LoginPageStyle";

const ResetPassword = ({ url }) => {
  const classes = useStyles();

  return (
    <Fragment>
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
        <Grid container style={{ justifyContent: "flex-end" }}>
          <Grid item>
            <Link
              href={`${url}/sign-in`}
              variant="body2"
            >{`Have an account? Sign In`}</Link>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};
export default ResetPassword;
