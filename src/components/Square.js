import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

class Square extends React.Component {
    render() {
        return (
            <View style={[styles.square, {backgroundColor: this.props.color}]}>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    square: {
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10
    }
  })
export default Square