import React, { Component } from 'react';

import AppBar from '../components/appBar';
import TodoListContainer from './TodoListContainer';

class MainContainer extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div>
          <AppBar />
        </div>
        <div
          style={{
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px 8px 8px 8px',
            overflow: 'auto'
          }}
        >
          <TodoListContainer />
        </div>
      </div>
    );
  }
}

export default MainContainer;
