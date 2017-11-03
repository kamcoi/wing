import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Circle from "react-native-vector-icons/Entypo";

class TrackingBar extends React.Component {
  render() {
    const { status } = this.props;
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingVertical: 8
          }}
        >
          {status === "Submit" || status === "Nominate" ? (
            <Circle
              name="circle"
              size={24}
              color="#f27178"
              style={{ paddingHorizontal: 4 }}
            />
          ) : (
            <Circle
              name="circle"
              size={24}
              color="#000000"
              style={{ paddingHorizontal: 4 }}
            />
          )}
          <View style={{ flex: 0.25 }}>
            <View
              style={{
                alignItems: "center",
                flex: 0.5,
                borderBottomWidth: 2
              }}
            />
            <View
              style={{
                alignItems: "center",
                flex: 0.5
              }}
            />
          </View>
          {status === "Nominate" ? (
            <Circle
              name="circle"
              size={24}
              color="#f27178"
              style={{ paddingHorizontal: 4 }}
            />
          ) : (
            <Circle
              name="circle"
              size={24}
              color="#000000"
              style={{ paddingHorizontal: 4 }}
            />
          )}
          <View style={{ flex: 0.25 }}>
            <View
              style={{
                alignItems: "center",
                flex: 0.5,
                borderBottomWidth: 2
              }}
            />
            <View
              style={{
                alignItems: "center",
                flex: 0.5
              }}
            />
          </View>
          <Circle
            name="circle"
            size={24}
            color="#000000"
            style={{ paddingHorizontal: 4 }}
          />
          <View style={{ flex: 0.25 }}>
            <View
              style={{
                alignItems: "center",
                flex: 0.5,
                borderBottomWidth: 2
              }}
            />
            <View
              style={{
                alignItems: "center",
                flex: 0.5
              }}
            />
          </View>
          <Circle
            name="circle"
            size={24}
            color="#000000"
            style={{ paddingHorizontal: 4 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingBottom: 16
          }}
        >
          <Text style={{ fontSize: 10 }}>Submission</Text>
          <Text style={{ fontSize: 10 }}>Nomination</Text>
          <Text style={{ fontSize: 10 }}>Endorsement</Text>
          <Text style={{ fontSize: 10 }}>Approval</Text>
        </View>
      </View>
    );
  }
}

export default TrackingBar;
