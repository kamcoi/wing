import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Next from "react-native-vector-icons/Entypo";
import { Dropdown } from "react-native-material-dropdown";
import DatePicker from "react-native-datepicker";

class TravelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: "01-11-2017" };
  }
  render() {
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
          Travel Information
        </Text>

        <View style={{ flex: 1 }}>
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
            <Text style={{ fontSize: 12, paddingVertical: 16 }}>Date</Text>
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
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => this.setState({ page: "cost" })}
            style={{
              flex: 0.1,
              alignItems: "center",
              padding: 16,
              marginLeft: 8,
              marginVertical: 16,
              borderRadius: 100,
              backgroundColor: "#ffffff",
              borderWidth: 0.5
            }}
          >
            <Next name="chevron-thin-right" size={22} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TravelForm;
