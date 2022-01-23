import React from "react";
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {SignupScreen} from './components/Signup';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={SignupScreen}></Stack.Screen>
        <Stack.Screen name="Test" component={() => (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello World!</Text>
          </View>
        )} options={{title : "Testing"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}