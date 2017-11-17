import { connect } from "react-redux";
import Comments from "./Comments";

const mapStateToProps = (state, ownProps) => {
	return {
		commentId: ownProps.navigation.state.params.commentId,
		requestDetails: state.request.filter(
			f => f.ticketNumber == ownProps.navigation.state.params.commentId
		)[0],
		commentDetails: state.request.filter(
			f => f.ticketNumber == ownProps.navigation.state.params.commentId
		)[0].comments
	};
};

export default connect(mapStateToProps)(Comments);
