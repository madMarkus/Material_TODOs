import React, { Component } from 'react';
import { connect } from 'react-redux';

import { todoCheck, todoDelete } from '../actions/todosActions';

import AppBar from '../components/appBar';
import List from 'material-ui/List';
import TodoListItem from '../components/todoListItem';

class TodoListContainer extends Component {
  todoDelete = id => {
    this.props.todoDelete(id);
  };

  todoToggle = id => {
    this.props.todoCheck(id);
  };

  render() {
    return (
      <List
        style={{
          width: '100%',
          maxWidth: 600,
          padding: '4px 0px 0px 0px'
        }}
      >
        {this.props.todos.map(todoObject => (
          <TodoListItem
            key={todoObject.id}
            todo={todoObject}
            onDeleteClick={() => this.todoDelete(todoObject.id)}
            onToggle={() => this.todoToggle(todoObject.id)}
          />
        ))}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { todoCheck, todoDelete })(
  TodoListContainer
);
