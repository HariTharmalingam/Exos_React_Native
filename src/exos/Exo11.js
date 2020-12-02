import React from "react";
import { View, StyleSheet } from "react-native";
import Counter from "../components/Counter"

class Exo11 extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({
      counter: this.state.counter + 1
    });
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Counter { ...this.state } handleOnClick={this.handleOnClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Exo11;