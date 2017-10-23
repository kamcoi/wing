import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import Main from "../components/Home/Main";
import RequestForm from "../components/RequestForm/RequestForm";
import TravelForm from "../components/RequestForm/TravelForm";
import CostForm from "../components/RequestForm/CostForm";
import ApprovalForm from "../components/RequestForm/ApprovalForm";
import TaskForm from "../components/Task/TaskForm";
import SubmitForm from "../components/RequestForm/SubmitForm";
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
  AddFriends: {
    screen: AddFriends,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  TravelForm: {
    screen: TravelForm,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  CostForm: {
    screen: CostForm,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  ApprovalForm: {
    screen: ApprovalForm,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  SubmitForm: {
    screen: SubmitForm,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  TaskForm: {
    screen: TaskForm,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

export default Stack;
