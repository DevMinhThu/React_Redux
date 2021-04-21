import React, {Component} from 'react';

import {connect} from 'react-redux';
import AddView from '../components/AddView';
import addTask from '../actions/AddViewActions';

class AddViewContainer extends Component {
  render() {
    const {onAddNewTask} = this.props.onAddNewTask;
    return <AddView onAddNewTask={onAddNewTask} />;
  }
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      onAddNewTask: name => dispatch(addTask(name)),
    };
  },
)(AddViewContainer);
