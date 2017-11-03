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
    const { navigate, state } = this.props.navigation;
    const { goBack } = this.props.navigation;
    const { request1 } = this.props;
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

        <TrackingBar status={request1.status} />

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
              <Text style={{ fontSize: 12 }}>{request1.ref}</Text>
              <Text style={{ fontSize: 12 }}>{request1.timeStamp}</Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 8, paddingBottom: 40 }}>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
              Travel Details
            </Text>
            <Text
              style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}
            >
              {request1.destination}
            </Text>
            <Text style={{ fontSize: 14, paddingBottom: 4 }}>
              {request1.travelFrom} to {request1.travelUntil} 2016
            </Text>
            <Text style={{ fontSize: 14, paddingBottom: 4 }}>Site Survey</Text>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#c4c4c4" }}>
              Description
            </Text>
            <Text
              style={{ fontSize: 12, lineHeight: 18, textAlign: "justify" }}
            >
              {request1.justificationText}
            </Text>
          </View>

          <View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
              Profile Details
            </Text>
            <Text
              style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}
            >
              {request1.requestorName}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 16 }}>
              {request1.requestorDivision}
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
              {request1.additionalTravellerName1}
            </Text>
            <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
              {request1.additionalTravellerDivision1}
            </Text>
            <Text
              style={{
                paddingLeft: 8,
                fontSize: 14,
                paddingBottom: 4,
                fontWeight: "bold"
              }}
            >
              {request1.additionalTravellerName2}
            </Text>
            <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
              {request1.additionalTravellerDivision2}
            </Text>
            <Text
              style={{
                paddingLeft: 8,
                fontSize: 14,
                paddingBottom: 4,
                fontWeight: "bold"
              }}
            >
              {request1.additionalTravellerName3}
            </Text>
            <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
              {request1.additionalTravellerDivision3}
            </Text>
          </View>

          <View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
              Approvers Details
            </Text>
            <Text
              style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
            >
              {request1.endorserName}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 12 }}>Nominator</Text>
            <Text
              style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
            >
              {request1.nominatorName}
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 12 }}>Endorser</Text>
            <Text
              style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
            >
              {request1.approverName}
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
                Budget {request1.costCentre}
              </Text>
              <Text style={{ paddingRight: 8, color: "grey" }}>
                RM{request1.budget}
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
                RM{request1.cost}
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
                {request1.approverName}
              </Text>
              <Text>{request1.commentTextLatest}</Text>
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
