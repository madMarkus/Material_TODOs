// @flow

import React from 'react';

import {
  CheckBoxBlankIcon,
  CheckBoxMarkedIcon,
  CloseIcon
} from '../assets/svg';

import './components.css';

type Props = {
  todo: {
    id: number,
    name: string,
    done: boolean
  },
  onToggle: number => void,
  onDeleteClick: number => void
};

class TodoListItem extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Object) {
    return this.props.todo.done !== nextProps.todo.done;
  }

  render() {
    return (
      <div
        className={`TodoListItem-Wrapper ${
          this.props.todo.done ? 'done' : 'undone'
        }`}
        onClick={() => this.props.onToggle(this.props.todo.id)}
      >
        <div className="TodoListItem-NameBlock">{this.props.todo.name}</div>

        <div className="TodoListItem-InputArea">
          <div
            className="TodoListItem-Input"
            onClick={event => {
              event.stopPropagation();
              event.preventDefault();
              this.props.onToggle(this.props.todo.id);
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
              this.props.onDeleteClick(this.props.todo.id);
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
