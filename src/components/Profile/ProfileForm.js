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

class ProfileForm extends React.Component {
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
          title={{ title: "New Request" }}
          leftButton={{
            title: "Exit",
            handler: () =>
              Alert.alert("confirm to Exit without submitting?", "Lala", [
                {
                  text: "No",
                  style: "destructive"
                },
                {
                  text: "Yes",
                  onPress: () => navigate("Request"),
                  style: "default"
                }
              ])
          }}
        />

        <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Step 1: Profile Information
          </Text>
        </View>

        <FormBar />

        <ScrollView>
          <View style={{ flex: 1 }}>
            <View
              style={{
                paddingHorizontal: 16,
                paddingBottom: 16,
                paddingTop: 24
              }}
            >
              <Text style={{ fontSize: 12, paddingBottom: 16 }}>Name</Text>
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
              <Text style={{ fontSize: 12, paddingVertical: 16 }}>
                Division
              </Text>
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
                <TouchableOpacity
                  onPress={() => navigate("AddFriends", { reedit: 0 })}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      paddingVertical: 4,
                      color: "#f44242"
                    }}
                  >
                    + Add Friends
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            paddingVertical: 4,
            justifyContent: "center"
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginRight: 16,
              borderRadius: 100
            }}
          >
            <Icon name="chevron-left" size={32} color="#000000" />
          </View>
          <TouchableOpacity
            onPress={() => navigate("TravelForm", { reedit: 0 })}
            style={{
              alignItems: "center",
              borderRadius: 100
            }}
          >
            <Icon name="chevron-right" size={32} color="#000000" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default ProfileForm;

const FormBar = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-around",
      paddingTop: 8,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "#c4c4c4"
    }}
  >
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 2,
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
