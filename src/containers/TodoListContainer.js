// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { todoCheck, todoDelete } from '../actions/todosActions';

import TodoListItem from '../components/todoListItem';

type Props = {
  todoDelete: number => { type: string, id: number },
  todoCheck: number => { type: string, id: number },

  todos: Array<{ id: number, name: string, done: boolean }>
};

class TodoListContainer extends Component<Props> {
  todoDelete = id => {
    this.props.todoDelete(id);
  };

  todoToggle = id => {
    this.props.todoCheck(id);
  };

  render() {
    return (
      <div className="TodoList-Wrapper">
        {this.props.todos.map(todoObject => (
          <TodoListItem
            key={todoObject.id}
            todo={todoObject}
            onDeleteClick={this.todoDelete}
            onToggle={this.todoToggle}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { todoCheck, todoDelete })(
  TodoListContainer
);
