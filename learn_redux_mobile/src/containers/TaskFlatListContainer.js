import React, {Component} from 'react';
import {connect} from 'react-redux';
import TaskFlatList from '../components/TaskFlatList';
import {finishTask, deleteTask} from '../actions/TaskFlastlistActions';

class TaskFlatListContainer extends Component {
  render() {
    console.log(this.props);
    const {data} = this.props.listData;
    const {onFinishedItem, onDeleteItem} = this.props;

    return (
      <TaskFlatList
        dataList={data}
        onFinishedItem={onFinishedItem}
        onDeleteItem={onDeleteItem}
      />
    );
  }
}

export default connect(
  state => {
    return {
      listData: state.taskList,
    };
  },
  dispatch => {
    return {
      onFinishedItem: index => dispatch(finishTask(index)),
      onDeleteItem: index => dispatch(deleteTask(index)),
    };
  },
)(TaskFlatListContainer);
