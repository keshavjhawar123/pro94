import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default class ChatScreen extends Component {

    createGroups=()=>{
      console.log("create groups method")
      this.props.navigation.navigate("CreateGroups")
    }
    render(){
      return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{this.createGroups() }}>
                <Text>Create Groups</Text>
            </TouchableOpacity>
        </View>
      );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
