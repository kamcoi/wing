import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import NavigationBar from "react-native-navbar";

const leftButtonConfig = {
  title: "Exit",
  handler: () =>
    Alert.alert("Save and Exit?", "Test", [
      {
        text: "Yes",
        style: "default"
      },
      {
        text: "No",
        style: "default"
      }
    ])
};

const titleConfig = {
  title: "New Request"
};

class RequestForm extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, backgroundColor: "#ffffff" }}
      >
        <NavigationBar
          style={{ borderColor: "#f27178", borderBottomWidth: 1 }}
          title={titleConfig}
          leftButton={leftButtonConfig}
        />
        <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Fill up the form
          </Text>
        </View>

        <FormBar />

        <ScrollView>
          <ProfileQuestion />

          <View
            style={{
              flexDirection: "row",
              paddingVertical: 24,
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flex: 0.4,
                alignItems: "center",
                borderColor: "#c4c4c4",
                borderWidth: 1,
                paddingVertical: 8,
                marginRight: 8,
                borderRadius: 100
              }}
            >
              <Text style={{ color: "#c4c4c4" }}>Back</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigate("TravelForm")}
              style={{
                flex: 0.4,
                alignItems: "center",
                borderColor: "grey",
                borderWidth: 1,
                paddingVertical: 8,
                borderRadius: 100
              }}
            >
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default RequestForm;

const FormBar = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-around",
      paddingTop: 8,
      paddingBottom: 24
    }}
  >
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#f27178",
        paddingBottom: 4,
        flex: 0.2,
        justifyContent: "center"
      }}
    >
      <View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
        <Icon name="user" size={24} color="#f27178" />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontSize: 12, color: "#f27178" }}>One</Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: "row",
        paddingBottom: 4,
        flex: 0.2,
        justifyContent: "center"
      }}
    >
      <View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
        <Icon name="location" size={24} color="#000000" />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontSize: 12 }}>Two</Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: "row",
        paddingBottom: 4,
        flex: 0.2,
        justifyContent: "center"
      }}
    >
      <View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
        <Icon name="credit-card" size={24} color="#000000" />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontSize: 12 }}>Three</Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: "row",
        paddingBottom: 4,
        flex: 0.2,
        justifyContent: "center"
      }}
    >
      <View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
        <Icon name="check" size={24} color="#000000" />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontSize: 12 }}>Four</Text>
      </View>
    </View>
  </View>
);

const ProfileQuestion = () => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 8,
        marginHorizontal: 40,
        borderRadius: 100,
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderColor: "#f27178",
        borderWidth: 2,
        borderRadius: 100
      }}
    >
      <Text
        style={{
          paddingHorizontal: 8,
          fontSize: 18,
          fontWeight: "bold",
          color: "#f27178"
        }}
      >
        Profile Information
      </Text>
    </View>
    <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
      <Text style={{ fontSize: 12, paddingVertical: 16 }}>Name</Text>
      <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
        <TextInput
          style={{
            color: "#ee7202",
            fontSize: 16,
            paddingBottom: 8,
            alignItems: "flex-end"
          }}
          placeholder="Full Name"
          clearButtonMode="always"
          underlineColorAndroid="rgba(0,0,0,0)"
        />
      </View>
    </View>

    <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
      <Text style={{ fontSize: 12, paddingVertical: 16 }}>Division</Text>
      <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
        <TextInput
          style={{
            color: "#ee7202",
            fontSize: 16,
            paddingBottom: 8,
            alignItems: "flex-end"
          }}
          placeholder="e.g. Group Finance"
          clearButtonMode="always"
          underlineColorAndroid="rgba(0,0,0,0)"
        />
      </View>
    </View>

    <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
      <Text style={{ fontSize: 12, paddingVertical: 16 }}>
        Additional Travellers
      </Text>
      <View>
        <TouchableOpacity onPress={() => null}>
          <Text
            style={{
              fontSize: 16,
              paddingVertical: 4,
              color: "#f44242"
            }}
          >
            + Add Travellers
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
