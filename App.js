import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text} from 'react-native'

import LoginScreen from './screens/Loginscreen'
import DonateScreen from './screens/DonateScreen'
import NeedScreen from './screens/NeedScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Donate" component={DonateScreen} />
        <Stack.Screen name="Need" component={NeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
