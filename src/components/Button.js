import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert} from "react-native";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  showAlert = () => 
    Alert.alert(
      "Alert",
      this.onPress
    );

  render() {
    const { text } = this.props;
    const { onPress } = this.props;

    return (
      <TouchableOpacity style={styles.button} onPress={() => {this.showAlert()}}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF00BA',
    padding: 10,
    marginVertical: 20,
    borderRadius: 10
  },
  text: {
      color: "#fff",
  }
})

export default Button;