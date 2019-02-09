import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: "dark",
    primary: {
      main: "#d32f2f",
    },
    secondary: {
      main: "#bf360c",
    },
  },
});
