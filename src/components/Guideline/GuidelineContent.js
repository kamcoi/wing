import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	FlatList
} from "react-native";
import Check from "react-native-vector-icons/EvilIcons";
import Icon from "react-native-vector-icons/Entypo";

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
		const { goBack } = this.props.navigation;
		const { guideline, guideline2 } = this.props;
		return (
			<View style={{ flex: 1, backgroundColor: "#ffffff" }}>
				<TouchableOpacity
					onPress={() => goBack()}
					style={styles.navigationContainer}
				>
					<Icon name="chevron-left" size={24} color="#000000" />
				</TouchableOpacity>

				<View style={{ paddingHorizontal: 16, paddingTop: 24 }}>
					<Text style={{ fontSize: 16, fontWeight: "bold", paddingBottom: 24 }}>
						{guideline.header}
					</Text>
				</View>

				<ScrollView style={{ flex: 1, paddingHorizontal: 16 }}>
					<FlatList
						data={guideline2}
						keyExtractor={(item, index) => item.id}
						renderItem={({ item }) => <GuidelineList text={item.text} />}
					/>
				</ScrollView>
			</View>
		);
	}
}

export default GuidelineContent;

const styles = StyleSheet.create({
	navigationContainer: {
		flex: 0.1,
		justifyContent: "flex-end",
		paddingHorizontal: 16
	}
});

//
// if (state.params.id === 1){
// 		return (
// 			<View style={{ flex: 1 }}>
// 				<TouchableOpacity
// 					onPress={() => goBack()}
// 					style={styles.navigationContainer}
// 				>
// 					<Icon name="chevron-left" size={24} color="#000000" />
// 				</TouchableOpacity>
//
// 				<View style={{ paddingHorizontal: 16, paddingTop: 24 }}>
// 					<Text style={{ fontSize: 16, fontWeight: "bold", paddingBottom: 24 }}>
// 						adam
// 					</Text>
// 				</View>
//
// 				<ScrollView style={{ flex: 1, paddingHorizontal: 16 }}>
//
// 				</ScrollView>
// 			</View>
// 		)}
// 		else if (state.params.id === 2){
// 			return(
// 				<View style={{ flex: 1 }}>
// 					<TouchableOpacity
// 						onPress={() => goBack()}
// 						style={styles.navigationContainer}
// 					>
// 						<Icon name="chevron-left" size={24} color="#000000" />
// 					</TouchableOpacity>
//
// 					<View style={{ paddingHorizontal: 16, paddingTop: 24 }}>
// 						<Text style={{ fontSize: 16, fontWeight: "bold", paddingBottom: 24 }}>
// 						lala
// 						</Text>
// 					</View>

// const contents = [
//   {
//     header: "Applicability",
//     data: [
//       {
//         text:
//           "Some of these travel mishaps can be avoided and some of them are just a part of traveling. You simply cannot plan for everything. However, keeping a few important things in mind will make your travels much easier. So, in no particular order, here are my 25 best travel tips:"
//       },
//       {
//         text:
//           "Some of these travel mishaps can be avoided and some of them are just a part of traveling. You simply cannot plan for everything. However, keeping a few important things in mind will make your travels much easier. So, in no particular order, here are my 25 best travel tips:"
//       },
//       {
//         text:
//           "Some of these travel mishaps can be avoided and some of them are just a part of traveling. You simply cannot plan for everything. However, keeping a few important things in mind will make your travels much easier. So, in no particular order, here are my 25 best travel tips:"
//       }
//     ]
//   }
// ];
//
// const GuidelineSingle = ({ header, data }) => (
//   <View style={{ paddingHorizontal: 16, paddingTop: 24 }}>
//     <Text style={{ fontSize: 16, fontWeight: "bold", paddingBottom: 24 }}>
//       {header}
//     </Text>
//     {data.map(guidelineList => <GuidelineList text={guidelineList.text} />)}
//   </View>
// );
//
// const GuidelineList = ({ text }) => (
//   <View style={{ flexDirection: "row", paddingBottom: 24 }}>
//     <Check
//       style={{ paddingRight: 8, paddingTop: 2 }}
//       name="check"
//       size={32}
//       color="#c4c4c4"
//     />
//     <View style={{ flex: 1 }}>
//       <Text style={{ fontSize: 16, paddingBottom: 8, lineHeight: 24 }}>
//         {text}
//       </Text>
//     </View>
//   </View>
// );
//
// class GuidelineContent extends React.Component {
//   render() {
//     const { page } = this.props;
//     return (
//       <View style={{ flex: 1 }}>
//         <TouchableOpacity
//           onPress={() => this.props.navigation.goBack()}
//           style={styles.navigationContainer}
//         >
//           <Icon name="chevron-left" size={24} color="#000000" />
//         </TouchableOpacity>
//
//         <ScrollView style={{ flex: 1 }}>
//           {contents.map(content => (
//             <GuidelineSingle header={content.header} data={content.data} />
//           ))}
//         </ScrollView>
//       </View>
//     );
//   }
// }
