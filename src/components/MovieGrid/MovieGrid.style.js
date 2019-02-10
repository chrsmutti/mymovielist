import { fade } from "@material-ui/core/styles/colorManipulator";

export default theme => ({
  root: {
    padding: "1rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "start",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    paddingTop: "5rem",
  },
  gridList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
  },
  gridListTileRoot: {
    padding: "3px",
  },
  gridListTile: {
    borderRadius: "10px",
    border: "1px solid #000",
    overflow: "hidden",
    height: "240px",
    width: "160px",
    [theme.breakpoints.up("sm")]: {
      height: "300px",
      width: "200px",
    },
  },
  image: {
    height: "100%",
    width: "100%",
    display: "block",
    margin: "0 auto",
  },
  title: {
    background: "rgba(0, 0, 0, 0.91)",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.71)",
  },
  loadMore: {
    borderRadius: "10px",
    border: "1px solid #000",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: fade(theme.palette.secondary.main, 0.95),
    height: "240px",
    width: "160px",
    [theme.breakpoints.up("sm")]: {
      height: "300px",
      width: "200px",
    },
  },
  buttonNext: {
    padding: "100%",
  },
  buttonNextLabel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  iconBigger: {
    fontSize: "3rem",
  },
  "@keyframes mml-spin": {
    from: { transform: "rotate(0)" },
    to: { transform: "rotate(360deg)" },
  },
  iconSpin: {
    animation: "mml-spin 2s infinite",
  },
});
