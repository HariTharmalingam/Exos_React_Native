import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import  Home  from './src/exos/Home';
import  Exo1  from './src/exos/Exo1';
import  Exo2  from './src/exos/Exo2';
import  Exo3  from './src/exos/Exo3';
import  Exo4  from './src/exos/Exo4';
import  Exo5  from './src/exos/Exo5';
import  Exo6  from './src/exos/Exo6';
import  Exo7  from './src/exos/Exo7';
import  Exo8  from './src/exos/Exo8';
import  Exo9  from './src/exos/Exo9';
import  Exo10  from './src/exos/Exo10';
import  Exo11  from './src/exos/Exo11';
import  Exo12  from './src/exos/Exo12';

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
        <Stack.Screen name="Exo6" component={Exo6} />
        <Stack.Screen name="Exo7" component={Exo7} />
        <Stack.Screen name="Exo8" component={Exo8} />
        <Stack.Screen name="Exo9" component={Exo9} />
        <Stack.Screen name="Exo10" component={Exo10} />
        <Stack.Screen name="Exo11" component={Exo11} />
        <Stack.Screen name="Exo12" component={Exo12} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
