import React, { Component, useState } from "react";
import { View, StyleSheet, Text, TextInput, SafeAreaView } from "react-native";
import Button from '../components/Button';

const Exo7 = () => {

    const [userName, setUserName] = useState('');

    return (
      <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Whats is your name ?</Text>
        <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          style={styles.input}
        />
        <Button text="Say hello" onPress={`Hello ${userName}`}/>
      </View>
    </SafeAreaView>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    marginTop: 20
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
    borderRadius: 5
  },
});

export default Exo7;