import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";

export default class ChatScreen extends Component {
  createGroups = () => {
    console.log("create groups method");
    this.props.navigation.navigate("CreateGroups");
  };
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: "Chat Screen", style: { color: "#fff" } }}
          backgroundColor="red" //"#fff8fe"
        />
        <View style={styles.settingsView}>
          <TouchableOpacity
            style={styles.settingsTO}
            onPress={() => {
              this.props.navigation.navigate("SettingsScreen");
            }}
          >
            {/* <Text>Settings</Text> */}
            <Icon name="settings" type="fontawesome5" />
          </TouchableOpacity>
        </View>
        <View style={styles.groupsView}>
          <TouchableOpacity
            style={styles.groupsTO}
            onPress={() => {
              this.createGroups();
            }}
          >
            <Text>Create Groups</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  settingsView: {
    // flex: 0.1,
    width: 100,
    height: 50,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  settingsTO: {
    width: 100,
    height: 50,
    backgroundColor: "#42f5ad",
    borderRadius: 100,
  },
  groupsView: {
    // flex: 0.1,
    width: 100,
    height: 50,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  groupsTO: {
    width: 100,
    height: 50,
    backgroundColor: "#42f5ad",
    borderRadius: 100,
  },
});
