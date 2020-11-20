import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import  Home  from './src/exos/Home';
import  Exo1  from './src/exos/Exo1';
import  Exo2  from './src/exos/Exo2';
import  Exo3  from './src/exos/Exo3';
import  Exo4  from './src/exos/Exo4';
import  Exo5  from './src/exos/Exo5';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Exo1" component={Exo1} />
        <Stack.Screen name="Exo2" component={Exo2} />
        <Stack.Screen name="Exo3" component={Exo3} />
        <Stack.Screen name="Exo4" component={Exo4} />
        <Stack.Screen name="Exo5" component={Exo5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
