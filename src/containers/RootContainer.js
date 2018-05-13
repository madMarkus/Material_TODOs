import React, { Component } from 'react';
import MainContainer from './MainContainer';
import CssBaseline from 'material-ui/CssBaseline';

import store from '../store';
import { Provider } from 'react-redux';

class RootContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <CssBaseline />
          <MainContainer />
        </React.Fragment>
      </Provider>
    );
  }
}

export default RootContainer;
