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
  let nominator1Name;
  let nominator2Name;
  let endorserName;
  let approverName;
  switch (page) {
    case "AGM and below":
      screen = "AddFriends";
      nominator1Name = "Direct Report to a GLT Member";
      nominator2Name = "Immediate Superior";
      endorserName = "Head of Finance/ Business Controllers";
      approverName = "GLT Member";
      break;
    case "GLT Members":
      screen = "AddFriends";
      nominator1Name = "GLT Member";
      nominator2Name = "None";
      endorserName = "GCFO";
      approverName = "GCEO";
      break;
    case "Direct report to GLT Members":
      screen = "AddFriends";
      nominator1Name = "GLT Member";
      nominator2Name = "None";
      endorserName = "Head of Finance/ Business Controllers";
      approverName = "(VP: GCEO), (GM and Below: GCFO)";
      break;
    case "Head of Finance/ Business Controllers":
      screen = "AddFriends";
      nominator1Name = "GLT Member";
      nominator2Name = "Immediate Superior";
      endorserName = "VP FCD";
      approverName = "GCFO";
      break;
    case "CFO(Subsidiaries)":
      screen = "AddFriends";
      nominator1Name = "Immediate Superior (a GLT Member)";
      nominator2Name = "None";
      endorserName = "GCFO";
      approverName = "GCEO";
      break;
    case "GM/VP(Subsidiaries)":
      screen = "AddFriends";
      nominator1Name = "CEO/ President";
      nominator2Name = "None";
      endorserName = "Subsidiary's CFO";
      approverName = "GLT Member";
      break;
    case "AGM/ AVP/ Senior Manager & Below(Subsidiaries)":
      screen = "AddFriends";
      nominator1Name = "CEO/ President";
      nominator2Name = "Immediate Superior";
      endorserName = "Subsidiary's CFO";
      approverName = "GLT Member";
      break;
    case "CFO(Subsidiaries)":
      screen = "AddFriends";
      nominator1Name = "CEO/ President";
      nominator2Name = "None";
      endorserName = "VP FCD";
      approverName = "GCFO";
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
        <Text style={{ fontSize: 12, paddingVertical: 20 }}>Nominator 1</Text>
        <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
          <Text style={{ color: "grey", paddingBottom: 8 }}>
            {nominator1Name}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigate(screen)}
        style={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        <Text style={{ fontSize: 12, paddingVertical: 20 }}>Nominator 2</Text>
        <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
          <Text style={{ color: "grey", paddingBottom: 8 }}>
            {nominator2Name}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigate("AddFriends")}
        style={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        <Text style={{ fontSize: 12, paddingVertical: 20 }}>Endorser</Text>
        <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
          <Text style={{ color: "grey", paddingBottom: 8 }}>
            {endorserName}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate("AddFriends")}
        style={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        <Text style={{ fontSize: 12, paddingVertical: 20 }}>Approver</Text>
        <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
          <Text style={{ color: "grey", paddingBottom: 8 }}>
            {approverName}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DisplayedPage;
