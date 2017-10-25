import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import Send from "react-native-vector-icons/MaterialIcons";
import NavigationBar from "react-native-navbar";

class Comments extends React.Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <NavigationBar
          style={{
            borderColor: "#f27178",
            borderBottomWidth: 1
          }}
          title={{ title: "Comments" }}
          leftButton={{
            title: "Back",
            handler: () => goBack()
          }}
        />

        <ChatHeading
          destination={ChatHeading.destination}
          date={ChatHeading.date}
          travelType={ChatHeading.travelType}
          name={ChatHeading.name}
        />

        <ScrollView style={{ flex: 1 }}>
          {comments.map(chatSingle => (
            <ChatSingle
              name={chatSingle.name}
              text={chatSingle.text}
              time={chatSingle.time}
            />
          ))}
        </ScrollView>

        <KeyboardAvoidingView
          behavior="padding"
          style={{
            flexDirection: "row",
            borderTopWidth: 1,
            borderColor: "#c4c4c4",
            paddingVertical: 8,
            justifyContent: "space-around"
          }}
        >
          <View
            style={{
              flex: 0.9,
              borderWidth: 1,
              borderRadius: 8,
              marginBottom: 8
            }}
          >
            <TextInput
              style={{ padding: 8, fontSize: 14 }}
              placeholder="Type your comment here.."
            />
          </View>
          <View style={{ justifyContent: "center", marginBottom: 8 }}>
            <TouchableOpacity onPress={() => null}>
              <Send name="send" size={24} color="#000000" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Comments;

const ChatHeading = ({ destination, date, travelType, name }) => (
  <View
    style={{
      marginHorizontal: 8,
      paddingHorizontal: 8,
      paddingVertical: 16,
      borderBottomWidth: 1
    }}
  >
    <Text style={{ paddingBottom: 4, fontSize: 24, fontWeight: "bold" }}>
      {details.destination}
    </Text>
    <Text style={{ paddingBottom: 4, fontSize: 14 }}>{details.date}</Text>
    <Text style={{ paddingBottom: 4, fontSize: 14 }}>{details.travelType}</Text>
    <View style={{ flexDirection: "row", paddingBottom: 4 }}>
      <Text style={{ fontSize: 14 }}>By:</Text>
      <Text style={{ paddingLeft: 8, fontSize: 14, color: "green" }}>
        {details.name}
      </Text>
    </View>
    <View style={{ flexDirection: "row" }}>
      <Text style={{ fontSize: 14 }}>Status:</Text>
      <Text style={{ paddingLeft: 8, fontSize: 14, color: "#f27178" }}>
        {details.status}
      </Text>
    </View>
  </View>
);

const ChatSingle = ({ name, text, time }) => (
  <View
    style={{
      paddingHorizontal: 16,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderColor: "#f9f9f9",
      marginHorizontal: 8
    }}
  >
    <Text style={{ fontWeight: "bold", paddingBottom: 4 }}>{name}</Text>
    <Text style={{ paddingBottom: 4, lineHeight: 18 }}>{text}</Text>
    <Text style={{ fontSize: 12, color: "#c4c4c4" }}>{time}</Text>
  </View>
);

const comments = [
  {
    name: "Ali Muhd Wasil bin Ali Absar",
    text:
      "Hafiz, where can we have all beautiful shawties around that area? I want them like right now!",
    time: "17 Oct 2017, 3.20pm"
  },
  {
    name: "Mohammad Hafiz bin Burhan",
    text:
      "Hold your horses my comrad, a good man is a man that can hold their lust without giving them up! Conquer your desire and become a great leader like Khairold!",
    time: "17 Oct 2017, 5.01pm"
  },
  {
    name: "Engku Fariez bin Engku Azahan",
    text:
      "Did you guys forget about me? Ali, Hafiz, spare me a blonde for a night? Or maybe two? Tired of having a brunette",
    time: "18 Oct 2017 8.30am"
  }
];

const details = {
  destination: "Phnom Penh, Cambodia",
  date: "2 Oct until 18 Oct 2017",
  travelType: "Meeting",
  name: "Mohammad Hafiz bin Burhan",
  status: "Nomination Rejected"
};
