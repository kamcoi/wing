import React from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";
import Request from "../components/RequestHome";
import Task from "../components/TaskHome";
import { Icon } from "react-native-elements";

const navOps = iconName => ({ navigation }) => ({
  tabBarIcon: ({ tintColor }) => (
    <Icon name={iconName} size={24} color={tintColor} type="ionicon" />
  )
});

const Tabs = TabNavigator(
  {
    Request: {
      screen: Request,
      navigationOptions: navOps("md-clipboard")
    },
    Task: {
      screen: Task,
      navigationOptions: navOps("md-paper-plane")
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: TabBarBottom,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: "white"
      },
      activeTintColor: "#f27178",
      showLabel: false
    }
  }
);

export default Tabs;
