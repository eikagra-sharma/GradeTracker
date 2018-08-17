import React, { Component } from 'react';
import { Dimensions, StyleSheet, TextInput, Button, View } from 'react-native';

const AssignmentInputForm = () => (
    <View style={styles.InpContainer}>
        <View style={styles.assignmentInp}>
            <TextInput style={styles.inpAssignmentName} placeholder={'Name of Assignment'} />
        </View>
        <View style={styles.InpGrades}>
            <TextInput style={styles.numericalGrade} placeholder={'Received Grade'} />
            <TextInput style={styles.numericalGrade} placeholder={'Maximum Points'} />
            <TextInput style={styles.numericalGrade} placeholder={'Weight'} />
        </View>
        <Button title="Add Assignment Grade" onPress={f => f} color="blue" />
    </View>
) 

const styles = StyleSheet.create({
    InpContainer: {
        flex: 0,
        borderWidth: 0.5,
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
        height: 40,
        padding: 10,
        borderRadius: 20,
        borderWidth: 2
    },
    numericalGrade: {
        width: Dimensions.get("window").width / 3.5,
        height: 40,
        padding: 10,
        borderWidth: 2,
        borderRadius: 15
    }
});

export default AssignmentInputForm