import React, { Component } from 'react';
import { connect } from 'react-redux';

import { todoAdd } from '../actions/todosActions';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

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
      <AppBar style={{ padding: 8 }} position="static" color="primary">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Paper style={{ padding: 4, width: '100%', maxWidth: 700 }}>
            <TextField
              margin="none"
              fullWidth
              placeholder="Enter new TODO"
              onKeyPress={this.onKeyPressHandler}
              autoFocus
            />
          </Paper>
        </div>
      </AppBar>
    );
  }
}

export default connect(null, { todoAdd })(CustomAppBar);
