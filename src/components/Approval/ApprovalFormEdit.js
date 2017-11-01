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

class ApprovalForm extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    const { approver } = this.props;
    let data = [
      {
        value: "AGM and below"
      },
      {
        value: "GLT Members"
      },
      {
        value: "Direct report to GLT Members"
      },
      {
        value: "CEO/President(Subsidiaries)"
      },
      {
        value: "GM/VP(Subsidiaries)"
      },
      {
        value: "AGM/AVP/Senior Manager & Below(Subsidiaries)"
      },
      {
        value: "CFO(Subsidiaries)"
      },
      {
        value: "Head of Finance/Business Contoller"
      }
    ];
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, backgroundColor: "#ffffff" }}
      >
        <NavigationBar
          style={{ borderColor: "#f27178", borderBottomWidth: 1 }}
          title={{ title: "New Request" }}
          leftButton={{
            title: "Back",
            handler: () => goBack()
          }}
        />

        <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Step 4: Approver Information
          </Text>
        </View>

        <FormBar />

        <ScrollView style={{ flex: 1 }}>
          <View
            style={{ paddingHorizontal: 16, paddingBottom: 16, paddingTop: 24 }}
          >
            <Text style={{ fontSize: 12, paddingBottom: 16 }}>
              Your Designation
            </Text>
            <View style={{ borderColor: "#c4c4c4" }}>
              <Dropdown
                placeholder="e.g. AGM and below"
                labelHeight={0}
                label=""
                data={data}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigate("AddFriends")}
            style={{ paddingHorizontal: 16, paddingBottom: 16 }}
          >
            <Text style={{ fontSize: 12, paddingVertical: 20 }}>
              Nominator 1
            </Text>
            <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
              <Text style={{ color: "grey", paddingBottom: 8 }}>
                Direct Report to a GLT Member
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate("AddFriends")}
            style={{ paddingHorizontal: 16, paddingBottom: 16 }}
          >
            <Text style={{ fontSize: 12, paddingVertical: 20 }}>
              Nominator 2
            </Text>
            <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
              <Text style={{ color: "grey", paddingBottom: 8 }}>
                Immediate Superior
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
                Head of Finance/Business Contollers
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
                GLT Member
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default ApprovalForm;

const FormBar = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-around",
      paddingTop: 8,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "#c4c4c4"
    }}
  >
    <View
      style={{
        flexDirection: "row",
        paddingBottom: 4,
        flex: 0.2,
        justifyContent: "center"
      }}
    >
      <View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
        <Icon name="user" size={24} color="#000000" />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontSize: 12 }}>One</Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: "row",
        paddingBottom: 4,
        flex: 0.2,
        justifyContent: "center"
      }}
    >
      <View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
        <Icon name="location" size={24} color="#000000" />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontSize: 12 }}>Two</Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: "row",
        paddingBottom: 4,
        flex: 0.2,
        justifyContent: "center"
      }}
    >
      <View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
        <Icon name="credit-card" size={24} color="#000000" />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontSize: 12 }}>Three</Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: "row",
        paddingBottom: 4,
        borderBottomWidth: 2,
        borderColor: "#f27178",
        flex: 0.2,
        justifyContent: "center"
      }}
    >
      <View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
        <Icon name="check" size={24} color="#f27178" />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontSize: 12, color: "#f27178" }}>Four</Text>
      </View>
    </View>
  </View>
);
