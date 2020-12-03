import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert} from "react-native";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  Alert() {
    const { onPress } = this.props;
    Alert.alert(
      "Alert",
      onPress
    );
  }

  render() {
    const { text } = this.props;

    return (
      <TouchableOpacity style={styles.button} onPress={() => this.Alert()}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FD6C9E',
    padding: 10,
    marginVertical: 20,
    borderRadius: 10
  },
  text: {
      color: "#fff",
  }
})

export default Button;