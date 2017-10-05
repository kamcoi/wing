import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import Requestor from "../components/Requestor/Requestor";
import RequestForm from "../components/RequestForm/RequestForm";

const Stack = StackNavigator({
  Requestor: {
    screen: Requestor,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  RequestForm: {
    screen: RequestForm
  }
});

export default Stack;
