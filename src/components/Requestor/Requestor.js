import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { Tile } from "react-native-elements";

export default class Requestor extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 30,
              color: "white",
              fontFamily: "sans-serif-thin"
            }}
          >
            What do you want to do?
          </Text>
        </View>
        <TouchableOpacity
          style={styles.viewTop}
          onPress={() => navigate("RequestForm")}
        >
          <Text
            style={{
              fontFamily: "sans-serif-thin"
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewBottom}>
          <Text
            style={{
              fontFamily: "sans-serif-thin"
            }}
          >
            Approve
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#73D6F7"
  },
  header: {
    flex: 0.2,
    marginBottom: 25
  },
  viewTop: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#F5FCFF",
    marginBottom: 25,
    borderRadius: 20
  },
  viewBottom: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#F5FCFF",
    borderRadius: 20
  }
});
