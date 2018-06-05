import React, { Component } from 'react';
import MainContainer from './MainContainer';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import store from '../store';
import { Provider } from 'react-redux';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#76FF03'
    }
  }
});

class RootContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <MainContainer />
          </MuiThemeProvider>
        </React.Fragment>
      </Provider>
    );
  }
}

export default RootContainer;
