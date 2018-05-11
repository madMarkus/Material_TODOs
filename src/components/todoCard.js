import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import TaskItem from './taskItem';
import List from 'material-ui/List';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/ModeEdit';

const styles = theme => ({
  root: {
    width: '100%'
  },
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

  render() {
    return (
      <ExpansionPanel
        style={{
          width: '100%',
          margin: `0px 0px ${this.state.expanded ? '8px' : '0px'} 0px`
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
            {this.state.expanded && (
              <IconButton
                onClick={this.onEditClick}
                style={{ width: 24, height: 24 }}
              >
                <EditIcon />
              </IconButton>
            )}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ padding: '0px 0px 8px 8px' }}>
          <List style={{ padding: 0, width: '100%' }}>
            {Object.keys(this.props.tasksList)
              .filter(
                key => this.props.tasksList[key].todoId === this.props.todoId
              )
              .map(key => <TaskItem key={key} taskId={key} />)}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todoObject: state.todos[ownProps.todoId],
  tasksList: state.tasks
});

export default connect(mapStateToProps, null)(withStyles(styles)(TodoCard));
