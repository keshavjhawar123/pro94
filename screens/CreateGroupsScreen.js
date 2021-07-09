import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  CheckBox,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config";
import firebase from "firebase";
export default class CreateGroupsScreen extends Component {
  constructor() {
    super();
    this.state = {
      groupName: "",
      usersList: [],
      selectedUsers: [],
      list: [],
      isSelected: null,
    };
    this.requestRef = null;
  }
  getAllUsers = () => {
    this.requestRef = db.collection("users").onSnapshot((snapshot) => {
      var usersList = snapshot.docs.map((doc) => doc.data());
      this.setState({
        usersList: usersList,
      });
    });
  };
  componentDidMount() {
    this.getAllUsers();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.first_name}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        leftElement={
          <CheckBox
            value={item.selected}
            onValueChange={() => {
              this.onCheck(item, i);
              this.setState({
                selectedUsers: [...this.state.selectedUsers, item.email_id],
              });
            }}
          />
        }
        bottomDivider
      />
    );
  };

  onCheck = (item, index) => {
    const newdata = this.state.usersList.map((newItem) => {
      console.log(newItem.email_id, newItem.selected);

      if (newItem.email_id == item.email_id) {
        return {
          ...newItem,
          selected: true,
        };
      } else if (newItem.selected === true) {
        return {
          ...newItem,
          selected: true,
        };
      } else {
        return {
          ...newItem,
          selected: false,
        };
      }
    });

    this.setState({ usersList: newdata });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, width: "100%", marginTop: 100 }}>
          <Text>Group Name</Text>
          <TextInput
            style={styles.formInput}
            placeholder={"Group Name"}
            maxLength={12}
            onChangeText={(text) => {
              this.setState({
                groupName: text,
              });
            }}
          />

          {this.state.usersList.length === 0 ? (
            <View style={{ flex: 1, width: "100%" }}>
              <Text style={{ fontSize: 20 }}>List Of All Users</Text>
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 20, color: "#2200cc" }}>Select </Text>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.usersList}
                renderItem={this.renderItem}
              />

              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => this.writeToDb()}
              >
                <Text style={styles.registerButtonText}>submit</Text>
              </TouchableOpacity>
            </View>
          )}
          <Text>Selected : {this.state.selectedUsers.length}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff",
  },
  registerButton: {
    width: "75%",
    height: RFValue(50),
    marginTop: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: RFValue(3),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(10),
  },
  label: {
    fontSize: RFValue(13),
    color: "#717D7E",
    fontWeight: "bold",
    paddingLeft: RFValue(10),
    marginLeft: RFValue(20),
  },
  formInput: {
    width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "grey",
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14),
  },
  checkbox: {
    alignSelf: "center",
  },
});
