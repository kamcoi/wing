import React from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerNavigator } from "react-navigation";
import Tabs from "./Tabs";
import GuidelineHome from "../components/Guideline/GuidelineHome";
import ActivityLog from "../components/Activity";

import DrawerIcon from "react-native-vector-icons/Entypo";

class Home extends React.Component {
  static navigationOptions = {};
}

const Drawer = DrawerNavigator(
  {
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        drawerLabel: "Home"
      }
    },
    Guideline: {
      screen: GuidelineHome,
      navigationOptions: {
        drawerLabel: "Guideline"
      }
    },
    Log: {
      screen: ActivityLog,
      navigationOptions: {
        drawerLabel: "Activity Log"
      }
    }
  },
  {
    contentComponent: props => (
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
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{ paddingTop: 32, paddingLeft: 16 }}
              onPress={() => null}
            >
              <DrawerIcon name="home" size={32} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingTop: 32,
                paddingLeft: 16,
                justifyContent: "center"
              }}
              onPress={() => this.props.navigation.navigate("Guideline")}
            >
              <Text style={{ fontSize: 16 }}>Home</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{ paddingTop: 32, paddingLeft: 16 }}
              onPress={() => null}
            >
              <DrawerIcon name="list" size={32} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingTop: 32,
                paddingLeft: 16,
                justifyContent: "center"
              }}
              onPress={() => this.props.navigation.navigate("Guideline")}
            >
              <Text style={{ fontSize: 16 }}>Activity Log</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{ paddingTop: 32, paddingLeft: 16 }}
              onPress={() => null}
            >
              <DrawerIcon name="book" size={32} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingTop: 32,
                paddingLeft: 16,
                justifyContent: "center"
              }}
              onPress={() => this.props.navigation.navigate("Guideline")}
            >
              <Text style={{ fontSize: 16 }}>Guideline</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            paddingVertical: 16
          }}
        >
          <TouchableOpacity
            onPress={() => null}
            style={{ alignItems: "center" }}
          >
            <DrawerIcon name="log-out" size={24} color="#c4c4c4" />
            <Text style={{ paddingTop: 4, color: "#c4c4c4" }}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
);

export default Drawer;
