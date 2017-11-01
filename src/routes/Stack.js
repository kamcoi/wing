import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import Drawer from "./Drawer";
import ProfileForm from "../components/RequestForm/ProfileForm";
import TravelForm from "../components/RequestForm/TravelForm";
import CostForm from "../components/RequestForm/CostForm";
import ApprovalForm from "../components/RequestForm/ApprovalForm";
import TaskStatus from "../components/TaskStatus";
import RequestStatus from "../components/RequestStatus";
import SubmitForm from "../components/SubmitForm";
import AddFriends from "../components/AddFriends/AddFriends";
import Comments from "../components/Comments";
import GuidelineHome from "../components/Guideline/GuidelineHome";
import GuidelineContent from "../components/Guideline/GuidelineContent";

const Stack = StackNavigator({
  Drawer: {
    screen: Drawer,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  ProfileForm: {
    screen: ProfileForm,
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
  },
  GuidelineHome: {
    screen: GuidelineHome,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  GuidelineContent: {
    screen: GuidelineContent,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  TravelForm: {
    screen: TravelForm,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

export default Stack;
