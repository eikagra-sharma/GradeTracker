import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Alert, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Assignment extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        hours: PropTypes.number.isRequired
    }
    static navigate  = this.props.navigation;

    constructor() {
        super();
        this.state = {name: "", hours: 0, grade: 0}
    }

    _showAssignments() {
        // fixme: navigate('')
        Alert.alert('You tapped the button!')
    }

    render() {
        return(
            <TouchableHighlight style={styles.button} onPress={this._showAssignments} underlayColor="white">
                <View style={styles.assignment}>
                    <Text style={styles.textStyle}>Class Name: {this.props.name}</Text>
                    <Text style={styles.textStyle}>Credit Hours: {this.props.hours}</Text>
                    <Text style={styles.textStyle}>Grade: {this.state.grade}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    assignment: {
        width: "100%",
        height: 80,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 15,
        color: "white"
    },
    button: {
        backgroundColor: "maroon"
    }
});