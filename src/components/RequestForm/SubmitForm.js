import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";

class SubmitForm extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    return (
      <View behavior="padding" style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View
          style={{
            height: 60,
            backgroundColor: "#f27178",
            paddingTop: 32,
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 16 }}>Request Form</Text>
        </View>

        <ScrollView style={{ flex: 1, paddingHorizontal: 8 }}>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              marginVertical: 24,
              marginHorizontal: 32,
              borderRadius: 100,
              alignItems: "center",
              backgroundColor: "#f27178"
            }}
          >
            <Text
              style={{
                paddingHorizontal: 8,
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
              Request Confirmation
            </Text>
          </View>
          <View>
            <Text
              style={{
                paddingHorizontal: 8,
                paddingBottom: 24,
                fontSize: 14
              }}
            >
              RefID - 001
            </Text>
          </View>

          <View style={{ paddingHorizontal: 8, paddingBottom: 16 }}>
            <Text
              style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}
            >
              Seremban, Negeri Sembilan
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 4 }}>Site Survey</Text>
            <Text style={{ fontSize: 12 }}>17 Sept to 18 Oct 2016</Text>
          </View>

          <View style={{ paddingHorizontal: 8, paddingBottom: 40 }}>
            <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
              Description
            </Text>
            <Text style={{ fontSize: 14, lineHeight: 24 }}>
              Kan ku kenang semua suara mu, oh sayang. Janganlah dikau pergi
              meninggalkan aku keseorangan di sini. Betapa kejamnya hatimu,
              sanggup meninggalkan ku seorang diri di sini.
            </Text>
          </View>

          <View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
            <Text
              style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}
            >
              Mohammad Hafiz bin Burhanuddin Helmi
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
            <Text
              style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
            >
              Hasniza binti Mohamed
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 12 }}>Nominator</Text>
            <Text
              style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
            >
              Ahmad Azhar bin Yahya
            </Text>
            <Text style={{ fontSize: 12, paddingBottom: 12 }}>Endorser</Text>
            <Text
              style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
            >
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
            <Text style={{ paddingLeft: 8, color: "grey" }}>
              Budget (BMCE02)
            </Text>
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
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            paddingVertical: 24,
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => goBack()}
            style={{
              flex: 0.4,
              alignItems: "center",
              borderColor: "grey",
              borderWidth: 1,
              marginRight: 8,
              paddingVertical: 8,
              borderRadius: 100
            }}
          >
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Confirm?", "Ready to send your Travel Request?", [
                ({
                  text: "Back",
                  onPress: () => console.log("Ask"),
                  style: "destructive"
                },
                {
                  text: "Confirm",
                  onPress: () => navigate("Main"),
                  style: "default"
                })
              ])}
            style={{
              flex: 0.4,
              alignItems: "center",
              borderColor: "grey",
              borderWidth: 1,
              paddingVertical: 8,
              borderRadius: 100
            }}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SubmitForm;
