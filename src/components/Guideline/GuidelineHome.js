import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Menu from "react-native-vector-icons/Entypo";
import Dot from "react-native-vector-icons/Entypo";

const GuidelineListSingle = ({ navigate, title, guidelineId }) => (
	<TouchableOpacity
		onPress={() => navigate("GuidelineContent", {guidelineId: guidelineId})}
		style={styles.guidelineBox}
	>
		<View style={{ flex: 0.8, justifyContent: "center" }}>
			<Text style={{ fontSize: 16 }}>{title}</Text>
		</View>
		<View style={styles.nextIconBox}>
			<Icon name="chevron-right" size={32} color="#000000" />
		</View>
	</TouchableOpacity>
);

class GuidelineHome extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{ flex: 1 }}>
				<ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
					<GuidelineListSingle title={"Applicability"} navigate={navigate} guidelineId={1} />
					<GuidelineListSingle
						title={"Oversea Travel Requirement"}
						navigate={navigate}
						guidelineId={2}
					/>
					<GuidelineListSingle title={"Approval"} navigate={navigate} guidelineId={3}/>
					<GuidelineListSingle
						title={"Monitoring of Travel"}
						navigate={navigate}
						guidelineId={4}
					/>

					<View style={{ alignItems: "center", paddingTop: 16 }}>
						<Dot name="dot-single" size={24} color="#c4c4c4" />
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default GuidelineHome;

const styles = StyleSheet.create({
	guidelineBox: {
		flexDirection: "row",
		marginHorizontal: 8,
		paddingHorizontal: 8,
		paddingVertical: 16,
		borderBottomWidth: 0.5,
		borderColor: "#c4c4c4"
	},
	nextIconBox: {
		flex: 0.2,
		alignItems: "flex-end",
		justifyContent: "center"
	}
});
