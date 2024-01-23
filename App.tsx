import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TvRemote from './src/components/TvRemote';
import DiscoveryScreen from './src/components/DiscoveryScreen'; // Adjust the path as necessary

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="XBR-65X930D" component={TvRemote} />
        <Stack.Screen name="DiscoveryScreen" component={DiscoveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
