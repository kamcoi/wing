import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

class RequestForm extends React.Component {
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
        <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Fill up the form
          </Text>
        </View>

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

        <View style={{ flex: 1 }}>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              marginHorizontal: 40,
              borderRadius: 100,
              alignItems: "center",
              backgroundColor: "#f27178"
            }}
          >
            <Text
              style={{
                paddingHorizontal: 8,
                fontSize: 20,
                fontWeight: "bold"
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
              paddingVertical: 8,
              marginRight: 8,
              borderRadius: 100
            }}
          >
            <Text>Back</Text>
          </TouchableOpacity>
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
      </View>
    );
  }
}

// class RequestForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { page: "personal" };
//   }
//   render() {
//     const { navigate } = this.props.navigation;
//     let displayedPage;
//     switch (this.state.page) {
//       case "personal":
//         displayedPage = <PersonalForm />;
//         break;
//       case "travel":
//         displayedPage = <TravelForm />;
//         break;
//       case "cost":
//         displayedPage = <CostForm />;
//         break;
//       case "approval":
//         displayedPage = <ApprovalForm />;
//         break;
//       case "submit":
//         displayedPage = <SubmitForm />;
//         break;
//       default:
//         displayedPage = <PersonalForm />;
//     }
//     return (
//       <View behavior="padding" style={{ flex: 1, backgroundColor: "#ffffff" }}>
//         <View
//           style={{
//             height: 60,
//             backgroundColor: "white",
//             paddingTop: 32,
//             alignItems: "center"
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>Application Form</Text>
//         </View>
//
//         <View
//           style={{
//             flex: 0.05,
//             flexDirection: "row",
//             marginHorizontal: 18,
//             marginVertical: 26
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => this.setState({ page: "personal" })}
//             style={[
//               {
//                 flex: 0.25,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderWidth: 1,
//                 borderRightWidth: 0,
//                 borderTopLeftRadius: 8,
//                 borderBottomLeftRadius: 8,
//                 backgroundColor: "#ffffff"
//               },
//               this.state.page === "personal" && { backgroundColor: "#f47178" }
//             ]}
//           >
//             <Text
//               style={[
//                 { fontSize: 12, color: "black" },
//                 this.state.page === "personal" && { color: "#ffffff" }
//               ]}
//             >
//               Profile
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => this.setState({ page: "travel" })}
//             style={[
//               {
//                 flex: 0.25,
//                 backgroundColor: "white",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderWidth: 1,
//                 borderRightWidth: 0,
//                 borderTopLeftRadius: 0,
//                 borderBottomLeftRadius: 0
//               },
//               this.state.page === "travel" && { backgroundColor: "#f47178" }
//             ]}
//           >
//             <Text
//               style={[
//                 { fontSize: 12, color: "black" },
//                 this.state.page === "travel" && { color: "#ffffff" }
//               ]}
//             >
//               Travel
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => this.setState({ page: "cost" })}
//             style={[
//               {
//                 flex: 0.25,
//                 backgroundColor: "white",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderWidth: 1
//               },
//               this.state.page === "cost" && { backgroundColor: "#f47178" }
//             ]}
//           >
//             <Text
//               style={[
//                 { fontSize: 12, color: "black" },
//                 this.state.page === "cost" && { color: "#ffffff" }
//               ]}
//             >
//               Cost
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => this.setState({ page: "approval" })}
//             style={[
//               {
//                 flex: 0.25,
//                 backgroundColor: "white",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderWidth: 1,
//                 borderLeftWidth: 0
//               },
//               this.state.page === "approval" && { backgroundColor: "#f47178" }
//             ]}
//           >
//             <Text
//               style={[
//                 { fontSize: 12, color: "black" },
//                 this.state.page === "approval" && { color: "#ffffff" }
//               ]}
//             >
//               Approval
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => this.setState({ page: "submit" })}
//             style={[
//               {
//                 flex: 0.25,
//                 backgroundColor: "white",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderWidth: 1,
//                 borderLeftWidth: 0,
//                 borderTopRightRadius: 8,
//                 borderBottomRightRadius: 8
//               },
//               this.state.page === "submit" && { backgroundColor: "#f47178" }
//             ]}
//           >
//             <Text
//               style={[
//                 { fontSize: 12 },
//                 this.state.page === "submit" && { color: "#ffffff" }
//               ]}
//             >
//               Submit
//             </Text>
//           </TouchableOpacity>
//         </View>
//
//         <ScrollView style={{ flex: 1 }}>
//           <View
//             style={{ alignItems: "center", paddingTop: 8, paddingBottom: 24 }}
//           >
//             {displayedPage}
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

export default RequestForm;
