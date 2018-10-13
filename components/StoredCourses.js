import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Alert, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default class Course extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        hours: PropTypes.number.isRequired
    }
    //static navigate  = this.props.navigation;

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
            <TouchableHighlight style={styles.button} onPress={this._showAssignments} underlayColor="skyblue">
                <View style={styles.assignment}>
                    <Text style={styles.courseNameStyle}>{this.props.name}</Text>
                    <Text style={styles.textStyle}>
                        Grade: {this.state.grade}
                        {"\t"}
                        Credit Hours: {this.props.hours}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    assignment: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    textStyle: {
        fontSize: 15,
        color: "white"
    },
    button: {
        width: "95%",
        height: 80,
        borderWidth: 1,
        backgroundColor: "maroon",
        alignSelf: 'center',
        marginBottom: 10
    },
    courseNameStyle: {
        fontSize: 20,
        color: "white"
    }
});