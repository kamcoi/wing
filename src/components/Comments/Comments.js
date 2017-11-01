import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList
} from "react-native";
import Send from "react-native-vector-icons/MaterialIcons";
import NavigationBar from "react-native-navbar";

class Comments extends React.Component {
  render() {
    const { goBack } = this.props.navigation;
    const { comment1, comment2 } = this.props;
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

        <View
          style={{
            marginHorizontal: 8,
            paddingHorizontal: 8,
            paddingVertical: 16,
            borderBottomWidth: 1
          }}
        >
          <Text style={{ paddingBottom: 4, fontSize: 24, fontWeight: "bold" }}>
            {comment1.destination}
          </Text>
          <Text style={{ paddingBottom: 4, fontSize: 14 }}>
            {comment1.travelFrom} until {comment1.travelUntil}
          </Text>
          <Text style={{ paddingBottom: 4, fontSize: 14 }}>
            {comment1.travelType}
          </Text>
          <View style={{ flexDirection: "row", paddingBottom: 4 }}>
            <Text style={{ fontSize: 14 }}>By:</Text>
            <Text style={{ paddingLeft: 8, fontSize: 14, color: "green" }}>
              {comment1.name}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 14 }}>Status:</Text>
            <Text style={{ paddingLeft: 8, fontSize: 14, color: "#f27178" }}>
              {comment1.statusText}
            </Text>
          </View>
        </View>

        <ScrollView style={{ flex: 1 }}>
          <FlatList
            data={comment2}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <ChatSingle
                id={item.id}
                requestorName={item.requestorName}
                commentText={item.commentText}
                submitDate={item.submitDate}
                submitTime={item.submitTime}
              />
            )}
          />
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

const ChatSingle = ({
  id,
  requestorName,
  commentText,
  submitDate,
  submitTime
}) => (
  <View
    style={{
      paddingHorizontal: 16,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderColor: "#f9f9f9",
      marginHorizontal: 8
    }}
  >
    <Text style={{ fontWeight: "bold", paddingBottom: 4 }}>
      {requestorName}
    </Text>
    <Text style={{ paddingBottom: 4, lineHeight: 18 }}>{commentText}</Text>
    <Text style={{ fontSize: 12, color: "#c4c4c4" }}>
      {submitDate}, {submitTime}
    </Text>
  </View>
);
