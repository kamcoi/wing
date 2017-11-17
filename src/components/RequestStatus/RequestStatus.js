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

import Delete from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/EvilIcons";
import NavigationBar from "react-native-navbar";

import TrackingBar from "../Bar/TrackingBar";

class RequestStatus extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		const { goBack } = this.props.navigation;
		const { request1, form1 } = this.props;
		return (
			<View style={{ flex: 1, backgroundColor: "#ffffff" }}>
				<NavigationBar
					style={{
						borderColor: "#c4c4c4",
						borderBottomWidth: 1,
						marginBottom: 16
					}}
					title={{ title: "Request Status" }}
					leftButton={{
						title: "Back",
						handler: () => goBack()
					}}
				/>

				{form1.status === "eeiu" ? (
					<View style={styles.eeiuTrackingBar}>
						<Text>Pending EEIU Approval</Text>
					</View>
				) : (
					<TrackingBar status={form1.status} />
				)}

				<ScrollView style={{ flex: 1, paddingHorizontal: 8 }}>
					<View style={styles.headerContainer}>
						<View style={styles.logoBox}>
							<Text style={styles.logoText}>Logo</Text>
						</View>
						<View
							style={{
								width: "30%",
								paddingHorizontal: 8,
								justifyContent: "center"
							}}
						>
							<Text style={{ fontSize: 12, textAlign: "right" }}>
								{form1.ref}
							</Text>
							<Text style={{ fontSize: 12, textAlign: "right" }}>
								{form1.timeStamp}
							</Text>
						</View>
					</View>

					<TravelDetails request1={request1} form1={form1} />

					<ProfileDetails request1={request1} form1={form1} />

					<CostDetails request1={request1} form1={form1} />

					<TouchableOpacity
						onPress={() =>
							navigate("Comments", { commentId: `${form1.ticketNumber}` })
						}
						style={styles.commentContainer}
					>
						<View style={{ justifyContent: "center" }}>
							<Icon name="comment" size={32} color="#000000" />
						</View>
						<View style={{ paddingLeft: 8 }}>
							<Text style={{ fontWeight: "bold", paddingBottom: 4 }}>
								{form1.endorserName}
							</Text>
							<Text>{form1.commentTextLatest}</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() =>
							Alert.alert("Warning", "Confirm to delete?", [
								{
									text: "No"
								},
								{
									text: "Yes",
									style: "destructive",
									onPress: () => goBack()
								}
							])
						}
						style={{
							paddingVertical: 24,
							alignItems: "center"
						}}
					>
						<Text style={{ fontSize: 12, color: "#c4c4c4", color: "red" }}>
							Delete This Request
						</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	}
}

export default RequestStatus;

const TravelDetails = ({ request1, form1 }) => (
	<View
		style={{
			paddingHorizontal: 8,
			paddingBottom: 40,
			marginHorizontal: 8,
			borderBottomWidth: 0.5,
			borderColor: "#c4c4c4"
		}}
	>
		<Text style={{ fontSize: 12, paddingBottom: 8, color: "#a9a9a9" }}>
			Travel Details
		</Text>
		<Text style={{ fontSize: 16, paddingBottom: 24, fontWeight: "bold" }}>
			{form1.destination}
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
					{form1.travelFrom} 2016
				</Text>
			</View>
			<View>
				<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
					Arrival
				</Text>
				<Text style={{ fontSize: 16, fontWeight: "bold" }}>
					{form1.travelUntil} 2016
				</Text>
			</View>
		</View>
		<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
			Travel Type
		</Text>
		<Text style={{ fontSize: 16, paddingBottom: 24, fontWeight: "bold" }}>
			{form1.travelType}
		</Text>
		<Text style={{ fontSize: 12, paddingBottom: 8, color: "#a9a9a9" }}>
			Justification
		</Text>
		<Text style={{ fontSize: 16, lineHeight: 24, fontWeight: "bold" }}>
			{form1.justificationText}
		</Text>
	</View>
);

const ProfileDetails = ({ request1, form1 }) => (
	<View
		style={{
			paddingVertical: 40,
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
			{form1.requestorName}
		</Text>
		<Text style={{ fontSize: 16, paddingBottom: 24, color: "#000000" }}>
			{form1.requestorDivision}
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
			{form1.additionalTravellerName1}
		</Text>
		<Text
			style={{
				fontSize: 16,
				paddingBottom: 12
			}}
		>
			{form1.additionalTravellerDivision1}
		</Text>
		<Text
			style={{
				fontSize: 14,
				paddingBottom: 4,
				fontWeight: "bold"
			}}
		>
			{form1.additionalTravellerName2}
		</Text>
		<Text
			style={{
				fontSize: 16,
				paddingBottom: 12
			}}
		>
			{form1.additionalTravellerDivision2}
		</Text>
		<Text
			style={{
				fontSize: 14,
				paddingBottom: 4,
				fontWeight: "bold"
			}}
		>
			{form1.additionalTravellerName3}
		</Text>
		<Text
			style={{
				fontSize: 16
			}}
		>
			{form1.additionalTravellerDivision3}
		</Text>
	</View>
);

const CostDetails = ({ request1, form1 }) => (
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
			{form1.costCategory ? (
				<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
					Budget {request1.costCategory}
				</Text>
			) : (
				<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
					Budget {form1.costCentre}
				</Text>
			)}
			<Text style={{ fontSize: 16, fontWeight: "bold" }}>RM{form1.budget}</Text>
		</View>
		<View>
			<Text style={{ fontSize: 12, color: "#a9a9a9", paddingBottom: 8 }}>
				Cost
			</Text>
			<Text style={{ fontSize: 16, fontWeight: "bold" }}>RM{form1.cost}</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	eeiuTrackingBar: {
		justifyContent: "center",
		backgroundColor: "#5ac8fa",
		marginBottom: 16,
		marginHorizontal: 32,
		borderRadius: 100,
		paddingTop: 16,
		paddingBottom: 16,
		alignItems: "center"
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 32,
		paddingHorizontal: 8
	},
	logoBox: {
		backgroundColor: "#f27178",
		paddingHorizontal: 16,
		paddingVertical: 16,
		marginLeft: 8
	},
	logoText: {
		paddingTop: 8,
		fontSize: 18,
		fontWeight: "bold"
	},
	requestDetailsBox: {
		flex: 1,
		flexDirection: "row",
		paddingVertical: 24,
		paddingHorizontal: 16
	},
	commentContainer: {
		flex: 1,
		flexDirection: "row",
		paddingVertical: 24,
		paddingHorizontal: 16
	}
});
