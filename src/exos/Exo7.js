import React, { Component } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

class Exo7 extends Component {
  render() {

    const [value, onChangeText] = React.useState('');
    
    return(
      <View>
        <Text>What is your name ?</Text>
        <TextInput />
      </View>
    )
  }
}

export default Exo7;
