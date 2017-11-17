import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
	KeyboardAvoidingView,
	TouchableOpacity,
	FlatList
} from "react-native";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import Send from "react-native-vector-icons/MaterialIcons";
import NavigationBar from "react-native-navbar";

class CommentsTask extends React.Component {
	render() {
		const { goBack } = this.props.navigation;
		const { taskInfo, commentDetails } = this.props;
		return (
			<View style={{ flex: 1, backgroundColor: "#ffffff" }}>
				<NavigationBar
					style={{
						borderColor: "#c4c4c4",
						borderBottomWidth: 1
					}}
					title={{ title: "Comments" }}
					leftButton={{
						title: "Back",
						handler: () => goBack()
					}}
				/>

				<ChatInfo taskInfo={taskInfo} />

				<ScrollView style={{ flex: 1 }}>
					<FlatList
						data={commentDetails}
						keyExtractor={(item, index) => item.id}
						renderItem={({ item }) => (
							<ChatSingle
								id={item.id}
								senderName={item.senderName}
								commentText={item.commentText}
								timeStamp={item.timeStamp}
							/>
						)}
					/>
				</ScrollView>

				<KeyboardAvoidingView
					behavior="padding"
					style={styles.typeCommentContainer}
				>
					<View style={styles.textInputBox}>
						<TextInput
							style={{ padding: 8, fontSize: 14 }}
							placeholder="Type your comment here.."
							underlineColorAndroid="rgba(0,0,0,0)"
						/>
					</View>
					<View style={{ justifyContent: "center", marginBottom: 8 }}>
						<TouchableOpacity onPress={() => null}>
							<Send name="send" size={24} color="#000000" />
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

export default CommentsTask;

const ChatSingle = ({ id, senderName, commentText, timeStamp }) => (
	<View
		style={{
			paddingHorizontal: 16,
			paddingVertical: 16,
			borderBottomWidth: 1,
			borderColor: "#f9f9f9",
			marginHorizontal: 8
		}}
	>
		<Text style={{ fontWeight: "bold", paddingBottom: 4 }}>{senderName}</Text>
		<Text style={{ paddingBottom: 4, lineHeight: 24 }}>{commentText}</Text>
		<Text style={{ fontSize: 12, color: "#c4c4c4" }}>{timeStamp}</Text>
	</View>
);

const ChatInfo = ({ taskInfo }) => (
	<View style={styles.travelDetailsContainer}>
		<Text style={{ paddingBottom: 4, fontSize: 16, fontWeight: "bold" }}>
			{taskInfo.destination}
		</Text>
		<Text style={{ paddingBottom: 4, fontSize: 14, color: "#808080" }}>
			{taskInfo.travelFrom} until {taskInfo.travelUntil}
		</Text>
		<Text style={{ paddingBottom: 4, fontSize: 14, color: "#808080" }}>
			{taskInfo.travelType}
		</Text>
		<View style={{ flexDirection: "row", paddingBottom: 4 }}>
			<Text style={{ fontSize: 14 }}>By:</Text>
			<Text style={{ paddingLeft: 8, fontSize: 14, color: "green" }}>
				{taskInfo.requestorName}
			</Text>
		</View>
		<View style={{ flexDirection: "row" }}>
			<Text style={{ fontSize: 14 }}>Status:</Text>
			<Text style={{ paddingLeft: 8, fontSize: 14, color: "#f27178" }}>
				{taskInfo.status}
			</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	travelDetailsContainer: {
		marginHorizontal: 8,
		paddingHorizontal: 8,
		paddingVertical: 16,
		borderBottomWidth: 0.5,
		borderColor: "#c4c4c4"
	},
	typeCommentContainer: {
		flexDirection: "row",
		borderTopWidth: 1,
		borderColor: "#c4c4c4",
		paddingVertical: 8,
		justifyContent: "space-around"
	},
	textInputBox: {
		flex: 0.9,
		marginBottom: 8
	}
});
