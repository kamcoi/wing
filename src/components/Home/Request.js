import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Cancel from "react-native-vector-icons/MaterialIcons";
// import ActionButton from "react-native-action-button";
// import ActionButtonIcon from "react-native-action-button/SimpleLineIcons";

import TrackingBar from "../Bar/TrackingBar";

class Request extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 8
        }}
      >
        {applications.map(applicationSingle => (
          <ApplicationSingle
            navigate={navigate}
            key={applicationSingle.id}
            number={applicationSingle.number}
            destination={applicationSingle.destination}
            travelFrom={applicationSingle.travelFrom}
            travelUntil={applicationSingle.travelUntil}
            travelType={applicationSingle.travelType}
            message={applicationSingle.message}
          />
        ))}
      </View>
    );
  }
}

export default Request;

const applications = [
  {
    id: "1",
    number: "76VD-TG7Q",
    destination: "Singapore",
    travelFrom: "18 April",
    travelUntil: "29 April",
    travelType: "Site Survey",
    message: "Hasniza endorsed your.. "
  },
  {
    id: "2",
    number: "F54Y-82V5",
    destination: "Phnom Penh, Cambodia",
    travelFrom: "18 April",
    travelUntil: "29 April",
    travelType: "Berjimba Berdansa Berdosa",
    message: "Mohd approved your.."
  },
  {
    id: "3",
    number: "F54Y-82V5",
    destination: "Barcelona, Spain",
    travelFrom: "18 April",
    travelUntil: "29 April",
    travelType: "Berjimba Berdansa Berdosa",
    message: "Lolz"
  },
  {
    id: "4",
    number: "F54Y-82V5",
    destination: "Pyongyang, North Korea",
    travelFrom: "18 April",
    travelUntil: "29 April",
    travelType: "Mentelaah Ilmu untuk Cukup Bekalan",
    message: "Lili Lulu Lolo"
  },
  {
    id: "5",
    number: "F54Y-82V5",
    destination: "Jerusalem, Israel",
    travelFrom: "18 April",
    travelUntil: "29 April",
    travelType: "Mentelaah Ilmu untuk Cukup Bekalan",
    message: "Huhu Hihi Haha"
  }
];

const ApplicationSingle = ({
  number,
  destination,
  travelFrom,
  travelUntil,
  travelType,
  message,
  navigate
}) => (
  <View
    style={{
      shadowOpacity: 0.3,
      flex: 0.3,
      width: "95%",
      marginBottom: 16,
      justifyContent: "flex-start",
      backgroundColor: "#ffffff",
      borderRadius: 10
    }}
  >
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 0.5,
          paddingVertical: 16
        }}
      >
        <View style={{ justifyContent: "center", paddingHorizontal: 16 }}>
          <Text
            style={{
              fontSize: 14,
              color: "black"
            }}
          >
            {number}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => null}
          style={{ justifyContent: "center", paddingRight: 16 }}
        >
          <Cancel name="cancel" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigate("RequestForm")}>
        <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
          <Text
            style={{
              fontSize: 22,
              paddingBottom: 4,
              color: "black",
              fontWeight: "bold"
            }}
          >
            {travelType}
          </Text>
          <Text style={{ fontSize: 16, paddingBottom: 4, color: "black" }}>
            {destination}
          </Text>
          <Text style={{ fontSize: 14, paddingBottom: 4, color: "#c4c4c4" }}>
            {travelFrom} until {travelUntil} 2017
          </Text>
        </View>

        <TrackingBar />

        <View
          style={{
            backgroundColor: "#f47178",
            paddingVertical: 16,
            paddingHorizontal: 16,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{message}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);
