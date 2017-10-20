import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Next from "react-native-vector-icons/Entypo";

class PersonalForm extends React.Component {
  render() {
    const { navigate } = this.props;
    return (
      <View
        style={{
          shadowOpacity: 0.7,
          height: "100%",
          width: "90%",
          paddingHorizontal: 8,
          paddingVertical: 16,
          marginBottom: 16,
          justifyContent: "flex-start",
          backgroundColor: "#ffffff",
          borderRadius: 20
        }}
      >
        <Text
          style={{
            paddingHorizontal: 8,
            paddingTop: 8,
            paddingBottom: 8,
            fontSize: 24,
            fontWeight: "bold"
          }}
        >
          Profile Information
        </Text>

        <View style={{ flex: 1 }}>
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
              <TouchableOpacity onPress={() => navigate("AddFriends")}>
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

        <View
          style={{
            flexDirection: "row",
            paddingVertical: 24,
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity
            onPress={() => null}
            style={{
              flex: 0.4,
              alignItems: "center",
              borderColor: "grey",
              borderWidth: 1,
              paddingVertical: 8,
              borderRadius: 100
            }}
          >
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => null}
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
      </View>
    );
  }
}

export default PersonalForm;
