import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MovieIcon from "@material-ui/icons/Movie";
import PropTypes from "prop-types";
import SearchIcon from "@material-ui/icons/Search";
import StarIcon from "@material-ui/icons/Star";
import styles from "./NavigationBar.style";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searching: false };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit">
              <MovieIcon className={classes.movieIcon} /> My Movie List
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
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                onChange={e => this.handleQueryChange(e)}
              />
            </div>
          </Toolbar>

          <LinearProgress hidden={!this.state.searching} variant="query" />
        </AppBar>
      </div>
    );
  }

  /**
   * Handle a input text changed event.
   *
   * @param {InputEvent} e Input event.
   * @memberof NavigationBar
   */
  async handleQueryChange(e) {
    this.setState({ searching: true });
    await this.props.search(e.target.value);
    this.setState({ searching: false });
  }
}

NavigationBar.propTypes = {
  search: PropTypes.func.isRequired,
  classes: PropTypes.object,
};

export default withStyles(styles)(NavigationBar);
