import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Next from "react-native-vector-icons/Entypo";
import { Dropdown } from "react-native-material-dropdown";
import DatePicker from "react-native-datepicker";
import Icon from "react-native-vector-icons/EvilIcons";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";

class TravelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: "01-11-2017" };
  }
  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    let data = [
      {
        value: "Training"
      },
      {
        value: "Market Research"
      },
      {
        value: "Meetings"
      },
      {
        value: "Conference"
      },
      {
        value: "Site visit"
      },
      {
        value: "Sales visit"
      }
    ];
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
              paddingBottom: 4,
              flex: 0.2,
              justifyContent: "center"
            }}
          >
            <View style={{ justifyContent: "center", paddingHorizontal: 2 }}>
              <Icon name="user" size={24} color="#000000" />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={{ fontSize: 12 }}>One</Text>
            </View>
          </View>
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
              <Icon name="location" size={24} color="#f27178" />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={{ fontSize: 12, color: "#f27178" }}>Two</Text>
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

        <ScrollView style={{ flex: 1 }}>
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
              Travel Information
            </Text>
          </View>

          <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
            <Text style={{ fontSize: 12, paddingVertical: 16 }}>
              Destination
            </Text>
            <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
              <TextInput
                style={{
                  color: "#ee7202",
                  fontSize: 16,
                  paddingBottom: 8,
                  alignItems: "flex-end"
                }}
                placeholder="e.g. Seremban, Negeri Sembilan"
                clearButtonMode="always"
                underlineColorAndroid="rgba(0,0,0,0)"
              />
            </View>
          </View>

          <View style={{ paddingHorizontal: 16, paddingBottom: 8 }}>
            <Text style={{ fontSize: 12, paddingVertical: 8 }}>Type</Text>
            <View style={{ borderColor: "#c4c4c4" }}>
              <Dropdown
                placeholder="e.g. Training"
                labelHeight={0}
                label=""
                data={data}
              />
            </View>
          </View>

          <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
            <Text style={{ fontSize: 12, paddingVertical: 16 }}>From</Text>
            <View style={{ borderColor: "#c4c4c4" }}>
              <DatePicker
                style={{ width: 200 }}
                date={this.state.date}
                mode="date"
                format="DD-MM-YYYY"
                minDate="01-01-1990"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  this.setState({ date: date });
                }}
              />
            </View>
          </View>

          <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
            <Text style={{ fontSize: 12, paddingVertical: 16 }}>Until</Text>
            <View style={{ borderColor: "#c4c4c4" }}>
              <DatePicker
                style={{ width: 200 }}
                date={this.state.date}
                mode="date"
                format="DD-MM-YYYY"
                minDate="01-01-1990"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  this.setState({ date: date });
                }}
              />
            </View>
          </View>

          <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
            <Text style={{ fontSize: 12, paddingVertical: 16 }}>
              Description
            </Text>
            <View>
              <AutoGrowingTextInput
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#c4c4c4",
                  fontSize: 16,
                  paddingVertical: 8
                }}
                placeholder="Provide description on your travel.."
              />
            </View>
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
              paddingVertical: 8,
              marginRight: 8,
              borderRadius: 100
            }}
          >
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("CostForm")}
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

export default TravelForm;
