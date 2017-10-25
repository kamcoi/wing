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
            height: 60,
            backgroundColor: "#ffffff",
            paddingTop: 32,
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 16 }}>WING @TM</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 16,
            backgroundColor: "#ffffff",
            paddingVertical: 16
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

        <ScrollView style={{ flex: 1, backgroundColor: "#c4c4c4" }}>
          {displayedPage}
        </ScrollView>
        <ActionButton buttonColor="#333333">
          <ActionButton.Item
            buttonColor="#333333"
            title="New Task"
            onPress={() => navigate("RequestForm")}
          >
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
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
