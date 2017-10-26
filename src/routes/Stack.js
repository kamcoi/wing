import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import Drawer from "./Drawer";
import RequestForm from "../components/RequestForm/RequestForm";
import TravelForm from "../components/RequestForm/TravelForm";
import CostForm from "../components/RequestForm/CostForm";
import ApprovalForm from "../components/RequestForm/ApprovalForm";
import TaskForm from "../components/Task/TaskForm";
import TaskStatus from "../components/TaskStatus/TaskStatus";
import RequestStatus from "../components/RequestStatus/RequestStatus";
import SubmitForm from "../components/SubmitForm/SubmitForm";
import AddFriends from "../components/AddFriends/AddFriends";
import Comments from "../components/Comments/Comments";

const Stack = StackNavigator({
  Drawer: {
    screen: Drawer,
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
  },
  Comments: {
    screen: Comments,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  TaskStatus: {
    screen: TaskStatus,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  RequestStatus: {
    screen: RequestStatus,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

export default Stack;
