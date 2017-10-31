import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Cancel from "react-native-vector-icons/MaterialIcons";

import TrackingBar from "../Bar/TrackingBar";

class Task extends React.Component {
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
            name={applicationSingle.name}
            destination={applicationSingle.destination}
            travelType={applicationSingle.travelType}
            cost={applicationSingle.cost}
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
    travelType: "Site Survey",
    cost: "2.6 billion"
  },
  {
    id: "2",
    number: "F54Y-82V5",
    name: "Ali Muhd Wasil bin Ali Absar",
    destination: "Shanghai, China",
    travelType: "Berjimba Berdansa Berdosa",
    cost: "3.1 billion"
  },
  {
    id: "3",
    number: "F54Y-82V5",
    name: "Mohammad Saifuddin Othman bin Kamal",
    destination: "Sarawak, Malaysia",
    travelType: "Berjimba Berdansa Berdosa",
    cost: "1 trillion"
  },
  {
    id: "4",
    number: "F54Y-82V5",
    name: "Nur Sazaliza Hiryiani Binti Zainol Abidin",
    destination: "Hawaii, United States",
    travelType: "Mentelaah Ilmu untuk Cukup Bekalan",
    cost: "2.6 billion"
  },
  {
    id: "5",
    number: "F54Y-82V5",
    name: "Nur Sazaliza Hiryiani Binti Zainol Abidin",
    destination: "Ho Chi Minh, Vietnam",
    travelType: "Mentelaah Ilmu untuk Cukup Bekalan",
    cost: "3.1 billion"
  }
];

const ApplicationSingle = ({
  number,
  name,
  destination,
  travelType,
  navigate,
  cost
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
    <TouchableOpacity
      onPress={() => navigate("TaskStatus")}
      style={{
        paddingHorizontal: 8,
        paddingVertical: 16
      }}
    >
      <View style={{ width: "100%", paddingHorizontal: 8 }}>
        <Text
          style={{
            fontSize: 22,
            paddingBottom: 4,
            color: "#000000",
            fontWeight: "bold"
          }}
        >
          {name}
        </Text>
        <Text style={{ fontSize: 16, paddingBottom: 4, color: "#000000" }}>
          {destination}
        </Text>
        <Text style={{ fontSize: 14, color: "#000000", paddingBottom: 4 }}>
          {travelType}
        </Text>
        <Text style={{ fontSize: 16, color: "#000000" }}>RM {cost}</Text>
      </View>
    </TouchableOpacity>
  </View>
);
