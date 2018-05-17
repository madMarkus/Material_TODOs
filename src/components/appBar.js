// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { todoAdd } from '../actions/todosActions';

import TextField from 'material-ui/TextField';

import './components.css';

type Props = {
  todoAdd: ({ id: number, name: string, done: boolean }) => {
    type: string,
    todoObject: { id: number, name: string, done: boolean }
  }
};

class CustomAppBar extends Component<Props> {
  onKeyPressHandler = event => {
    if (event.key === 'Enter' && event.target.value !== '') {
      this.props.todoAdd({
        id: Date.now(),
        name: event.target.value,
        done: false
      });
      event.target.value = '';
    }
  };

  render() {
    return (
      <div className="AppBar-Root">
        <div className="AppBar-TextField-Wrapper">
          <TextField
            margin="none"
            fullWidth
            placeholder="Enter new TODO"
            onKeyPress={this.onKeyPressHandler}
            autoFocus
          />
        </div>
      </div>
    );
  }
}

export default connect(null, { todoAdd })(CustomAppBar);
