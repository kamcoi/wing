import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import Requestor from "./Requestor/Requestor";

const Stack = StackNavigator(
  {
    Requestor: {
      screen: Requestor,
      navigationOptions: ({ navigation }) => ({
        headerTitle: (
          <View
            style={{
              flex: 1,
              alignSelf: "center",
              justifyContent: "center",
              paddingTop: 15,
              paddingBottom: 5
            }}
          >
            <Image
              source={{ uri: "https://www.wing.eu/images/wing-logo-blue.svg" }}
              style={{
                flex: 1,
                width: 65,
                height: 70,
                resizeMode: "stretch"
              }}
            />
          </View>
        )
      })
    }
  },
  {
    initialRouteName: "Requestor"
  }
);

export default Stack;
