import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ReactImageFallback from "react-image-fallback";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import styles from "./MovieGrid.style";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";
const image = path => (path ? `${imageBaseUrl}${path}` : "fallback-image.jpg");

class MovieGrid extends Component {
  render() {
    const { classes, movies } = this.props;

    return (
      <div className={classes.root}>
        <GridList
          cellHeight={250}
          cols={this.getGridListCols()}
          spacing={10}
          className={classes.gridList}
        >
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
                actionIcon={
                  <IconButton className={classes.icon}>
                    <StarBorderIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

  getGridListCols() {
    if (isWidthUp("xl", this.props.width)) {
      return 8;
    }

    if (isWidthUp("lg", this.props.width)) {
      return 6;
    }

    if (isWidthUp("md", this.props.width)) {
      return 4;
    }

    return 2;
  }
}

MovieGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  width: PropTypes.number,
};

export default withWidth()(withStyles(styles)(MovieGrid));
