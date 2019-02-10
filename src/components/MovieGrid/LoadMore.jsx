import React, { Component } from "react";
import GridListTile from "@material-ui/core/GridListTile";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import RefreshIcon from "@material-ui/icons/Refresh";
import Typography from "@material-ui/core/Typography";

class LoadMore extends Component {
  constructor(props) {
    super(props);

    this.state = { disabled: false };
  }

  render() {
    const { classes } = this.props;
    const { disabled } = this.state;

    let content;
    if (!disabled) {
      content = (
        <div>
          <NavigateNextIcon classes={{ root: classes.iconBigger }} />
          <Typography style={{ width: "100%" }} variant="h6">
            Load more...
          </Typography>
        </div>
      );
    } else {
      content = (
        <RefreshIcon
          classes={{ root: `${classes.iconBigger} ${classes.iconSpin}` }}
        />
      );
    }

    return (
      <GridListTile
        key={"load-more"}
        classes={{ root: classes.gridListTileRoot, tile: classes.loadMore }}
      >
        <IconButton
          disabled={disabled}
          classes={{ root: classes.buttonNext, label: classes.buttonNextLabel }}
          onClick={() => this.handleNextClick()}
        >
          {content}
        </IconButton>
      </GridListTile>
    );
  }

  async handleNextClick() {
    this.setState({ disabled: true });
    await this.props.onClick();
    this.setState({ disabled: false });
  }
}

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object,
};

export default LoadMore;
