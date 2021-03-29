import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
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
  })
);
