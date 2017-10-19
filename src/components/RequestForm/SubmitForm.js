import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class SubmitForm extends React.Component {
  render() {
    return (
      <View
        style={{
          shadowOpacity: 0.7,
          height: "100%",
          width: "90%",
          paddingHorizontal: 8,
          paddingVertical: 8,
          justifyContent: "flex-start",
          backgroundColor: "#ffffff",
          borderRadius: 20
        }}
      >
        <View>
          <Text
            style={{
              paddingHorizontal: 8,
              paddingTop: 24,
              paddingBottom: 24,
              fontSize: 24,
              fontWeight: "bold"
            }}
          >
            Request Confirmation
          </Text>
        </View>

        <View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
          <Text style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}>
            Seremban, Negeri Sembilan
          </Text>
          <Text style={{ fontSize: 12, paddingBottom: 4 }}>Site Survey</Text>
          <Text style={{ fontSize: 12 }}>17 Sept to 18 Oct 2016</Text>
        </View>

        <View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
          <Text style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}>
            Mohammad Hafiz bin Burhan
          </Text>
          <Text style={{ fontSize: 12, paddingBottom: 16 }}>
            Group Digital Centre
          </Text>
          <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
            Additional Travellers
          </Text>
          <Text
            style={{
              paddingLeft: 8,
              fontSize: 14,
              paddingBottom: 4,
              fontWeight: "bold"
            }}
          >
            Ali Muhd Wasil bin Ali Absar
          </Text>
          <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
            Group Digital Centre
          </Text>
          <Text
            style={{
              paddingLeft: 8,
              fontSize: 14,
              paddingBottom: 4,
              fontWeight: "bold"
            }}
          >
            Engku Fariez bin Engku Azahan
          </Text>
          <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
            Group Digital Centre
          </Text>
          <Text
            style={{
              paddingLeft: 8,
              fontSize: 14,
              paddingBottom: 4,
              fontWeight: "bold"
            }}
          >
            Khairold Safri bin Ibrahim
          </Text>
          <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
            Group Digital Centre
          </Text>
        </View>

        <View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
          <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
            Approvers
          </Text>
          <Text style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}>
            Hasniza binti Mohamed
          </Text>
          <Text style={{ fontSize: 12, paddingBottom: 12 }}>Nominator</Text>
          <Text style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}>
            Ahmad Azhar bin Yahya
          </Text>
          <Text style={{ fontSize: 12, paddingBottom: 12 }}>Endorser</Text>
          <Text style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}>
            Dato Sri Mohammed Shazalli bin Ramly
          </Text>
          <Text style={{ fontSize: 12, paddingBottom: 12 }}>Approver</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 8,
            borderBottomWidth: 0.5,
            borderColor: "#c4c4c4"
          }}
        >
          <Text style={{ paddingLeft: 8, color: "grey" }}>Budget (BMCE02)</Text>
          <Text style={{ paddingRight: 8, color: "grey" }}>RM43,000.00</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 16
          }}
        >
          <Text style={{ paddingLeft: 8, fontSize: 18 }}>Cost</Text>
          <Text style={{ paddingRight: 8, fontSize: 18, fontWeight: "bold" }}>
            RM43,000.00
          </Text>
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
            <Text>Edit</Text>
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
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SubmitForm;
