import React, { Component } from 'react';
import { Dimensions, StyleSheet, TextInput, Button, View } from 'react-native';

const CourseForm = () => (
    <View style={styles.RowContainer}>
            <TextInput style={styles.InputCourse} placeholder="Name of Course" />
            <TextInput style={styles.InputHours} placeholder="Hours" />
    </View>
)

const styles = StyleSheet.create({
    RowContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly'
    },
    InputCourse: {
        padding: 5,
        borderWidth: 0.9,
        width: 200,
        height: 50
    },
    InputHours: {
        padding: 5,
        borderWidth: 0.9,
        width: 80,
        height: 50
    }
});

export default CourseForm