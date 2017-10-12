import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import Main from "../components/Home/Main";
import RequestForm from "../components/RequestForm/RequestForm";

const Stack = StackNavigator({
  Home: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  RequestForm: {
    screen: RequestForm,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

export default Stack;
