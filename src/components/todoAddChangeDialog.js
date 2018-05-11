import React from 'react';
import { connect } from 'react-redux';

import { todoSet, todoDelete } from '../actions/todosActions';

import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import TextField from 'material-ui/TextField';

class TodoAddChangeDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '',
      subheader: ''
    };
  }

  onEnter = e => {
    if (e.key === 'Enter') {
      // this.props.mode === "add"
      //   ? this.handleAddClick()
      //   : this.handleSaveClick();
    }
  };

  onAddSaveClick = () => {
    if (this.state.header !== '') {
      this.props.todoSet(this.props.todoId, this.state);
      this.props.onClose();
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open === true) {
      if (nextProps.mode !== 'add') {
        this.setState({ ...this.props.todos[nextProps.todoId] });
      } else {
        this.setState({
          header: '',
          subheader: ''
        });
      }
    }
  }

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.onClose}>
        <DialogTitle>
          {`${this.props.mode === 'add' ? 'Add' : 'Change'} TODO`}
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            error={this.state.header === ''}
            fullWidth
            label="Header"
            placeholder="Header"
            onChange={e =>
              this.setState({
                header: e.target.value
              })
            }
            onKeyPress={e => this.onEnter(e)}
            value={this.state.header}
            autoFocus
          />

          <TextField
            margin="normal"
            fullWidth
            label="Subheader"
            placeholder="Subheader"
            onChange={e =>
              this.setState({
                subheader: e.target.value
              })
            }
            onKeyPress={e => this.onEnter(e)}
            value={this.state.subheader}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.onAddSaveClick} color="primary">
            {this.props.mode === 'add' ? 'Add' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { todoSet, todoDelete })(
  TodoAddChangeDialog
);
