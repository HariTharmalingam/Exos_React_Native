import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Square from '../components/Square';

class Exo5 extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={[styles.square, {backgroundColor: 'red'}]}>
          <Text>Square 1</Text>
        </View>

        <View style={[styles.square, {backgroundColor: 'blue'}]}>
          <Text>Square 2</Text>
        </View>

        <View style={[styles.square, {backgroundColor: 'green'}]}>
          <Text>Square 3</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  square: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})



export default Exo5;