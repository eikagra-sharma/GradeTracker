import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import AssignmentInputForm from './components/InputAssignment'
import InputCourse from './components/InputCourse'
import Assignment from './components/StoredCourses'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Assignment name="CSCE 315" hours={3}/>
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