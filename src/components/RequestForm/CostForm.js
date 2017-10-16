import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";
import Next from "react-native-vector-icons/Entypo";
import { Dropdown } from "react-native-material-dropdown";

class FinancialForm extends React.Component {
  render() {
    let data = [
      {
        value: "TM Sponsor"
      },
      {
        value: "Sponsorship"
      }
    ];

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
          Costing Information
        </Text>

        <View style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
            <Text style={{ fontSize: 12, paddingVertical: 16 }}>Cost</Text>
            <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
              <TextInput
                style={{
                  color: "#ee7202",
                  fontSize: 16,
                  paddingBottom: 8,
                  alignItems: "flex-end"
                }}
                placeholder="e.g. RM43,000.00"
                clearButtonMode="always"
                underlineColorAndroid="rgba(0,0,0,0)"
              />
            </View>
          </View>

          <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
            <Text style={{ fontSize: 12, paddingVertical: 16 }}>Budget</Text>
            <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
              <TextInput
                style={{
                  color: "#ee7202",
                  fontSize: 16,
                  paddingBottom: 8,
                  alignItems: "flex-end"
                }}
                placeholder="e.g. RM46,000.00"
                clearButtonMode="always"
                underlineColorAndroid="rgba(0,0,0,0)"
              />
            </View>
          </View>

          <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
            <Text style={{ fontSize: 12, paddingVertical: 16 }}>
              Cost Centre
            </Text>
            <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
              <TextInput
                style={{
                  color: "#ee7202",
                  fontSize: 16,
                  paddingBottom: 8,
                  alignItems: "flex-end"
                }}
                placeholder="e.g. BMCE02"
                clearButtonMode="always"
                underlineColorAndroid="rgba(0,0,0,0)"
              />
            </View>
          </View>

          <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
            <Text style={{ fontSize: 12, paddingVertical: 16 }}>
              Cost Category
            </Text>
            <View style={{ borderColor: "#c4c4c4" }}>
              <Dropdown
                placeholder="e.g. TM Sponsor"
                labelHeight={0}
                label=""
                data={data}
                onSelect={data === "Sponsorship"}
              />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            LongPress={() => null}
            style={{
              flex: 0.1,
              alignItems: "center",
              padding: 16,
              marginVertical: 16,
              borderRadius: 100,
              backgroundColor: "grey"
            }}
          >
            <Next name="chevron-thin-left" size={24} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity
            LongPress={() => null}
            style={{
              flex: 0.1,
              alignItems: "center",
              padding: 16,
              marginLeft: 8,
              marginVertical: 16,
              borderRadius: 100,
              backgroundColor: "grey"
            }}
          >
            <Next name="chevron-thin-right" size={24} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default FinancialForm;
