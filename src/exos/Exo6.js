import React, { Component } from "react";
import { Scrollview, StyleSheet } from "react-native";
import Square from '../components/Square';

class Exo6 extends Component {
  render() {
    return(

      <Scrollview style={styles.container}>
        <Square text="Square 1" color="lightblue"/>
        <Square text="Square 1" color="lightblue"/>
        <Square text="Square 1" color="lightblue"/>
        <Square text="Square 1" color="lightblue"/>
        <Square text="Square 1" color="lightblue"/>
        <Square text="Square 1" color="lightblue"/>
        <Square text="Square 1" color="lightblue"/>
        <Square text="Square 1" color="lightblue"/>
        <Square text="Square 1" color="lightblue"/>
        <Square text="Square 1" color="lightblue"/>
      </Scrollview>
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

export default Exo6;
