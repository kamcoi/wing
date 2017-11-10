import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import Send from "react-native-vector-icons/MaterialIcons";
import NavigationBar from "react-native-navbar";

const profiles = [
  {
    id: 1,
    staffName: "Ali Muhd Wasil bin Ali Absar",
    staffDivision: "Group Digital Centre"
  },
  {
    id: 2,
    staffName: "Mohammad Hafiz bin Burhan",
    staffDivision: "Group Procurement"
  }
];

const ListSingle = ({ staffName, staffDivision }) => (
  <TouchableOpacity onPress={() => null} style={styles.contactBox}>
    <Text style={{ paddingBottom: 4, fontSize: 16, fontWeight: "bold" }}>
      {staffName}
    </Text>
    <Text>{staffDivision}</Text>
  </TouchableOpacity>
);

class AddPerson extends React.Component {
  render() {
    const { goBack } = this.props.navigation;
    const { add } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <NavigationBar
          statusBar={{ showAnimation: "fade" }}
          style={{ borderColor: "#f27178", borderBottomWidth: 1 }}
          title={{ title: "Add Friends" }}
          leftButton={{
            title: "Back",
            handler: () => goBack()
          }}
        />

        <View style={styles.searchBarContainer}>
          <View style={styles.searchIconBox}>
            <Send name="search" size={24} color="#000000" />
          </View>
          <TextInput
            style={styles.textInputBox}
            placeholder="Type name here.."
            clearButtonMode="always"
          />
        </View>

        <ScrollView style={styles.friendListContainer}>
          <FlatList
            data={add}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <ListSingle
                staffName={item.staffName}
                staffDivision={item.staffDivision}
              />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

export default AddPerson;

const style = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#c4c4c4",
    paddingVertical: 8,
    marginHorizontal: 16,
    borderRadius: 100,
    marginVertical: 16
  },
  textInputBox: {
    flex: 0.9,
    paddingHorizontal: 8,
    fontSize: 14,
    color: "#000000"
  },
  searchIconBox: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  friendListContainer: {
    flex: 1,
    marginHorizontal: 8
  },
  contactBox: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#c4c4c4"
  }
});
