import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

class Exo9 extends Component {
    constructor(props) {
        super(props)
        this.state = {
          uses: null
        }
    }
    
    componentDidMount() {
    fetch('https://randomuser.me/api/?results=100&inc=name')
    .then((response) => response.json())
    .then(json => {
        this.setState({users: json})
    })
    .catch(err => {
        console.log(err)
    })}

      render() {
        const { users } = this.state;
        if(users) {
          return(
            <View style={styles.container}>
            <FlatList
              keyExtractor={item => item.name.title + item.name.first + item.name.last}
              data={users.results}
              renderItem={( {item} ) => (
                <View style={styles.card}>
                  <Text>{item.name.title} {item.name.first} {item.name.last}</Text>
                </View>
              )}
            />
            </View>
          )
        } else {
          return null;
        }
      }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 10,
    borderBottomWidth: 1
  }
})


export default Exo9;