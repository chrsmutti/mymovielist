import { service as TMDBService } from "../../services/tmdb";
import { service as FavoritesService } from "../../services/favorites";
import GridListTile from "@material-ui/core/GridListTile";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import React, { Component } from "react";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

class MovieItem extends Component {
  constructor(props) {
    super(props);

    this.state = { favorite: FavoritesService.isFavorite(props.movie) };
  }

  render() {
    const { movie, classes } = this.props;

    let icon;
    if (this.state.favorite) {
      icon = <StarIcon />;
    } else {
      icon = <StarBorderIcon />;
    }

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
            <IconButton
              className={classes.icon}
              onClick={() => {
                FavoritesService.toggle(movie);
                this.setState({
                  favorite: FavoritesService.isFavorite(movie),
                });
              }}
            >
              {icon}
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
