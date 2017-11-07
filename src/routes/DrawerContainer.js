import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import DrawerIcon from "react-native-vector-icons/Entypo";

class DrawerContainer extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginTop: 40,
            marginHorizontal: 16,
            paddingVertical: 16,
            backgroundColor: "red"
          }}
        >
          <Text>Logo</Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#c4c4c4",
            marginHorizontal: 16,
            paddingVertical: 24,
            alignItems: "center"
          }}
        >
          <Text style={{ alignText: "center", paddingBottom: 4 }}>
            Mohammad Hafiz bin Burhan
          </Text>
          <Text>Group Digital Centre</Text>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ paddingTop: 32, paddingLeft: 16, flexDirection: "row" }}
            onPress={() => navigate("Tabs")}
          >
            <View style={{ justifyContent: "center" }}>
              <DrawerIcon name="home" size={32} color="#000000" />
            </View>
            <View style={{ justifyContent: "center", paddingLeft: 16 }}>
              <Text style={{ fontSize: 16 }}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ paddingTop: 32, paddingLeft: 16, flexDirection: "row" }}
            onPress={() => navigate("ActivityLog")}
          >
            <View style={{ justifyContent: "center" }}>
              <DrawerIcon name="list" size={32} color="#000000" />
            </View>
            <View style={{ justifyContent: "center", paddingLeft: 16 }}>
              <Text style={{ fontSize: 16 }}>Activity Log</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ paddingTop: 32, paddingLeft: 16, flexDirection: "row" }}
            onPress={() => navigate("GuidelineHome")}
          >
            <View style={{ justifyContent: "center" }}>
              <DrawerIcon name="book" size={32} color="#000000" />
            </View>
            <View style={{ justifyContent: "center", paddingLeft: 16 }}>
              <Text style={{ fontSize: 16 }}>Guideline</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "center",
            paddingVertical: 16
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Log Out Wing?", "We will miss you baby", [
                {
                  text: "No"
                },
                {
                  text: "Yes"
                }
              ])}
            style={{ alignItems: "center" }}
          >
            <DrawerIcon name="log-out" size={24} color="#c4c4c4" />
            <Text style={{ paddingTop: 4, color: "#c4c4c4" }}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DrawerContainer;
