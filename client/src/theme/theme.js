import { createMuiTheme } from "@material-ui/core/styles"

export const themeObject = {
  palette: {
    primary: { main: "DEFINE YOUR COLOR HERE" },
    secondary: { main: "DEFINE YOUR COLOR HERE" },
  },
  backgroundColor: {
    primary: { main: "DEFINE YOUR COLOR HERE" },
    secondary: { main: "DEFINE YOUR COLOR HERE" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
}

export default createMuiTheme(themeObject)
