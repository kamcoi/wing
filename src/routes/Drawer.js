import React from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerNavigator } from "react-navigation";
import Tabs from "./Tabs";
import GuidelineHome from "../components/Guideline/GuidelineHome";
import ActivityLog from "../components/Activity";

class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: (
      <Image
        style={{ width: 24, height: 24 }}
        source={{
          uri:
            "http://img.freepik.com/free-icon/home-sketch_318-75515.jpg?size=338c&ext=jpg"
        }}
      />
    )
  };
}

const Drawer = DrawerNavigator({
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
});

export default Drawer;
