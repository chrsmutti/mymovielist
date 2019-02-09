import { service as TMDBService } from "../../services/tmdb";
import GridListTile from "@material-ui/core/GridListTile";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import React, { Component } from "react";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

class MovieItem extends Component {
  render() {
    const { movie, classes } = this.props;

    return (
      <GridListTile
        key={movie.id}
        classes={{ root: classes.gridListTileRoot, tile: classes.gridListTile }}
      >
        <ReactImageFallback
          src={TMDBService.getImage(movie.poster_path)}
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
    );
  }
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  classes: PropTypes.object,
};

export default MovieItem;
