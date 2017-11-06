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
import Circle from "react-native-vector-icons/FontAwesome";

class Task extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { taskHome } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#ffffff",
            justifyContent: "space-between",
            paddingTop: 32
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

        <View style={{ flex: 1, paddingHorizontal: 8, paddingTop: 8 }}>
          <FlatList
            data={taskHome}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <ApplicationSingle
                navigate={navigate}
                id={item.id}
                requestorName={item.requestorName}
                destination={item.destination}
                travelType={item.travelType}
                cost={item.cost}
                notification={item.notification}
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
  cost,
  notification
}) => (
  <View
    style={{
      shadowOpacity: 0.1,
      marginBottom: 16,
      justifyContent: "flex-start",
      backgroundColor: "#ffffff",
      borderRadius: 10
    }}
  >
    <TouchableOpacity onPress={() => navigate("TaskStatus")}>
      {notification === "new" ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 16,
            paddingHorizontal: 16
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 16,
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
          <View>
            <Circle name="circle" size={16} color="#f27178" />
          </View>
        </View>
      ) : (
        <View
          style={{
            width: "100%",
            paddingHorizontal: 8,
            paddingVertical: 16,
            paddingHorizontal: 16
          }}
        >
          <Text
            style={{
              fontSize: 16,
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
      )}
    </TouchableOpacity>
  </View>
);
