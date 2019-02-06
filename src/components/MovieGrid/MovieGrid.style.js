export default theme => ({
  root: {
    padding: "1rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "start",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    height: "100%",
    width: "100%",
    maxWidth: "200px",
  },
  title: {
    background: "rgba(0, 0, 0, 0.91)",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.71)",
  },
});
