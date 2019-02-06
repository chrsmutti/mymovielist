import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MovieIcon from "@material-ui/icons/Movie";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";

import styles from "./NavigationBar.style";

class NavigationBar extends Component {
  render() {
    const { classes, search } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              <span className={classes.movieIcon}>
                <MovieIcon />
              </span>{" "}
              My Movie List
            </Typography>
            <div className={classes.grow} />
            <IconButton className={classes.favorites}>
              <StarIcon />
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={search}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavigationBar);
