import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import TrackingBar from "../Bar/TrackingBar";

class Task extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 8
        }}
      >
        {applications.map(applicationSingle => (
          <ApplicationSingle
            key={applicationSingle.id}
            number={applicationSingle.number}
            name={applicationSingle.name}
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
    name: "JKGh",
    travelType: "Site Survey"
  },
  {
    id: "2",
    number: "F54Y-82V5",
    name: "Ali Muhd Wasil bin Ali Absar",
    travelType: "Berjimba Berdansa Berdosa"
  },
  {
    id: "3",
    number: "F54Y-82V5",
    name: "Mohammad Saifuddin Othman bin Kamal",
    travelType: "Berjimba Berdansa Berdosa"
  },
  {
    id: "4",
    number: "F54Y-82V5",
    name: "Nur Sazaliza Hiryiani Binti Zainol Abidin",
    travelType: "Mentelaah Ilmu untuk Cukup Bekalan"
  },
  {
    id: "5",
    number: "F54Y-82V5",
    name: "Nur Sazaliza Hiryiani Binti Zainol Abidin",
    travelType: "Mentelaah Ilmu untuk Cukup Bekalan"
  }
];

const ApplicationSingle = ({ number, name, travelType }) => (
  <TouchableOpacity
    LongPress={() => null}
    style={{
      shadowOpacity: 0.7,
      flex: 0.2,
      width: "95%",
      paddingHorizontal: 8,
      paddingVertical: 16,
      marginBottom: 16,
      justifyContent: "flex-start",
      backgroundColor: "#c4c4c4",
      borderRadius: 10
    }}
  >
    <View style={{ width: "80%" }}>
      <Text style={{ fontSize: 16, paddingBottom: 8, color: "white" }}>
        {number}
      </Text>
      <Text style={{ fontSize: 16, paddingBottom: 8, color: "white" }}>
        {name}
      </Text>
      <Text style={{ fontSize: 16, paddingBottom: 16, color: "white" }}>
        {travelType}
      </Text>
    </View>

    <TrackingBar />
  </TouchableOpacity>
);
