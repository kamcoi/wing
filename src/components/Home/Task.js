import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import TrackingBar from "../Bar/TrackingBar";

class Task extends React.Component {
  render() {
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
            key={applicationSingle.id}
            number={applicationSingle.number}
            name={applicationSingle.name}
            destination={applicationSingle.destination}
            travelType={applicationSingle.travelType}
          />
        ))}
      </View>
    );
  }
}

export default Task;

const applications = [
  {
    id: "1",
    number: "76VD-TG7Q",
    name: "Mohammad Hafiz bin Burhan",
    destination: "Las Vegas, United States",
    travelType: "Site Survey"
  },
  {
    id: "2",
    number: "F54Y-82V5",
    name: "Ali Muhd Wasil bin Ali Absar",
    destination: "Shanghai, China",
    travelType: "Berjimba Berdansa Berdosa"
  },
  {
    id: "3",
    number: "F54Y-82V5",
    name: "Mohammad Saifuddin Othman bin Kamal",
    destination: "Sarawak, Malaysia",
    travelType: "Berjimba Berdansa Berdosa"
  },
  {
    id: "4",
    number: "F54Y-82V5",
    name: "Nur Sazaliza Hiryiani Binti Zainol Abidin",
    destination: "Hawaii, United States",
    travelType: "Mentelaah Ilmu untuk Cukup Bekalan"
  },
  {
    id: "5",
    number: "F54Y-82V5",
    name: "Nur Sazaliza Hiryiani Binti Zainol Abidin",
    destination: "Ho Chi Minh, Vietnam",
    travelType: "Mentelaah Ilmu untuk Cukup Bekalan"
  }
];

const ApplicationSingle = ({ number, name, destination, travelType }) => (
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
          {name}
        </Text>
        <Text style={{ fontSize: 16, paddingBottom: 2, color: "white" }}>
          {destination}
        </Text>
        <Text style={{ fontSize: 12, paddingBottom: 16, color: "white" }}>
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
