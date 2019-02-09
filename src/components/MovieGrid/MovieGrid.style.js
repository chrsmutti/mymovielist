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
  },
  image: {
    height: "300px",
    width: "200px",
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
});
