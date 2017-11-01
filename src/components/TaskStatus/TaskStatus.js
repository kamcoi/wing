import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Send from "react-native-vector-icons/MaterialIcons";
import Emoji from "react-native-vector-icons/Entypo";
import NavigationBar from "react-native-navbar";

class TaskStatus extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    const { status } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <NavigationBar
          style={{
            borderColor: "#f27178",
            borderBottomWidth: 1
          }}
          title={{ title: "Task Status" }}
          leftButton={{
            title: "Back",
            handler: () => goBack()
          }}
        />

        <ScrollView style={{ flex: 1, paddingHorizontal: 8 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 32
            }}
          >
            <View
              style={{
                backgroundColor: "#f27178",
                paddingHorizontal: 16,
                paddingVertical: 16,
                marginLeft: 8
              }}
            >
              <Text
                style={{
                  paddingHorizontal: 8,
                  fontSize: 18,
                  fontWeight: "bold"
                }}
              >
                Logo
              </Text>
            </View>
            <View style={{ paddingHorizontal: 8, justifyContent: "center" }}>
              <Text style={{ fontSize: 12 }}>{status.ref}</Text>
              <Text style={{ fontSize: 12 }}>{status.applyDate}</Text>
              <Text style={{ fontSize: 12 }}>{status.applyTime}</Text>
            </View>
          </View>

          <View
            style={{
              paddingVertical: 32,
              paddingHorizontal: 8,
              alignItems: "center"
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              Request Form below is pending your approval
            </Text>
          </View>

          <View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
              Profile Details
            </Text>
            <Text
              style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}
            >
              {status.requestorName}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 16 }}>
              {status.requestorDivision}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#c4c4c4" }}>
              Additional Travellers
            </Text>
            <Text
              style={{
                paddingLeft: 8,
                fontSize: 14,
                paddingBottom: 4,
                fontWeight: "bold"
              }}
            >
              {status.additionalTravellerName1}
            </Text>
            <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
              {status.additionalTravellerDivision1}
            </Text>
            <Text
              style={{
                paddingLeft: 8,
                fontSize: 14,
                paddingBottom: 4,
                fontWeight: "bold"
              }}
            >
              {status.additionalTravellerName2}
            </Text>
            <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
              {status.additionalTravellerDivision2}
            </Text>
            <Text
              style={{
                paddingLeft: 8,
                fontSize: 14,
                paddingBottom: 4,
                fontWeight: "bold"
              }}
            >
              {status.additionalTravellerName3}
            </Text>
            <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
              {status.additionalTravellerDivision3}
            </Text>
          </View>

          <View style={{ paddingHorizontal: 8, paddingBottom: 40 }}>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
              Travel Details
            </Text>
            <Text
              style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}
            >
              {status.destination}
            </Text>
            <Text style={{ fontSize: 14, paddingBottom: 4 }}>
              {status.travelFrom} to {status.travelUntil} 2016
            </Text>
            <Text style={{ fontSize: 14, paddingBottom: 4 }}>Site Survey</Text>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#c4c4c4" }}>
              Description
            </Text>
            <Text
              style={{ fontSize: 12, lineHeight: 18, textAlign: "justify" }}
            >
              {status.justificationText}
            </Text>
          </View>

          <View style={{ paddingBottom: 40, paddingHorizontal: 8 }}>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
              Cost Details
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 8,
                borderBottomWidth: 0.5,
                borderColor: "#c4c4c4"
              }}
            >
              <Text style={{ color: "grey" }}>Budget {status.costCentre}</Text>
              <Text style={{ paddingRight: 8, color: "grey" }}>
                RM{status.budget}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 18 }}>TOTAL</Text>
              <Text
                style={{ paddingRight: 8, fontSize: 18, fontWeight: "bold" }}
              >
                RM{status.cost}
              </Text>
            </View>
          </View>

          <CalltoAction />

          <View
            style={{
              flexDirection: "row",
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: "#c4c4c4",
              paddingVertical: 8,
              justifyContent: "center"
            }}
          >
            <Icon name="comment" size={24} color="#000000" />
            <View style={{ justifyContent: "center" }}>
              <Text>Comment</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigate("Comments")}
            style={{ flex: 1, paddingVertical: 8, paddingHorizontal: 16 }}
          >
            <Text style={{ fontWeight: "bold", paddingBottom: 2 }}>
              {status.endorserName}
            </Text>
            <Text>{status.commentText}</Text>
          </TouchableOpacity>

          <View
            behavior="padding"
            style={{
              flexDirection: "row",
              borderTopWidth: 1,
              borderColor: "#f9f9f9",
              paddingVertical: 8,
              justifyContent: "space-around"
            }}
          >
            <TouchableOpacity onPress={() => null} style={{ flex: 0.9 }}>
              <Text
                style={{
                  padding: 8,
                  fontSize: 14,
                  borderWidth: 1,
                  borderRadius: 8,
                  color: "#c4c4c4"
                }}
              >
                Type your comment here..
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ justifyContent: "center" }}>
              <Send name="send" size={24} color="#000000" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TaskStatus;

const CalltoAction = () => (
  <View style={{ paddingBottom: 40 }}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              "Attention",
              "Are you ready to Approve the Travel Request",
              [
                {
                  text: "Back",
                  onPress: () => console.log("Ask"),
                  style: "default"
                },
                {
                  text: "Confirm",
                  onPress: () => navigate("Main"),
                  style: "default"
                }
              ]
            )}
          style={{
            alignItems: "center",
            borderColor: "grey"
          }}
        >
          <Icon name="check" size={40} color="#000000" />
        </TouchableOpacity>
        <Text style={{ fontSize: 12 }}>Approve</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() =>
            Alert.alert("Confirm?", "Ready to send your Travel Request?", [
              {
                text: "Back",
                onPress: () => console.log("Ask"),
                style: "default"
              },
              {
                text: "Confirm",
                onPress: () => navigate("Main"),
                style: "default"
              }
            ])}
          style={{
            alignItems: "center",
            borderColor: "grey"
          }}
        >
          <Icon name="close-o" size={40} color="#000000" />
        </TouchableOpacity>
        <Text style={{ fontSize: 12 }}>Reject</Text>
      </View>
    </View>
  </View>
);
