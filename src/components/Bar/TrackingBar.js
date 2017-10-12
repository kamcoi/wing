import React from "react";
import { StyleSheet, Text, View } from "react-native";

class TrackingBar extends React.Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingVertical: 8
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              paddingVertical: 10,
              alignItems: "center",
              flex: 0.06,
              borderRadius: 100
            }}
          />
          <View style={{ flex: 0.2 }}>
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
          <View
            style={{
              backgroundColor: "white",
              paddingVertical: 10,
              alignItems: "center",
              flex: 0.06,
              borderRadius: 100
            }}
          />
          <View style={{ flex: 0.2 }}>
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
          <View
            style={{
              backgroundColor: "white",
              paddingVertical: 10,
              alignItems: "center",
              flex: 0.06,
              borderRadius: 100
            }}
          />
          <View style={{ flex: 0.2 }}>
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
          <View
            style={{
              backgroundColor: "white",
              paddingVertical: 10,
              alignItems: "center",
              flex: 0.06,
              borderRadius: 100
            }}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ fontSize: 10 }}>Request</Text>
          <Text style={{ fontSize: 10 }}>Nominate</Text>
          <Text style={{ fontSize: 10 }}>Endorse</Text>
          <Text style={{ fontSize: 10 }}>Approve</Text>
        </View>
      </View>
    );
  }
}

export default TrackingBar;