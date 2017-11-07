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
import Price from "react-native-vector-icons/FontAwesome";
import Circle from "react-native-vector-icons/FontAwesome";

class Task extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { taskHome } = this.props;
    return (
      <View style={{ flex: 1 }}>
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
            width: "90%",
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
          </View>
          <View>
            <Circle name="circle" size={16} color="#f27178" />
          </View>
        </View>
      ) : (
        <View
          style={{
            width: "90%",
            paddingHorizontal: 8,
            paddingVertical: 16,
            paddingHorizontal: 16
          }}
        >
          <Text
            style={{
              fontSize: 16,
              paddingBottom: 4,
              lineHeight: 22,
              color: "#000000",
              fontWeight: "bold"
            }}
          >
            {requestorName}
          </Text>
          <Text style={{ fontSize: 14, paddingBottom: 4, color: "#a9a9a9" }}>
            {destination}
          </Text>
          <Text style={{ fontSize: 14, color: "#a9a9a9" }}>{travelType}</Text>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#ee7202",
          justifyContent: "space-between",
          paddingVertical: 8,
          borderBottomRightRadius: 4,
          borderBottomLeftRadius: 4
        }}
      >
        <View style={{ paddingHorizontal: 16 }}>
          <Price name="credit-card" size={24} color="a9a9a9" />
        </View>
        <Text style={{ paddingHorizontal: 16, fontSize: 18, color: "#000000" }}>
          RM {cost}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);
