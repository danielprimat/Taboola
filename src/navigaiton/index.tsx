import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import * as React from 'react';
import Home from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import {createStackNavigator} from '@react-navigation/stack';
import SearchResults from '../screens/SearchResults';
import {useColorScheme} from 'react-native';

const Tab = createBottomTabNavigator();

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  SearchResults: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SearchResults" component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
