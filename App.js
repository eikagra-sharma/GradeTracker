import React, { Component } from 'react';
import { Platform, AppRegistry, StyleSheet, View } from 'react-native';
import AddAssignment from './components/InputAssignment'
import AddCourse from './components/InputCourse'
import Course from './components/StoredCourses'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.container}>
          <Course name="CSCE 315" hours={3} />
          <Course name="CSCE 606" hours={4} />
        </View>
        <View style={styles.addCourse}>
          <AddCourse></AddCourse>
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('GradeTracker', () => App)

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    marginTop: 20
  },
  addCourse: {
    position:'absolute',
    bottom: 0,
    alignSelf: 'center'
  }
});