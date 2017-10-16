import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity
} from "react-native";

import PersonalForm from "./PersonalForm";
import TravelForm from "./TravelForm";
import CostForm from "./CostForm";
import ApprovalForm from "./ApprovalForm";

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: "personal" };
  }
  render() {
    let displayedPage;
    switch (this.state.page) {
      case "personal":
        displayedPage = <PersonalForm />;
        break;
      case "travel":
        displayedPage = <TravelForm />;
        break;
      case "cost":
        displayedPage = <CostForm />;
        break;
      case "approval":
        displayedPage = <ApprovalForm />;
        break;
      default:
        displayedPage = <PersonalForm />;
    }
    return (
      <View behavior="padding" style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View
          style={{
            height: 60,
            backgroundColor: "white",
            paddingTop: 32,
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 16 }}>Application Form</Text>
        </View>

        <View
          style={{
            flex: 0.05,
            flexDirection: "row",
            marginHorizontal: 18,
            marginVertical: 26
          }}
        >
          <TouchableOpacity
            onPress={() => this.setState({ page: "personal" })}
            style={[
              {
                flex: 0.25,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderRightWidth: 0,
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                backgroundColor: "#ffffff"
              },
              this.state.page === "personal" && { backgroundColor: "#f47178" }
            ]}
          >
            <Text
              style={[
                { fontSize: 12, color: "black" },
                this.state.page === "personal" && { color: "#ffffff" }
              ]}
            >
              Personal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ page: "travel" })}
            style={[
              {
                flex: 0.25,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderRightWidth: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
              },
              this.state.page === "travel" && { backgroundColor: "#f47178" }
            ]}
          >
            <Text
              style={[
                { fontSize: 12, color: "black" },
                this.state.page === "travel" && { color: "#ffffff" }
              ]}
            >
              Travel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ page: "cost" })}
            style={[
              {
                flex: 0.25,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1
              },
              this.state.page === "cost" && { backgroundColor: "#f47178" }
            ]}
          >
            <Text
              style={[
                { fontSize: 12, color: "black" },
                this.state.page === "cost" && { color: "#ffffff" }
              ]}
            >
              Cost
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ page: "approval" })}
            style={[
              {
                flex: 0.25,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderLeftWidth: 0
              },
              this.state.page === "approval" && { backgroundColor: "#f47178" }
            ]}
          >
            <Text
              style={[
                { fontSize: 12, color: "black" },
                this.state.page === "approval" && { color: "#ffffff" }
              ]}
            >
              Approval
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => null}
            style={{
              flex: 0.25,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderLeftWidth: 0,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8
            }}
          >
            <Text style={{ fontSize: 12 }}>Submit</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1 }}>
          <View style={{ alignItems: "center", paddingTop: 16 }}>
            {displayedPage}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default RequestForm;
