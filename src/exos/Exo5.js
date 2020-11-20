import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Square from '../components/Square';

class Exo5 extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Square text="Square 1" color="lightblue"/>
        <Square text="Square 2" color="lightgreen"/>
        <Square text="Square 3" color="red"/>
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
  }
})

export default Exo5;
