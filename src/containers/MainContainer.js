import React, { Component } from 'react';

import AppBar from '../components/appBar';
import TodoListContainer from './TodoListContainer';

import './containers.css';

class MainContainer extends Component {
  render() {
    return (
      <div className="Main-Wrapper">
        <AppBar />

        <div className="Page-Content-Wrapper">
          <TodoListContainer />
        </div>
      </div>
    );
  }
}

export default MainContainer;
