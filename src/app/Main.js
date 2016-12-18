/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import { deepOrange500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  getStandardActions = () => (
    <FlatButton
      label="Ok"
      primary={true}
      onTouchTap={this.handleRequestClose}
    />
  );

  render = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={styles.container}>
        <Dialog
          open={this.state.open}
          title="What do you want to bb"
          actions={this.getStandardActions()}
          onRequestClose={this.handleRequestClose}
        >
          <TextField fullWidth hintText="bb something..." />
        </Dialog>
        <h1>Just BB.</h1>
        <RaisedButton
          label="BB"
          secondary={true}
          onTouchTap={this.handleTouchTap}
        />
      </div>
    </MuiThemeProvider>
  );
}

export default Main;
