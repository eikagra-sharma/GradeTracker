import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import AssignmentInputForm from './components/InputAssignment'
import InputCourse from './components/InputCourse'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <InputCourse />
      </View>
    )
  }
}

AppRegistry.registerComponent('GradeTracker', () => App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  }
});