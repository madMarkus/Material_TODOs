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
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({});

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
  }
  onToggle = () => {
    this.props.taskSet(this.props.taskId, {
      ...this.props.taskObject,
      done: !this.props.taskObject.done
    });
  };

  onMoreVertClick = () => {};

  render() {
    return (
      <div style={{ width: '100%' }}>
        <ListItem key={this.props.taskId} dense button onClick={this.onToggle}>
          <ListItemText primary={this.props.taskObject.name} />
          <ListItemSecondaryAction>
            <Checkbox
              style={{ width: 24 }}
              checked={this.props.taskObject.done}
              disableRipple
              onClick={this.onToggle}
            />

            <IconButton>
              <MoreVertIcon />
            </IconButton>
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
