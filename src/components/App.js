import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';

import AppBar from './appBar';
import TodoCard from './todoCard';
import TodoAddChangeDialog from './todoAddChangeDialog';
import Button from 'material-ui/Button';

import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  mainContainer: {
    //height: 'calc(100% - 56px)',
    top: '56px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    overflow: 'auto'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoDialogOpen: false,
      todoDialogMode: '',
      currentTodo: null
    };
  }

  openTodoDialog = (mode, todoId) => {};

  render() {
    return (
      <div
        style={{
          maxHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <AppBar />
        <div className={this.props.classes.mainContainer}>
          {Object.keys(this.props.todosList).map((key, index) => (
            <TodoCard
              key={key}
              todoId={key}
              expanded={index === 0}
              onEdit={() =>
                this.setState({
                  todoDialogOpen: true,
                  todoDialogMode: 'change',
                  currentTodo: key
                })
              }
            />
          ))}
          <TodoAddChangeDialog
            open={this.state.todoDialogOpen}
            mode={this.state.todoDialogMode}
            todoId={this.state.currentTodo}
            onClose={() => this.setState({ todoDialogOpen: false })}
          />
        </div>
        <div className={this.props.classes.fab}>
          <Button
            variant="fab"
            color="secondary"
            onClick={() =>
              this.setState({
                todoDialogOpen: true,
                todoDialogMode: 'add',
                currentTodo: Date.now()
              })
            }
          >
            <AddIcon />
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todosList: state.todos
});

export default connect(mapStateToProps, null)(withStyles(styles)(App));
