import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import AddView from './src/components/AddView';
import CounterContainer from './src/containers/CounterContainer';
import TaskFlatListContainer from './src/containers/TaskFlatListContainer';
import numberReducer from './src/reducers/NumberReducer';
import taskListReducer from './src/reducers/TaskListReducer';

const store = createStore(
  combineReducers({
    numberReduce: numberReducer,
    taskList: taskListReducer,
  }),
);

// // State
// let appState = {
//   number: 1,
//   histories: [],
//   errorMsg: '',
// };

// // Action

//   // bat buoc phai tra ve state
//   return state;
// };
// const add = {
//   type: 'ADD',
//   value: 1,
// };

// const sub = {
//   type: 'SUB',
//   value: 1,
// };

// const createAddAction = number => {
//   return {
//     type: 'ADD_TEST',
//     value: number,
//   };
// };

// // Reducer
// const numberReducer = (state = appState, action) => {
//   switch (action.type) {
//     case 'ADD':
//       // IMUTABLE STATE
//       const newValue = state.number + action.value;
//       state = {
//         ...state,
//         histories: [...state.histories, newValue],
//         number: newValue,
//       };
//       break;
//     case 'SUB':
//       const newVal = state.number - action.value;
//       state = {
//         ...state,
//         histories: [...state.histories, newVal],
//         number: newVal,
//       };
//       break;
//   }

//   // bat buoc phai tra ve state
//   return state;
// };

// const errorReducer = (state = appState, action) => {
//   switch (action.type) {
//     case 'LESS_THAN_ZERO':
//       state = {
//         ...state,
//         errorMsg: 'Number can not be less than zero',
//       };
//       return state;
//   }

//   // Store
//   const reducers = combineReducers({
//     number: numberReducer,
//     err: errorReducer,
//   });

//   const store = createStore(reducers);

//   // Test
//   store.subscribe(() => {
//     console.log('State updated', store.getState());
//   });

//   store.dispatch(add);
//   store.dispatch(createAddAction(5));
//   store.dispatch({type: 'LESS_THAN_ZERO'});

export default class Todo extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AddView onAddNewTask={this.onAddNewTask} />
          <CounterContainer />
          <TaskFlatListContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE',
  },
});
