import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Menu from "react-native-vector-icons/Ionicons";

const activities = [
  {
    date: "19 October 2017",
    data: [
      {
        name: "You",
        action: "have send a",
        document: "Travel Request",
        time: "2.30pm"
      },
      {
        name: "Hasniza",
        action: "have posted a",
        document: "Comment",
        time: "2.30pm"
      },
      {
        name: "Ahmad",
        action: "have rejected your",
        document: "Travel Request",
        time: "2.30pm"
      }
    ]
  },
  {
    date: "20 October 2017",
    data: [
      {
        name: "You",
        action: "have send a",
        document: "Travel Request",
        time: "2.30pm"
      },
      {
        name: "Hasniza",
        action: "have posted a",
        document: "Comment",
        time: "2.30pm"
      }
    ]
  }
];

const LogSingle = ({ data, date }) => (
  <View style={{ backgroundColor: "#c4c4c4", marginTop: 24 }}>
    <Text
      style={{ paddingVertical: 16, paddingHorizontal: 8, fontWeight: "bold" }}
    >
      {date}
    </Text>
    {data.map(activitySingle => (
      <ActivitySingle
        name={activitySingle.name}
        action={activitySingle.action}
        document={activitySingle.document}
        time={activitySingle.time}
      />
    ))}
  </View>
);

const ActivitySingle = ({ name, action, document, time }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 8,
      paddingHorizontal: 8,
      borderTopWidth: 1,
      borderColor: "#f9f9f9"
    }}
  >
    <View style={{ flexDirection: "row" }}>
      <Text style={{ paddingRight: 4 }}>{name}</Text>
      <Text style={{ paddingRight: 4 }}>{action}</Text>
      <Text style={{ paddingRight: 4, fontWeight: "bold" }}>{document}</Text>
    </View>
    <View style={{ textAlign: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 10 }}>{time}</Text>
    </View>
  </View>
);

class ActivityLog extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 32,
            paddingBottom: 8
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            style={{ flex: 0.15, alignItems: "center" }}
          >
            <Menu name="ios-menu" size={24} color="#000000" />
          </TouchableOpacity>
          <View style={{ flex: 0.5, alignItems: "center" }}>
            <Text style={{ fontSize: 16 }}>Activity Log</Text>
          </View>
          <View style={{ flex: 0.15 }}>
            <Text />
          </View>
        </View>

        <ScrollView style={{ flex: 1, paddingHorizontal: 8 }}>
          {activities.map(activity => (
            <LogSingle date={activity.date} data={activity.data} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default ActivityLog;
