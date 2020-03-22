import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from './views';

const Stack = createStackNavigator();

export default function App() {
  return (
    // Navigation example: https://reactnative.dev/docs/navigation.html#usage
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
