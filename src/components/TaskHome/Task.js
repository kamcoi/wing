import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Cancel from "react-native-vector-icons/MaterialIcons";
import Menu from "react-native-vector-icons/Ionicons";

class Task extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { task } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#ffffff",
            justifyContent: "space-between",
            paddingTop: 32,
            paddingBottom: 8
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            style={{ flex: 0.1, alignItems: "center" }}
          >
            <Menu name="ios-menu" size={24} color="#000000" />
          </TouchableOpacity>
          <View style={{ flex: 0.15, alignItems: "center" }}>
            <Text style={{ fontSize: 16 }}>Home</Text>
          </View>
          <View style={{ flex: 0.15 }}>
            <Text />
          </View>
        </View>

        <View style={{ flex: 1, paddingHorizontal: 8 }}>
          <FlatList
            data={task}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <ApplicationSingle
                navigate={navigate}
                id={item.id}
                requestorName={item.requestorName}
                destination={item.destination}
                travelType={item.travelType}
                cost={item.cost}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

export default Task;

const ApplicationSingle = ({
  id,
  requestorName,
  destination,
  travelType,
  navigate,
  cost
}) => (
  <View
    style={{
      shadowOpacity: 0.3,
      flex: 0.3,
      marginBottom: 16,
      justifyContent: "flex-start",
      backgroundColor: "#ffffff",
      borderRadius: 10
    }}
  >
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
          {requestorName}
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
