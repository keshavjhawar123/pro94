import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import ChatScreen from '../screens/ChatScreen';
import CreateGroupsScreen  from '../screens/CreateGroupsScreen';




export const AppStackNavigator = createStackNavigator({
  ChatList : {
    screen : ChatScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  CreateGroups : {
    screen : CreateGroupsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'ChatList'
  }
);
