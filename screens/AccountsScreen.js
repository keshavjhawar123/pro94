import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

export default class SecurityScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return <Text>hello world</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 100,
    width: "80%",
    backgroundColor: "black",
  },
});
