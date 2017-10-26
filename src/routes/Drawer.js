import React from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerNavigator } from "react-navigation";
import Main from "../components/Home/Main";

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
  Home: {
    screen: Main
  }
});

export default Drawer;
