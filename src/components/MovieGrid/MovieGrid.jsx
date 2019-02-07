import { getImage } from "../../services/tmdb";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import styles from "./MovieGrid.style";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

class MovieGrid extends Component {
  render() {
    const { classes, movies } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={250} cols={this.getGridListCols()} spacing={10}>
          {movies.map(movie => (
            <GridListTile key={movie.id} className={classes.gridListTile}>
              <ReactImageFallback
                src={getImage(movie.poster_path)}
                fallbackImage="fallback-image.jpg"
                initialImage="fallback-image.jpg"
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
      return 9;
    }

    if (isWidthUp("lg", this.props.width)) {
      return 7;
    }

    if (isWidthUp("md", this.props.width)) {
      return 5;
    }

    return 2;
  }
}

MovieGrid.propTypes = {
  movies: PropTypes.array.isRequired,
  classes: PropTypes.object,
  width: PropTypes.string,
};

export default withWidth()(withStyles(styles)(MovieGrid));
