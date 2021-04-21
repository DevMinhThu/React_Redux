import React, {Component} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

export default class Counter extends Component {
  render() {
    const {addNumber, subNumber, value} = this.props;

    return (
      <View style={styles.counterView}>
        <Button onPress={() => subNumber(value - 1)} title="Sub" />
        <Text>Counter: {value}</Text>
        <Button onPress={() => addNumber(value + 1)} title="Add" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counterView: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
