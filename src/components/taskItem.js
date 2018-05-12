import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';

import { taskSet, taskDelete } from '../actions/tasksActions';

import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from 'material-ui/TextField';

const styles = theme => ({});

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.taskObject.name
    };
  }
  onToggle = () => {
    if (!this.props.taskObject.redacting) {
      this.props.taskSet(this.props.taskId, {
        ...this.props.taskObject,
        done: !this.props.taskObject.done
      });
    }
  };

  onEnter = e => {
    if (e.key === 'Enter') {
      this.props.taskSet(this.props.taskId, {
        ...this.props.taskObject,
        redacting: false,
        name: this.state.name
      });
    }
  };

  onDeleteClick = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.taskDelete(this.props.taskId);
  };

  render() {
    return (
      <div style={{ width: '100%' }}>
        <ListItem
          key={this.props.taskId}
          dense
          button
          onClick={this.onToggle}
          style={{ paddingRight: 72 }}
        >
          {this.props.taskObject.redacting ? (
            <TextField
              margin="none"
              error={this.state.name === ''}
              fullWidth
              label="Name"
              placeholder="Name"
              onChange={e =>
                this.setState({
                  name: e.target.value
                })
              }
              onKeyPress={e => this.onEnter(e)}
              value={this.state.name}
              autoFocus
            />
          ) : (
            <ListItemText primary={this.props.taskObject.name} />
          )}

          <ListItemSecondaryAction>
            <div>
              <Checkbox
                style={{ width: 24 }}
                checked={this.props.taskObject.done}
                disableRipple
                onClick={this.onToggle}
              />

              <IconButton
                onClick={this.onDeleteClick}
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

const mapStateToProps = (state, ownProps) => ({
  taskObject: state.tasks[ownProps.taskId]
});

export default connect(mapStateToProps, { taskSet, taskDelete })(
  withStyles(styles)(TaskItem)
);
