import * as React from 'react';
import { Button, View, Text, FlatList, StyleSheet, StatusBar, TouchableHighlight } from 'react-native';

export default function Home ({navigation}) {

    const DATA = [
        {
          title: 'Exo1',
        },
        {
          title: 'Exo2',
        },
        {
          title: 'Exo3',
        },
        {
          title: 'Exo4',
        },
        {
          title: 'Exo5',
        },
        {
          title: 'Exo6',
        },
        {
          title: 'Exo7',
        },
        {
          title: 'Exo8',
        },
        {
          title: 'Exo9',
        },
        {
          title: 'Exo10',
        },
        {
          title: 'Exo11',
        },
        {
          title: 'Exo12',
        },
      ];

      return (
        <View style={styles.container}>
          <FlatList
          data={DATA}
          renderItem={({ item, separators }) => (
            <TouchableHighlight
            key={item.key}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
                <View style={styles.item}>
                    <Text style={styles.title} onPress={() => navigation.navigate(item.title)}>{item.title}</Text>
                </View>
            </TouchableHighlight>
          )}
          />
        </View>
      );
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      borderBottomColor: "#000",
      borderTopColor: "#000",
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    title: {
      fontSize: 32,
    },
  });