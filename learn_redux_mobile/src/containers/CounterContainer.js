import React, {Component} from 'react';
// import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Counter from '../components/Counter';
import {addNumber, subNumber} from '../actions/CounterViewActions';

class CounterContainer extends Component {
  render() {
    const {addNumber, subNumber} = this.props;
    const {number} = this.props;

    return (
      <Counter value={number} addNumber={addNumber} subNumber={subNumber} />
    );
  }
}

export default connect(
  state => {
    console.log(state);
    return {
      a: state.numberReduce,
    };
  },
  dispatch => {
    return {
      addNumber: val => dispatch(addNumber(val)),
      subNumber: val => dispatch(subNumber(val)),
    };
  },
)(CounterContainer);
