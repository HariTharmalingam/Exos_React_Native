import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
export default function Counter(props) {
    return (
        <>
        <Text style={styles.counter}>You've pressed the button : {props.counter} times</Text>
        <Button style={styles.button} onPress={props.handleOnClick} title='Press me'/>
        </>
    );
}

const styles = StyleSheet.create({
    counter: {
        margin: 10,
        fontSize: 16,
    },
    button: {
        color: "blue",
        backgroundColor: "#F5FCFF"
    }

});