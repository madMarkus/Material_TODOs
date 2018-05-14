import React, { Component } from 'react';
import { connect } from 'react-redux';

import { todoAdd } from '../actions/todosActions';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import './components.css';

class CustomAppBar extends Component {
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
        <div
          className="AppBar-TextField-Wrapper"
          // style={{
          //   display: 'flex',
          //   boxShadow:
          //     '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
          //   padding: '4px 8px 4px 8px',
          //   maxWidth: 700,
          //   backgroundColor: '#fff',
          //   width: '100%',
          //   borderRadius: 2
          // }}
        >
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
