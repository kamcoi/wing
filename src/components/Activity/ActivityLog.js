import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import Menu from "react-native-vector-icons/Ionicons";

const LogSingle = ({ data, activityDate }) => (
  <View style={{ backgroundColor: "#c4c4c4", marginTop: 24 }}>
    <Text
      style={{ paddingVertical: 16, paddingHorizontal: 8, fontWeight: "bold" }}
    >
      {activityDate}
    </Text>
    <FlatList
      data={data}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => (
        <ActivitySingle
          key={item.id}
          requestorName={item.requestorName}
          action={item.action}
          doc={item.doc}
          time={item.time}
        />
      )}
    />
  </View>
);

const ActivitySingle = ({ requestorName, action, doc, time }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "space-between",
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderTopWidth: 1,
      borderColor: "#f9f9f9"
    }}
  >
    <Text style={{ paddingBottom: 8, lineHeight: 20 }}>
      {requestorName} {action} {doc}
    </Text>
    <Text style={{ fontSize: 10 }}>{time}</Text>
  </View>
);

class ActivityLog extends React.Component {
  render() {
    const { activity } = this.props;
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
          <FlatList
            data={activity}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <LogSingle activityDate={item.activityDate} data={item.data} />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

export default ActivityLog;
