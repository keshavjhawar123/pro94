import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import ChatScreen from "../screens/ChatScreen";
import CreateGroupsScreen from "../screens/CreateGroupsScreen";
import SecurityScreen from "../screens/SecurityScreen";
import AccountsScreen from "../screens/AccountsScreen";
import StorageScreen from "../screens/StorageScreen";
import SettingsScreen from "../screens/SettingsScreen";

export const AppStackNavigator = createStackNavigator(
  {
    ChatList: {
      screen: ChatScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    CreateGroups: {
      screen: CreateGroupsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SecurityScreen: {
      screen: SecurityScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AccountsScreen: {
      screen: AccountsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    StorageScreen: {
      screen: StorageScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "ChatList",
  }
);
