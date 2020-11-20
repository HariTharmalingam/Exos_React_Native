import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";

class Exo3 extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Button text="Say hello" onPress="hello"/>
        <Button text="Say goodbye" onPress="goodbye"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Exo3;
