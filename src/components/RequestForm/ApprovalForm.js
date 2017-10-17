import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Next from "react-native-vector-icons/Entypo";
import { Dropdown } from "react-native-material-dropdown";

class ApprovalForm extends React.Component {
  render() {
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
      <View
        style={{
          shadowOpacity: 0.7,
          height: "100%",
          width: "90%",
          paddingHorizontal: 8,
          paddingVertical: 16,
          marginBottom: 16,
          justifyContent: "flex-start",
          backgroundColor: "#ffffff",
          borderRadius: 20
        }}
      >
        <Text
          style={{
            paddingHorizontal: 8,
            paddingTop: 8,
            paddingBottom: 8,
            fontSize: 24,
            fontWeight: "bold"
          }}
        >
          Approval Information
        </Text>

        <View style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
            <Text style={{ fontSize: 12, paddingVertical: 16 }}>
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
            style={{ paddingHorizontal: 16, paddingBottom: 16 }}
          >
            <Text style={{ fontSize: 12, paddingVertical: 20 }}>
              Nominator 1
            </Text>
            <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
              <Text style={{ color: "grey" }}>
                Direct Report to a GLT Member
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ paddingHorizontal: 16, paddingBottom: 16 }}
          >
            <Text style={{ fontSize: 12, paddingVertical: 20 }}>
              Nominator 2
            </Text>
            <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
              <Text style={{ color: "grey" }}>Immediate Superior</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ paddingHorizontal: 16, paddingBottom: 16 }}
          >
            <Text style={{ fontSize: 12, paddingVertical: 20 }}>Endorser</Text>
            <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
              <Text style={{ color: "grey" }}>
                Head of Finance/Business Contollers
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ paddingHorizontal: 16, paddingBottom: 16 }}
          >
            <Text style={{ fontSize: 12, paddingVertical: 20 }}>Approver</Text>
            <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
              <Text style={{ color: "grey" }}>GLT Member</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            LongPress={() => null}
            style={{
              flex: 0.1,
              alignItems: "center",
              padding: 16,
              marginLeft: 8,
              marginVertical: 16,
              borderRadius: 100,
              backgroundColor: "grey"
            }}
          >
            <Next name="chevron-thin-right" size={24} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ApprovalForm;
