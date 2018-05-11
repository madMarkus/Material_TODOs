import React from "react";
import { Component } from "react";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

const styles = {
  root: {
    flexGrow: 1
  }
};

class CustomAppBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Material TODOs
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(CustomAppBar);
