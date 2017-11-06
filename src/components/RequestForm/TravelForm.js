import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import Next from "react-native-vector-icons/Entypo";
import { Dropdown } from "react-native-material-dropdown";
import DatePicker from "react-native-datepicker";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/EvilIcons";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import NavigationBar from "react-native-navbar";

import { setDestination } from "../../redux/requestForm/action";

class TravelForm extends React.Component {
  state = { date: "01-11-2017" };

  render() {
    // alert(0.1 + 0.1 + 0.1);
    const { navigate, state } = this.props.navigation;
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
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, backgroundColor: "#ffffff" }}
      >
        {state.params.reedit == 1 ? (
          <NavigationBar
            style={{ borderColor: "#f27178", borderBottomWidth: 1 }}
            title={{ title: "New Request" }}
            leftButton={{
              title: "Back",
              handler: () => goBack()
            }}
          />
        ) : (
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
        )}
        {state.params.reedit == 1 ? null : (
          <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Step 2: Travel Information
            </Text>
          </View>
        )}

        <FormBar />
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{ paddingHorizontal: 16, paddingBottom: 16, paddingTop: 24 }}
          >
            <Text style={{ fontSize: 12, paddingBottom: 16 }}>Destination</Text>
            <View style={{ borderColor: "#c4c4c4", borderBottomWidth: 1 }}>
              <TextInput
                style={{
                  color: "#ee7202",
                  fontSize: 16,
                  paddingBottom: 8,
                  alignItems: "flex-end"
                }}
                placeholder="e.g. Seremban, Negeri Sembilan"
                value={this.props.requestForm.destination}
                onChangeText={text => this.props.setDestination(text)}
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
              Justification for Travelling
            </Text>
            <View>
              <AutoGrowingTextInput
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#c4c4c4",
                  fontSize: 16,
                  paddingVertical: 8
                }}
                placeholder="Provide justification for your travel..."
                underlineColorAndroid="rgba(0,0,0,0)"
              />
            </View>
          </View>
        </ScrollView>
        {state.params.reedit == 1 ? null : (
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 4,
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => goBack()}
              style={{
                alignItems: "center",
                marginRight: 16,
                borderRadius: 100
              }}
            >
              <Icon name="chevron-left" size={32} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate("CostForm", { reedit: 0 })}
              style={{
                alignItems: "center",
                borderRadius: 100
              }}
            >
              <Icon name="chevron-right" size={32} color="#000000" />
            </TouchableOpacity>
          </View>
        )}
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  return {
    requestForm: state.requestForm
    // user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDestination: t => {
      dispatch(setDestination(t));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TravelForm);

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
        borderBottomWidth: 2,
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
);
