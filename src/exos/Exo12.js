import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


class Exo12 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    console.log(`You've pressed the button ${this.state.counter} times`);
  }

  componentDidUpdate() {
    console.log(`You've pressed the button ${this.state.counter} times`);
  }


  componentWillUnmount() {
    this.setState({
      counter: 0
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.counter}>You've pressed the button : {this.state.counter} times</Text>
        <Button style={styles.button} onPress={() => this.setState({ counter: this.state.counter + 1})} title='Press me'/>      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counter: {
    margin: 10,
    fontSize: 16,
  },
  button: {
      color: "blue",
      backgroundColor: "#F5FCFF"
  }
});

export default Exo12;
