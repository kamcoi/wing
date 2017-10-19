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
    travelType: "Site Survey"
  },
  {
    id: "2",
    number: "F54Y-82V5",
    destination: "Phnom Penh, Cambodia",
    name: "Ali Muhd Wasil bin Ali Absar",
    travelType: "Berjimba Berdansa Berdosa"
  },
  {
    id: "3",
    number: "F54Y-82V5",
    destination: "Barcelona, Spain",
    name: "Mohammad Saifuddin Othman bin Kamal",
    travelType: "Berjimba Berdansa Berdosa"
  },
  {
    id: "4",
    number: "F54Y-82V5",
    destination: "Pyongyang, North Korea",
    name: "Nur Sazaliza Hiryiani Binti Zainol Abidin",
    travelType: "Mentelaah Ilmu untuk Cukup Bekalan"
  },
  {
    id: "5",
    number: "F54Y-82V5",
    destination: "Jerusalem, Israel",
    name: "Nur Sazaliza Hiryiani Binti Zainol Abidin",
    travelType: "Mentelaah Ilmu untuk Cukup Bekalan"
  }
];

const ApplicationSingle = ({ number, destination, name, travelType }) => (
  <View
    style={{
      shadowOpacity: 0.7,
      flex: 0.3,
      width: "95%",
      marginBottom: 16,
      justifyContent: "flex-start",
      backgroundColor: "#c4c4c4",
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
        justifyContent: "flex-end",
        backgroundColor: "red",
        paddingVertical: 8,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
      }}
    >
      <TouchableOpacity onPress={() => null} style={{ paddingHorizontal: 24 }}>
        <Icon name="pencil" size={32} color="#000000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => null}>
        <Icon name="trash" size={32} color="#000000" />
      </TouchableOpacity>
    </View>
  </View>
);

// <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
//   <TouchableOpacity onPress={() => null} style={{ paddingHorizontal: 24 }}>
//     <Icon name="pencil" size={32} color="#000000" />
//   </TouchableOpacity>
//   <TouchableOpacity onPress={() => null}>
//     <Icon name="trash" size={32} color="#000000" />
//   </TouchableOpacity>
// </View>

// shadowOpacity: 0.7,
// flex: 0.2,
// width: "95%",
// paddingHorizontal: 8,
// paddingVertical: 8,
// justifyContent: "flex-start",
// backgroundColor: "#c4c4c4",
// borderTopRightRadius: 10,
// borderTopLeftRadius: 10
