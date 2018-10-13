import React, { Component } from 'react';
import { Dimensions, StyleSheet, TextInput, Button, View } from 'react-native';

export default class AddAssignment extends Component {
    constructor() {
        super();
        this.state = {name: "", receivedGrade: 0, maxGrade: 100, weight: 0};
    }

    render() {
        return (
            <View style={styles.InpContainer}>
                <View>
                    <TextInput style={styles.inpAssignmentName} placeholder={'Name of Assignment'} />
                </View>
                <View style={styles.InpGrades}>
                    <TextInput style={styles.numericalGrade} placeholder={'Received Grade'} />
                    <TextInput style={styles.numericalGrade} placeholder={'Maximum Points'} />
                </View>
                <TextInput style={styles.inpAssignmentName} placeholder={'Weight'} />
                <Button title="Add Assignment Grade" onPress={f => f} color="blue" />
            </View>
        );
    }

    computeGrade() {
        this.state.finalGrade = 
            this.state.weight / 100 * this.state.receivedGrade / this.state.maxGrade;
    }
}

const styles = StyleSheet.create({
    InpContainer: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    InpGrades: {
        padding: 10,
        width: Dimensions.get("window").width,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    inpAssignmentName: {
        width: Dimensions.get("window").width / 1.1,
        height: 50,
        padding: 10,
        borderRadius: 20,
        borderWidth: 2,
        fontSize: 18
    },
    numericalGrade: {
        width: Dimensions.get("window").width / 2.3,
        height: 50,
        padding: 10,
        borderWidth: 2,
        borderRadius: 20,
        fontSize: 18
    }
});