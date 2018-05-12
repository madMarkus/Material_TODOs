import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';

import { taskSet, tasksDeleteByTodo } from '../actions/tasksActions';
import { todoDelete } from '../actions/todosActions';

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import TaskItem from './taskItem';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/ModeEdit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.text.secondary
  }
});
class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: props.expanded };
  }

  onExpandedChange = () => {
    this.setState(oldState => ({ expanded: !oldState.expanded }));
  };

  onEditClick = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onEdit();
  };

  onAddClick = () => {
    this.props.taskSet(Date.now(), {
      name: '',
      todoId: this.props.todoId,
      done: false,
      redacting: true
    });
  };

  onDeleteClick = () => {
    this.props.tasksDeleteByTodo(this.props.todoId);
    this.props.todoDelete(this.props.todoId);
  };

  render() {
    return (
      <ExpansionPanel
        style={{
          width: '100%',
          maxWidth: 600,
          margin: `${this.state.expanded ? '4px' : '0px'} 0px ${
            this.state.expanded ? '4px' : '0px'
          } 0px`
        }}
        expanded={this.state.expanded}
        onChange={this.onExpandedChange}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <div style={{ flexGrow: 1 }}>
              <Typography className={this.props.classes.heading}>
                {this.props.todoObject.header}
              </Typography>
              <Typography className={this.props.classes.secondaryHeading}>
                {this.state.expanded && this.props.todoObject.subheader}
              </Typography>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ padding: '0px 16px 8px 8px' }}>
          <List style={{ padding: 0, width: '100%' }}>
            {Object.keys(this.props.tasksList)
              .filter(
                key => this.props.tasksList[key].todoId === this.props.todoId
              )
              .map(key => <TaskItem key={key} taskId={key} />)}
          </List>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions style={{ padding: '8px 20px 8px 16px' }}>
          <IconButton
            onClick={this.onAddClick}
            style={{ width: 24, height: 24 }}
          >
            <AddIcon />
          </IconButton>
          <IconButton
            onClick={this.onEditClick}
            style={{ width: 24, height: 24, marginLeft: 16 }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={this.onDeleteClick}
            style={{ width: 24, height: 24, marginLeft: 16 }}
          >
            <DeleteIcon />
          </IconButton>
        </ExpansionPanelActions>
      </ExpansionPanel>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todoObject: state.todos[ownProps.todoId],
  tasksList: state.tasks
});

export default connect(mapStateToProps, {
  taskSet,
  tasksDeleteByTodo,
  todoDelete
})(withStyles(styles)(TodoCard));
