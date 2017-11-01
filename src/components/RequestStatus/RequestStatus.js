import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Emoji from "react-native-vector-icons/Entypo";
import Send from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/EvilIcons";
import NavigationBar from "react-native-navbar";

import TrackingBar from "../Bar/TrackingBar";

class RequestStatus extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    const { reqStatus } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <NavigationBar
          style={{
            borderColor: "#f27178",
            borderBottomWidth: 1,
            marginBottom: 16
          }}
          title={{ title: "Request Status" }}
          leftButton={{
            title: "Back",
            handler: () => goBack()
          }}
        />

        <TrackingBar />

        <ScrollView style={{ flex: 1, paddingHorizontal: 8 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 40
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
              <Text style={{ fontSize: 12 }}>{reqStatus.ref}</Text>
              <Text style={{ fontSize: 12 }}>{reqStatus.applyDate}</Text>
              <Text style={{ fontSize: 12 }}>{reqStatus.applyTime}</Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 8, paddingBottom: 40 }}>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
              Travel Details
            </Text>
            <Text
              style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}
            >
              {reqStatus.destination}
            </Text>
            <Text style={{ fontSize: 14, paddingBottom: 4 }}>
              {reqStatus.travelFrom} to {reqStatus.travelUntil} 2016
            </Text>
            <Text style={{ fontSize: 14, paddingBottom: 4 }}>Site Survey</Text>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#c4c4c4" }}>
              Description
            </Text>
            <Text
              style={{ fontSize: 12, lineHeight: 18, textAlign: "justify" }}
            >
              {reqStatus.justificationText}
            </Text>
          </View>

          <View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
              Profile Details
            </Text>
            <Text
              style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}
            >
              {reqStatus.requestorName}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 16 }}>
              {reqStatus.requestorDivision}
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
              {reqStatus.additionalTravellerName1}
            </Text>
            <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
              {reqStatus.additionalTravellerDivision1}
            </Text>
            <Text
              style={{
                paddingLeft: 8,
                fontSize: 14,
                paddingBottom: 4,
                fontWeight: "bold"
              }}
            >
              {reqStatus.additionalTravellerName2}
            </Text>
            <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
              {reqStatus.additionalTravellerDivision2}
            </Text>
            <Text
              style={{
                paddingLeft: 8,
                fontSize: 14,
                paddingBottom: 4,
                fontWeight: "bold"
              }}
            >
              {reqStatus.additionalTravellerName3}
            </Text>
            <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
              {reqStatus.additionalTravellerDivision3}
            </Text>
          </View>

          <View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
              Approvers Details
            </Text>
            <Text
              style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
            >
              {reqStatus.endorserName}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 12 }}>Nominator</Text>
            <Text
              style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
            >
              {reqStatus.nominatorName}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 12 }}>Endorser</Text>
            <Text
              style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
            >
              {reqStatus.approverName}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 12 }}>Approver</Text>
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
              <Text style={{ color: "grey" }}>
                Budget {reqStatus.costCentre}
              </Text>
              <Text style={{ paddingRight: 8, color: "grey" }}>
                RM{reqStatus.budget}
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
                RM{reqStatus.cost}
              </Text>
            </View>
          </View>

          <View>
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
                {reqStatus.approverName}
              </Text>
              <Text>{reqStatus.commentText}</Text>
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
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default RequestStatus;
