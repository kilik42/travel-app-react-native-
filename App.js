/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './components/Home';  
import Profile from './components/Profile';
import Liked from './components/Liked';
import Details from './components/Details';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      style: styles.tabBar,
      activeTintColor: colors.orange,
      inactiveTintColor: colors.gray,
      showLabel: false,
    }}
    
    >
      <Tab.Screen name="Home" component={Home} 
       options={{

        tabBarIcon: ({ color }) => (
          <Entypo name="home" size={24} color={color} />
        ),
      }}
      />
      <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" size={24} color={color} />
        ),
      }}
      />


      <Tab.Screen name="Liked" component={Liked} 

      options={{
      tabBarIcon: ({ color }) => (
        <Entypo name="heart" size={24} color={color} />
      )
      }}
      />
      {/* <Tab.Screen name="Details" component={Details} /> */}
    </Tab.Navigator>
  );  
}
const App = () => {

  // const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} 
        options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
  


});
export default App;
