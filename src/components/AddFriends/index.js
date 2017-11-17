import { connect } from "react-redux";
import AddFriends from "./AddFriends";

const mapStateToProps = state => {
	return {
		add: state.addFriend
	};
};

export default connect(mapStateToProps)(AddFriends);
