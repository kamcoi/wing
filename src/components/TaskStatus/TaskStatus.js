import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Send from "react-native-vector-icons/MaterialIcons";
import NavigationBar from "react-native-navbar";

class TaskStatus extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    const { status } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar
          style={{
            borderColor: "#f27178",
            borderBottomWidth: 1
          }}
          title={{ title: "Task Status" }}
          leftButton={{
            title: "Back",
            handler: () => goBack()
          }}
        />

        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
          <View
            style={{
              paddingVertical: 24,
              paddingHorizontal: 8,
              alignItems: "center",
              backgroundColor: "grey"
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              Request Form is pending for your approval
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 32,
              paddingHorizontal: 8
            }}
          >
            <View
              style={{
                backgroundColor: "#f27178",
                paddingHorizontal: 16,
                paddingVertical: 16,
                marginLeft: 8
              }}
            >
              <Text
                style={{
                  paddingTop: 8,
                  fontSize: 18,
                  fontWeight: "bold"
                }}
              >
                Logo
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                paddingHorizontal: 8,
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 12, textAlign: "right" }}>
                {status.ref}
              </Text>
              <Text style={{ fontSize: 12, textAlign: "right" }}>
                {status.timeStamp}
              </Text>
            </View>
          </View>

          <ProfileDetails status={status} />

          <TravelDetails status={status} />

          <CostDetails status={status} />

          <TouchableOpacity
            onPress={() => navigate("Comments")}
            style={{
              flex: 1,
              flexDirection: "row",
              paddingVertical: 24,
              paddingHorizontal: 16
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <Icon name="comment" size={32} color="#000000" />
            </View>
            <View style={{ paddingLeft: 8 }}>
              <Text style={{ fontWeight: "bold", paddingBottom: 4 }}>
                {status.endorserName}
              </Text>
              <Text>{status.commentTextLatest}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <CalltoAction navigate={navigate} />
      </View>
    );
  }
}

export default TaskStatus;

const ProfileDetails = ({ status }) => (
  <View
    style={{
      paddingBottom: 40,
      paddingHorizontal: 8,
      borderBottomWidth: 0.3,
      borderColor: "#c4c4c4",
      marginHorizontal: 8
    }}
  >
    <Text style={{ fontSize: 12, paddingBottom: 8, color: "#a9a9a9" }}>
      Profile Details
    </Text>
    <Text style={{ fontSize: 16, paddingBottom: 4, fontWeight: "bold" }}>
      {status.requestorName}
    </Text>
    <Text style={{ fontSize: 16, paddingBottom: 24, color: "#000000" }}>
      {status.requestorDivision}
    </Text>
    <Text style={{ fontSize: 12, paddingBottom: 8, color: "#a9a9a9" }}>
      Other Travellers
    </Text>
    <Text
      style={{
        fontSize: 16,
        paddingBottom: 4,
        fontWeight: "bold"
      }}
    >
      {status.additionalTravellerName1}
    </Text>
    <Text
      style={{
        fontSize: 16,
        paddingBottom: 12
      }}
    >
      {status.additionalTravellerDivision1}
    </Text>
    <Text
      style={{
        fontSize: 14,
        paddingBottom: 4,
        fontWeight: "bold"
      }}
    >
      {status.additionalTravellerName2}
    </Text>
    <Text
      style={{
        fontSize: 16,
        paddingBottom: 12
      }}
    >
      {status.additionalTravellerDivision2}
    </Text>
    <Text
      style={{
        fontSize: 14,
        paddingBottom: 4,
        fontWeight: "bold"
      }}
    >
      {status.additionalTravellerName3}
    </Text>
    <Text
      style={{
        fontSize: 16
      }}
    >
      {status.additionalTravellerDivision3}
    </Text>
  </View>
);

const TravelDetails = ({ status }) => (
  <View
    style={{
      paddingHorizontal: 8,
      paddingVertical: 40,
      marginHorizontal: 8,
      borderBottomWidth: 0.5,
      borderColor: "#c4c4c4"
    }}
  >
    <Text style={{ fontSize: 12, paddingBottom: 8, color: "#a9a9a9" }}>
      Travel Details
    </Text>
    <Text style={{ fontSize: 16, paddingBottom: 24, fontWeight: "bold" }}>
      {status.destination}
    </Text>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 24
      }}
    >
      <View>
        <Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
          Departure
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          {status.travelFrom} 2016
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
          Arrival
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          {status.travelUntil} 2016
        </Text>
      </View>
    </View>
    <Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
      Travel Type
    </Text>
    <Text style={{ fontSize: 16, paddingBottom: 24, fontWeight: "bold" }}>
      {status.travelType}
    </Text>
    <Text style={{ fontSize: 12, paddingBottom: 8, color: "#a9a9a9" }}>
      Justification
    </Text>
    <Text style={{ fontSize: 16, lineHeight: 24, fontWeight: "bold" }}>
      {status.justificationText}
    </Text>
  </View>
);

const CostDetails = ({ status }) => (
  <View
    style={{
      flexDirection: "row",
      paddingHorizontal: 8,
      paddingVertical: 40,
      marginHorizontal: 8,
      justifyContent: "space-between",
      borderBottomWidth: 0.5,
      borderColor: "#c4c4c4"
    }}
  >
    <View>
      {status.costCategory ? (
        <Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
          Budget {status.costCategory}
        </Text>
      ) : (
        <Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
          Budget {status.costCentre}
        </Text>
      )}
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        RM{status.budget}
      </Text>
    </View>
    <View>
      <Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
        Cost
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>RM{status.cost}</Text>
    </View>
  </View>
);

// const CostDetails = ({ status }) => (
//   <View style={{ paddingBottom: 40, paddingHorizontal: 16 }}>
//     <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
//       Cost Details
//     </Text>
//     <View
//       style={{
//         flexDirection: "row",
//         justifyContent: "space-between",
//         paddingBottom: 8,
//         borderBottomWidth: 0.5,
//         borderColor: "#c4c4c4"
//       }}
//     >
//       <Text style={{ color: "grey" }}>Budget {status.costCentre}</Text>
//       <Text style={{ paddingRight: 8, color: "grey" }}>RM{status.budget}</Text>
//     </View>
//     <View
//       style={{
//         flexDirection: "row",
//         justifyContent: "space-between",
//         paddingVertical: 8
//       }}
//     >
//       <Text style={{ fontSize: 18 }}>TOTAL</Text>
//       <Text style={{ paddingRight: 8, fontSize: 18, fontWeight: "bold" }}>
//         RM{status.cost}
//       </Text>
//     </View>
//   </View>
// );

const CalltoAction = ({ navigate, status }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-around",
      paddingVertical: 8
    }}
  >
    <TouchableOpacity
      onPress={() =>
        Alert.alert("Really!", "Confirm to Reject the Request?", [
          {
            text: "Back",
            onPress: () => console.log("Ask"),
            style: "default"
          },
          {
            text: "Reject",
            onPress: () => navigate("Task"),
            style: "default"
          }
        ])}
      style={{
        alignItems: "center",
        borderColor: "grey"
      }}
    >
      <Text style={{ fontSize: 16, color: "#a9a9a9", padding: 16 }}>
        Reject
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        Alert.alert(
          "Attention",
          "Are you ready to Approve the Travel Request",
          [
            {
              text: "Back",
              onPress: () => console.log("Ask"),
              style: "default"
            },
            {
              text: "Confirm",
              onPress: () => navigate("Task"),
              style: "default"
            }
          ]
        )}
      style={{
        alignItems: "center",
        borderColor: "grey"
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: "green",
          backgroundColor: "red",
          padding: 16
        }}
      >
        Approve
      </Text>
    </TouchableOpacity>
  </View>
);
