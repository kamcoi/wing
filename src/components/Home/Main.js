import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

import Request from "./Request";
import Task from "./Task";

const titleConfig = {
  title: "Home"
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "request" };
  }
  render() {
    const { navigate } = this.props.navigation;
    let displayedPage;
    switch (this.state.page) {
      case "request":
        displayedPage = <Request navigation={this.props.navigation} />;
        break;
      case "task":
        displayedPage = <Task navigation={this.props.navigation} />;
        break;
      default:
        displayedPage = <Request navigation={this.props.navigation} />;
    }
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 32,
            paddingBottom: 8
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            style={{ flex: 0.15, alignItems: "center" }}
          >
            <Icon name="ios-menu" size={24} color="#000000" />
          </TouchableOpacity>
          <View style={{ flex: 0.15, alignItems: "center" }}>
            <Text style={{ fontSize: 16 }}>Home</Text>
          </View>
          <View style={{ flex: 0.15 }}>
            <Text />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 16,
            backgroundColor: "#ffffff",
            paddingVertical: 8
          }}
        >
          <TouchableOpacity
            onPress={() => this.setState({ page: "request" })}
            style={[
              {
                width: "50%",
                paddingVertical: 8,
                alignItems: "center",
                borderWidth: 1,
                borderTopLeftRadius: 100,
                borderBottomLeftRadius: 100
              },
              this.state.page === "request" && { backgroundColor: "black" }
            ]}
          >
            <Text
              style={[
                { fontWeight: "bold" },
                this.state.page === "request" && { color: "#ffffff" }
              ]}
            >
              My Request
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ page: "task" })}
            style={[
              {
                width: "50%",
                paddingVertical: 8,
                alignItems: "center",
                borderWidth: 1,
                borderLeftWidth: 0,
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100
              },
              this.state.page === "task" && { backgroundColor: "black" }
            ]}
          >
            <Text
              style={[
                { fontWeight: "bold" },
                this.state.page === "task" && { color: "#ffffff" }
              ]}
            >
              My Task
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1 }}>{displayedPage}</ScrollView>
        <ActionButton
          buttonColor="#333333"
          onPress={() => navigate("RequestForm")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  }
});

export default Main;
