import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ReactImageFallback from "react-image-fallback";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";
const image = path => (path ? `${imageBaseUrl}${path}` : "fallback-image.jpg");

function MovieGrid(props) {
  const { classes, movies } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} cols={8} spacing={10} className={classes.gridList}>
        {movies.map(movie => (
          <GridListTile key={movie.id}>
            <ReactImageFallback
              src={image(movie.poster_path)}
              fallbackImage="fallback-image.jpg"
              initialImage="loader.gif"
              alt={movie.title}
              className={classes.image}
            />

            <GridListTileBar
              className={classes.title}
              title={movie.title}
              subtitle={<span>{movie.release_date}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

const styles = theme => ({
  root: {
    padding: "1rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    background: "rgba(0, 0, 0, 0.91)",
  },
});

MovieGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
};

export default withStyles(styles)(MovieGrid);
