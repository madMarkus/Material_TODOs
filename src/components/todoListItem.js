import React from 'react';

import {
  CheckBoxBlankIcon,
  CheckBoxMarkedIcon,
  CloseIcon
} from '../assets/svg';

import './components.css';

class TodoListItem extends React.Component {
  render() {
    return (
      <div
        className={`TodoListItem-Wrapper ${
          this.props.todo.done ? 'done' : 'undone'
        }`}
        onClick={this.props.onToggle}
      >
        <div className="TodoListItem-NameBlock">{this.props.todo.name}</div>

        <div className="TodoListItem-InputArea">
          <div
            className="TodoListItem-Input"
            onClick={event => {
              event.stopPropagation();
              event.preventDefault();
              this.props.onToggle();
            }}
          >
            {this.props.todo.done ? (
              <CheckBoxMarkedIcon />
            ) : (
              <CheckBoxBlankIcon />
            )}
          </div>

          <div
            className="TodoListItem-Input"
            onClick={event => {
              event.stopPropagation();
              event.preventDefault();
              this.props.onDeleteClick();
            }}
          >
            <CloseIcon />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoListItem;
