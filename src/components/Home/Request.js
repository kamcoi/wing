import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
// import ActionButton from "react-native-action-button";
// import ActionButtonIcon from "react-native-action-button/SimpleLineIcons";

import TrackingBar from "../Bar/TrackingBar";

class Request extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 8,
          backgroundColor: "#ffffff"
        }}
      >
        {applications.map(applicationSingle => (
          <ApplicationSingle
            key={applicationSingle.id}
            number={applicationSingle.number}
            destination={applicationSingle.destination}
            name={applicationSingle.name}
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
    name: "Mohammad Hafiz bin Burhan",
    travelType: "Site Survey",
    message: "Hasniza endorsed your.. "
  },
  {
    id: "2",
    number: "F54Y-82V5",
    destination: "Phnom Penh, Cambodia",
    name: "Ali Muhd Wasil bin Ali Absar",
    travelType: "Berjimba Berdansa Berdosa",
    message: "Mohd approved your.."
  },
  {
    id: "3",
    number: "F54Y-82V5",
    destination: "Barcelona, Spain",
    name: "Mohammad Saifuddin Othman bin Kamal",
    travelType: "Berjimba Berdansa Berdosa",
    message: "Lolz"
  },
  {
    id: "4",
    number: "F54Y-82V5",
    destination: "Pyongyang, North Korea",
    name: "Nur Sazaliza Hiryiani Binti Zainol Abidin",
    travelType: "Mentelaah Ilmu untuk Cukup Bekalan",
    message: "Lili Lulu Lolo"
  },
  {
    id: "5",
    number: "F54Y-82V5",
    destination: "Jerusalem, Israel",
    name: "Nur Sazaliza Hiryiani Binti Zainol Abidin",
    travelType: "Mentelaah Ilmu untuk Cukup Bekalan",
    message: "Huhu Hihi Haha"
  }
];

const ApplicationSingle = ({
  number,
  destination,
  name,
  travelType,
  message
}) => (
  <View
    style={{
      shadowOpacity: 0.7,
      flex: 0.3,
      width: "95%",
      marginBottom: 16,
      justifyContent: "flex-start",
      backgroundColor: "#d1d3d4",
      borderRadius: 10
    }}
  >
    <TouchableOpacity
      LongPress={() => null}
      style={{
        paddingHorizontal: 8,
        paddingVertical: 8
      }}
    >
      <View style={{ width: "100%" }}>
        <Text style={{ fontSize: 12, paddingBottom: 2, color: "white" }}>
          {number}
        </Text>
        <Text
          style={{
            fontSize: 22,
            paddingBottom: 2,
            color: "white",
            fontWeight: "bold"
          }}
        >
          {destination}
        </Text>
        <Text style={{ fontSize: 16, paddingBottom: 2, color: "black" }}>
          {name}
        </Text>
        <Text style={{ fontSize: 12, paddingBottom: 16, color: "black" }}>
          {travelType}
        </Text>
      </View>
      <TrackingBar />
    </TouchableOpacity>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#f47178",
        paddingVertical: 4,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
      }}
    >
      <View
        style={{
          justifyContent: "center",
          paddingHorizontal: 16,
          borderRightWidth: 1,
          flex: 1
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{message}</Text>
      </View>
      <TouchableOpacity
        onPress={() => null}
        style={{ paddingHorizontal: 16, paddingVertical: 8 }}
      >
        <Icon name="trash" size={32} color="#000000" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => null}
        style={{ paddingRight: 16, paddingVertical: 8 }}
      >
        <Icon name="close" size={32} color="#000000" />
      </TouchableOpacity>
    </View>
  </View>
);
