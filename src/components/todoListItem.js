import React from 'react';
import { withStyles } from 'material-ui/styles';

import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

import IconButton from 'material-ui/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class TodoListItem extends React.Component {
  render() {
    return (
      <div>
        <ListItem
          divider
          style={{
            backgroundColor: `${this.props.todo.done ? '#e0e0e0' : '#fff'}`
          }}
          button
          onClick={this.props.onToggle}
        >
          <ListItemText primary={this.props.todo.name} />

          <ListItemSecondaryAction>
            <div>
              <Checkbox
                style={{ width: 24 }}
                checked={this.props.todo.done}
                disableRipple
                onClick={this.props.onToggle}
              />

              <IconButton
                onClick={event => {
                  event.stopPropagation();
                  event.preventDefault();
                  this.props.onDeleteClick();
                }}
                style={{ width: 24, height: 24, marginLeft: 16 }}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    );
  }
}

export default TodoListItem;
