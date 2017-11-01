import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import Drawer from "./Drawer";
import ProfileForm from "../components/Profile/ProfileForm";
import ProfileFormEdit from "../components/Profile/ProfileFormEdit";
import TravelForm from "../components/Travel/TravelForm";
import TravelFormEdit from "../components/Travel/TravelFormEdit";
import CostForm from "../components/Cost/CostForm";
import CostFormEdit from "../components/Cost/CostFormEdit";
import ApprovalForm from "../components/Approval/ApprovalForm";
import ApprovalFormEdit from "../components/Approval/ApprovalFormEdit";
import TaskStatus from "../components/TaskStatus";
import RequestStatus from "../components/RequestStatus";
import SubmitForm from "../components/SubmitForm";
import AddFriends from "../components/AddFriends";
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
  ProfileFormEdit: {
    screen: ProfileFormEdit,
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
  CostFormEdit: {
    screen: CostFormEdit,
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
  ApprovalFormEdit: {
    screen: ApprovalFormEdit,
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
  },
  TravelFormEdit: {
    screen: TravelFormEdit,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

export default Stack;
