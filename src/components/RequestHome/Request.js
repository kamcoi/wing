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
import ActionButton from "react-native-action-button";
// import ActionButton from "react-native-action-button";
// import ActionButtonIcon from "react-native-action-button/SimpleLineIcons";

import TrackingBar from "../Bar/TrackingBar";

class Request extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { request1 } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#ffffff",
            justifyContent: "space-between",
            paddingTop: 32,
            paddingBottom: 8,
            marginBottom: 16
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

        <View style={{ paddingVertical: 15, paddingHorizontal: 15 }}>
          <FlatList
            data={request1}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <ApplicationSingle
                id={item.id}
                navigate={navigate}
                destination={item.destination}
                travelFrom={item.travelFrom}
                travelUntil={item.travelUntil}
                travelType={item.travelType}
                dialogBox={item.dialogBox}
              />
            )}
          />
        </View>

        <ActionButton
          buttonColor="#333333"
          onPress={() => navigate("RequestForm")}
        />
      </View>
    );
  }
}

export default Request;

const ApplicationSingle = ({
  id,
  destination,
  travelFrom,
  travelUntil,
  travelType,
  dialogBox,
  navigate
}) => (
  <View
    style={{
      shadowOpacity: 0.3,
      flex: 1,
      marginBottom: 16,
      justifyContent: "flex-start",
      backgroundColor: "#ffffff",
      borderRadius: 10
    }}
  >
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 16
        }}
      >
        <TouchableOpacity
          onPress={() => null}
          style={{ justifyContent: "center", paddingRight: 16 }}
        >
          <Cancel name="cancel" size={24} color="grey" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigate("RequestStatus")}>
        <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
          <Text
            style={{
              fontSize: 22,
              paddingBottom: 4,
              color: "black",
              fontWeight: "bold"
            }}
          >
            {travelType}
          </Text>
          <Text style={{ fontSize: 16, paddingBottom: 4, color: "black" }}>
            {destination}
          </Text>
          <Text style={{ fontSize: 14, paddingBottom: 4, color: "#c4c4c4" }}>
            {travelFrom} until {travelUntil} 2017
          </Text>
        </View>

        <TrackingBar />

        <View
          style={{
            backgroundColor: "#f47178",
            paddingVertical: 16,
            paddingHorizontal: 16,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{dialogBox}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);
