import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  StatusBar
} from "react-native";
import NavigationBar from "react-native-navbar";
import Send from "react-native-vector-icons/Ionicons";

class SubmitForm extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    const { submit, user } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <StatusBar
          backgroundColor="black"
          setBackgroundColor="#f27178"
          barStyle="dark-content"
        />
        <NavigationBar
          style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}
          title={{ title: "Confirmation" }}
          leftButton={{
            title: "Exit",
            handler: () =>
              Alert.alert("Warning", "Lala", [
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

        <ScrollView style={{ flex: 1, paddingHorizontal: 8 }}>
          <View style={styles.headerContainer}>
            <View style={{}}>
              <Text style={styles.logoBox}>Logo</Text>
            </View>
            <View style={{ paddingHorizontal: 8, justifyContent: "center" }}>
              <Text style={{ fontSize: 12 }}>{submit.ref}</Text>
              <Text style={{ fontSize: 12 }}>{submit.timeStamp}</Text>
            </View>
          </View>

          <TravelDetails submit={submit} navigate={navigate} />

          <ProfileDetails submit={submit} user={user} />

          <ApproverDetails submit={submit} />

          <CostDetails submit={submit} />
        </ScrollView>

        <View style={{ backgroundColor: "#f3f3f3" }}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Attention!", "Ready to Submit?", [
                {
                  text: "No",
                  style: "destructive"
                },
                {
                  text: "Yes",
                  onPress: () => navigate("Request"),
                  style: "default"
                }
              ])}
            style={styles.submitButton}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SubmitForm;

const TravelDetails = ({ submit, navigate }) => (
  <View style={{ paddingHorizontal: 8, paddingBottom: 40 }}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 12, paddingBottom: 12, color: "#f27178" }}>
        Travel Details
      </Text>
      <TouchableOpacity
        onPress={() => navigate("TravelForm", { reedit: 1 })}
        style={{ paddingBottom: 8 }}
      >
        <Text style={{ fontSize: 12, color: "green" }}>Edit</Text>
      </TouchableOpacity>
    </View>
    <Text style={{ fontSize: 16, paddingBottom: 8, fontWeight: "bold" }}>
      {submit.destination}
    </Text>
    <Text style={{ fontSize: 14, paddingBottom: 8 }}>
      {submit.travelFrom} until {submit.travelUntil} 2016
    </Text>
    <Text style={{ fontSize: 14, paddingBottom: 8 }}>{submit.travelType}</Text>
    <Text style={{ fontSize: 12, paddingBottom: 8, color: "#c4c4c4" }}>
      Description
    </Text>
    <Text style={{ fontSize: 14, lineHeight: 24, textAlign: "justify" }}>
      {submit.justificationText}
    </Text>
  </View>
);

const ProfileDetails = ({ user, submit }) => (
  <View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
        Profile Details
      </Text>
      <TouchableOpacity
        onPress={() => navigate("ProfileForm", { reedit: 1 })}
        style={{ paddingBottom: 8 }}
      >
        <Text style={{ fontSize: 12, color: "green" }}>Edit</Text>
      </TouchableOpacity>
    </View>
    <Text style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}>
      {user.name}
    </Text>
    <Text style={{ fontSize: 12, paddingBottom: 16 }}>{user.division}</Text>
    <Text style={{ fontSize: 12, paddingBottom: 8, color: "#c4c4c4" }}>
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
      {submit.additionalTravellerName1}
    </Text>
    <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
      {submit.additionalTravellerDivision1}
    </Text>
    <Text
      style={{
        paddingLeft: 8,
        fontSize: 14,
        paddingBottom: 4,
        fontWeight: "bold"
      }}
    >
      {submit.additionalTravellerName2}
    </Text>
    <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
      {submit.additionalTravellerDivision2}
    </Text>
    <Text
      style={{
        paddingLeft: 8,
        fontSize: 14,
        paddingBottom: 4,
        fontWeight: "bold"
      }}
    >
      {submit.additionalTravellerName3}
    </Text>
    <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
      {submit.additionalTravellerDivision3}
    </Text>
  </View>
);

const ApproverDetails = ({ submit }) => (
  <View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
        Approvers Details
      </Text>
      <TouchableOpacity
        onPress={() => navigate("ApprovalForm", { reedit: 1 })}
        style={{ paddingBottom: 8 }}
      >
        <Text style={{ fontSize: 12, color: "green" }}>Edit</Text>
      </TouchableOpacity>
    </View>
    <Text style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}>
      {submit.nominatorName}
    </Text>
    <Text style={{ fontSize: 12, paddingBottom: 12 }}>Nominator</Text>
    <Text style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}>
      {submit.endorserName}
    </Text>
    <Text style={{ fontSize: 12, paddingBottom: 12 }}>Endorser</Text>
    <Text style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}>
      {submit.approverName}
    </Text>
    <Text style={{ fontSize: 12, paddingBottom: 12 }}>Approver</Text>
  </View>
);

const CostDetails = ({ submit }) => (
  <View style={{ paddingBottom: 40, paddingHorizontal: 8 }}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
        Cost Details
      </Text>
      <TouchableOpacity
        onPress={() => navigate("CostForm", { reedit: 1 })}
        style={{ paddingBottom: 8 }}
      >
        <Text style={{ fontSize: 12, color: "green" }}>Edit</Text>
      </TouchableOpacity>
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
      <Text style={{ color: "grey" }}>Budget - {submit.costCategory}</Text>
      <Text style={{ paddingRight: 8, color: "grey" }}>{submit.budget}</Text>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8
      }}
    >
      <Text style={{ fontSize: 18 }}>TOTAL</Text>
      <Text style={{ paddingRight: 8, fontSize: 18, fontWeight: "bold" }}>
        {submit.cost}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginBottom: 40
  },
  logoBox: {
    backgroundColor: "#f27178",
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginLeft: 8
  },
  submitButton: {
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#4cd964",
    marginVertical: 8,
    marginHorizontal: 60
  },
  submitButtonText: {
    paddingVertical: 16,
    paddingHorizontal: 32
  }
});
