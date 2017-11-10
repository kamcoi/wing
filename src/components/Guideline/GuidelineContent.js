import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Check from "react-native-vector-icons/EvilIcons";
import Icon from "react-native-vector-icons/Entypo";

//
// class GuidelineContent extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             paddingTop: 32,
//             paddingBottom: 8,
//             marginBottom: 16
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => this.props.navigation.goBack()}
//             style={{ flex: 0.15, alignItems: "center" }}
//           >
//             <Icon name="chevron-left" size={24} color="#000000" />
//           </TouchableOpacity>
//         </View>
//
//         <ScrollView style={{ flex: 1 }}>
//           <Text
//             style={{
//               fontSize: 16,
//               fontWeight: "bold",
//               paddingHorizontal: 24,
//               paddingBottom: 24
//             }}
//           >
//             Hi
//           </Text>
//           <View
//             style={{
//               flexDirection: "row",
//               paddingBottom: 24,
//               paddingHorizontal: 24
//             }}
//           >
//             <Check
//               style={{ paddingRight: 8, paddingTop: 2 }}
//               name="check"
//               size={32}
//               color="#c4c4c4"
//             />
//             <Text style={{ fontSize: 16, paddingBottom: 8, lineHeight: 24 }}>
//               What is your name?
//             </Text>
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

const contents = [
  {
    header: "Applicability",
    data: [
      {
        text:
          "Some of these travel mishaps can be avoided and some of them are just a part of traveling. You simply cannot plan for everything. However, keeping a few important things in mind will make your travels much easier. So, in no particular order, here are my 25 best travel tips:"
      },
      {
        text:
          "Some of these travel mishaps can be avoided and some of them are just a part of traveling. You simply cannot plan for everything. However, keeping a few important things in mind will make your travels much easier. So, in no particular order, here are my 25 best travel tips:"
      },
      {
        text:
          "Some of these travel mishaps can be avoided and some of them are just a part of traveling. You simply cannot plan for everything. However, keeping a few important things in mind will make your travels much easier. So, in no particular order, here are my 25 best travel tips:"
      }
    ]
  }
];

const GuidelineSingle = ({ header, data }) => (
  <View style={{ paddingHorizontal: 16, paddingTop: 24 }}>
    <Text style={{ fontSize: 16, fontWeight: "bold", paddingBottom: 24 }}>
      {header}
    </Text>
    {data.map(guidelineList => <GuidelineList text={guidelineList.text} />)}
  </View>
);

const GuidelineList = ({ text }) => (
  <View style={{ flexDirection: "row", paddingBottom: 24 }}>
    <Check
      style={{ paddingRight: 8, paddingTop: 2 }}
      name="check"
      size={32}
      color="#c4c4c4"
    />
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 16, paddingBottom: 8, lineHeight: 24 }}>
        {text}
      </Text>
    </View>
  </View>
);

class GuidelineContent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            flex: 0.1,
            justifyContent: "flex-end",
            paddingHorizontal: 16
          }}
        >
          <Icon name="chevron-left" size={24} color="#000000" />
        </TouchableOpacity>

        <ScrollView style={{ flex: 1 }}>
          {contents.map(content => (
            <GuidelineSingle header={content.header} data={content.data} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default GuidelineContent;
