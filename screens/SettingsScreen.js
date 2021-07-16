import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Header, Avatar, Icon } from "react-native-elements";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import firebase from "firebase";
import db from "../config";
import { RFValue } from "react-native-responsive-fontsize";

export default class SettingsScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      image: "#",
      name: "",
      docId: "",
    };
  }

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.uploadImage(uri, this.state.userId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };

  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    // Get the download URL
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ image: url });
      })
      .catch((error) => {
        this.setState({ image: "#" });
      });
  };

  getUserProfile() {
    db.collection("users")
      .where("email_id", "==", this.state.userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            name: doc.data().first_name + " " + doc.data().last_name,
            docId: doc.id,
            image: doc.data().image,
          });
        });
      });
  }

  componentDidMount() {
    this.fetchImage(this.state.userId);
    this.getUserProfile();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#32867d" }}>
        <View>
          <Header
            leftComponent={
              <Icon
                name="arrow-left"
                type="feather"
                color="#696969"
                onPress={() => this.props.navigation.goBack()}
              />
            }
            centerComponent={{
              text: "Settings",
              style: { color: "#90A5A9", fontSize: 20, fontWeight: "bold" },
            }}
            backgroundColor="#eaf8fe"
          />
        </View>
        {/* //profile Pic */}

        <View
          style={{
            flex: 0.5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#32867d",
          }}
        >
          <Avatar
            rounded
            source={{
              uri: this.state.image,
            }}
            size={"xlarge"}
            onPress={() => this.selectPicture()}
            showEditButton
          />

          <Text
            style={{
              fontWeight: "300",
              fontSize: RFValue(20),
              color: "#fff",
              padding: RFValue(10),
            }}
          >
            {this.state.name}
          </Text>
        </View>
        <View style={{ flex: 0.5 }}>
          <TouchableOpacity
            style={styles.toStyles}
            onPress={() => {
              this.props.navigation.navigate("SecurityScreen");
            }}
          >
            <Text style={styles.toText}>Security And Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toStyles}
            onPress={() => {
              // this.createGroups();
              this.props.navigation.navigate("AccountsScreen");
            }}
          >
            <Text style={styles.toText}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toStyles}
            onPress={() => {
              // this.createGroups();
              this.props.navigation.navigate("StorageScreen");
            }}
          >
            <Text style={styles.toText}>Storage</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.1 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "100%",
              height: "100%",
            }}
            onPress={() => {
              this.props.navigation.navigate("WelcomeScreen");
              firebase.auth().signOut();
            }}
          >
            <Icon
              name="logout"
              type="antdesign"
              size={RFValue(20)}
              iconStyle={{ paddingLeft: RFValue(10) }}
            />

            <Text
              style={{
                fontSize: RFValue(15),
                fontWeight: "bold",
                marginLeft: RFValue(30),
              }}
            >
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  toStyles: { height: RFValue(80), borderColor: "#000" },
  toText: { color: "white", fontSize: RFValue(25) },
});
