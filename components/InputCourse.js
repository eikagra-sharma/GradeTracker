import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default class AddCourse extends Component {
    constructor() {
        super();
        this.state = {name: "", hours: 0}
    }

    render() {
        return(
            <View>
                <View style={styles.RowContainer}>
                    <TextInput style={styles.InputCourse} placeholder=" Name of Course" onChangeText={(name) => this.setState({ name })} />
                    <TextInput style={styles.InputHours} placeholder=" Hours" onChangeText={(hours) => this.setState({ hours })} />
                </View>
                <Button title="Add Course" onPress={f => f} color="blue"></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    RowContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    InputCourse: {
        borderWidth: 2,
        width: 200,
        height: 50,
        borderRadius: 15,
        fontSize: 20
    },
    InputHours: {
        borderWidth: 2,
        width: 80,
        height: 50,
        borderRadius: 15,
        fontSize: 20,
        marginLeft: 20
    }
});