import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import ChatScreen from './screens/ChatScreen';
import {AppStackNavigator} from './components/AppStackNavigator';
export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  ChatScreen:{screen: ChatScreen},
  AppStackNavigator:{screen: AppStackNavigator}

})

const AppContainer =  createAppContainer(switchNavigator);

