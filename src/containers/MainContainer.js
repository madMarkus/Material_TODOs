import React, { Component } from 'react';

import AppBar from '../components/appBar';
import TodoListContainer from './TodoListContainer';

import './containers.css';

class MainContainer extends Component {
  render() {
    return (
      <div className="Main-Wrapper">
        <AppBar />

        <div
          className="Page-Content-Wrapper"
          // style={{
          //   display: 'flex',
          //   justifyContent: 'center',
          //   padding: '0px 8px 8px 8px',
          //   overflow: 'auto'
          // }}
        >
          <TodoListContainer />
        </div>
      </div>
    );
  }
}

export default MainContainer;
