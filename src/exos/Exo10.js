import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button"

class Exo10 extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Button text="Say hello"/>
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

export default Exo10;