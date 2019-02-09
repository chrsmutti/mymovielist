import GridList from "@material-ui/core/GridList";
import PropTypes from "prop-types";
import styles from "./MovieGrid.style";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import MovieItem from "./MovieItem";
import LoadMore from "./LoadMore";

class MovieGrid extends Component {
  render() {
    const { classes, movies, hasNext, onLoadMore } = this.props;

    let next;
    if (hasNext && movies.length > 0) {
      next = <LoadMore classes={classes} onClick={() => onLoadMore()} />;
    }

    return (
      <div className={classes.root}>
        <GridList
          className={classes.gridList}
          cellHeight={250}
          cols={this.getGridListCols()}
          spacing={10}
        >
          {movies.map(movie => (
            <MovieItem key={movie.id} movie={movie} classes={classes} />
          ))}

          {next}
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
  onLoadMore: PropTypes.func.isRequired,
  hasNext: PropTypes.bool.isRequired,
  classes: PropTypes.object,
  width: PropTypes.string,
};

export default withWidth()(withStyles(styles)(MovieGrid));
