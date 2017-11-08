import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import Next from "react-native-vector-icons/Entypo";
import { Dropdown } from "react-native-material-dropdown";
import Icon from "react-native-vector-icons/EvilIcons";
import NavigationBar from "react-native-navbar";

const DisplayedPage = ({ navigate, page }) => {
  let screen;
  let firstText;
  let secondText;

  switch (page) {
    case "AGM and below":
      screen = "AddFriends";
      firstText = "Hello";
      secondText = "2nd";
      break;
    default:
      break;
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigate(screen)}
        style={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        <Text style={{ fontSize: 12, paddingVertical: 20 }}>Nominator</Text>
        <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
          <Text style={{ color: "grey", paddingBottom: 8 }}>{firstText}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate("AddFriends")}
        style={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        <Text style={{ fontSize: 12, paddingVertical: 20 }}>Endorser</Text>
        <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
          <Text style={{ color: "grey", paddingBottom: 8 }}>{secondText}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate("AddFriends")}
        style={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        <Text style={{ fontSize: 12, paddingVertical: 20 }}>Approver</Text>
        <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
          <Text style={{ color: "grey", paddingBottom: 8 }}>GLT Member</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DisplayedPage;
