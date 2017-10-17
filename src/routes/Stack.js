import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import Main from "../components/Home/Main";
import RequestForm from "../components/RequestForm/RequestForm";
import PersonalForm from "../components/RequestForm/PersonalForm";
import AddFriends from "../components/AddFriends/AddFriends";

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
  },
  PersonalForm: {
    screen: PersonalForm,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  AddFriends: {
    screen: AddFriends,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

export default Stack;
