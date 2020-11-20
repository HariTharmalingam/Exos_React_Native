import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

class Square extends React.Component {
    render() {
        return (
            <View style={styles.square}>
                <Text>Hello World !</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    square: {
      height: 100,
      width: 100,
      backgroundColor: 'lightblue',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
export default Square