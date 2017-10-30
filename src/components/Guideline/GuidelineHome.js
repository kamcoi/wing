import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Menu from "react-native-vector-icons/Ionicons";
import Dot from "react-native-vector-icons/Entypo";

class GuidelineHome extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
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
            <Text style={{ fontSize: 16 }}>Guideline</Text>
          </View>
          <View style={{ flex: 0.15 }}>
            <Text />
          </View>
        </View>

        <ScrollView style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("GuidelineContent")}
            style={{
              flexDirection: "row",
              marginHorizontal: 8,
              paddingHorizontal: 8,
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderColor: "#c4c4c4"
            }}
          >
            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <Text style={{ fontSize: 16 }}>Applicability</Text>
            </View>
            <View
              style={{
                flex: 0.2,
                alignItems: "flex-end",
                justifyContent: "center"
              }}
            >
              <Icon name="chevron-right" size={32} color="#000000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("GuidelineContent")}
            style={{
              flexDirection: "row",
              marginHorizontal: 8,
              paddingHorizontal: 8,
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderColor: "#c4c4c4"
            }}
          >
            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <Text style={{ fontSize: 16 }}>Oversea Travel Requirement</Text>
            </View>
            <View
              style={{
                flex: 0.2,
                alignItems: "flex-end",
                justifyContent: "center"
              }}
            >
              <Icon name="chevron-right" size={32} color="#000000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("GuidelineContent")}
            View
            style={{
              flexDirection: "row",
              marginHorizontal: 8,
              paddingHorizontal: 8,
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderColor: "#c4c4c4"
            }}
          >
            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <Text style={{ fontSize: 16 }}>Approval</Text>
            </View>
            <View
              style={{
                flex: 0.2,
                alignItems: "flex-end",
                justifyContent: "center"
              }}
            >
              <Icon name="chevron-right" size={32} color="#000000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("GuidelineContent")}
            style={{
              flexDirection: "row",
              marginHorizontal: 8,
              paddingHorizontal: 8,
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderColor: "#c4c4c4"
            }}
          >
            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <Text style={{ fontSize: 16 }}>Monitoring of Travel</Text>
            </View>
            <View
              style={{
                flex: 0.2,
                alignItems: "flex-end",
                justifyContent: "center"
              }}
            >
              <Icon name="chevron-right" size={32} color="#000000" />
            </View>
          </TouchableOpacity>

          <View style={{ alignItems: "center", paddingTop: 16 }}>
            <Dot name="dot-single" size={24} color="#c4c4c4" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default GuidelineHome;
