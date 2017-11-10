import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Menu from "react-native-vector-icons/Entypo";
import Dot from "react-native-vector-icons/Entypo";

class GuidelineHome extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("GuidelineContent")}
            style={styles.guidelineBox}
          >
            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <Text style={{ fontSize: 16 }}>Applicability</Text>
            </View>
            <View style={styles.nextIconBox}>
              <Icon name="chevron-right" size={32} color="#000000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("GuidelineContent")}
            style={styles.guidelineBox}
          >
            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <Text style={{ fontSize: 16 }}>Oversea Travel Requirement</Text>
            </View>
            <View style={styles.nextIconBox}>
              <Icon name="chevron-right" size={32} color="#000000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("GuidelineContent")}
            View
            style={styles.guidelineBox}
          >
            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <Text style={{ fontSize: 16 }}>Approval</Text>
            </View>
            <View style={styles.nextIconBox}>
              <Icon name="chevron-right" size={32} color="#000000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("GuidelineContent")}
            style={styles.guidelineBox}
          >
            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <Text style={{ fontSize: 16 }}>Monitoring of Travel</Text>
            </View>
            <View style={styles.nextIconBox}>
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

const styles = StyleSheet.create({
  guidelineBox: {
    flexDirection: "row",
    marginHorizontal: 8,
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderColor: "#c4c4c4"
  },
  nextIconBox: {
    flex: 0.2,
    alignItems: "flex-end",
    justifyContent: "center"
  }
});
