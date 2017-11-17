import { connect } from "react-redux";
import CommentsTask from "./CommentsTask";

const mapStateToProps = (state, ownProps) => {
	return {
		commentTaskId: ownProps.navigation.state.params.commentTaskId,
		taskInfo: state.task.filter(
			t1 => t1.ticketNumber == ownProps.navigation.state.params.commentTaskId
		)[0],
		commentDetails: state.task.filter(
			t1 => t1.ticketNumber == ownProps.navigation.state.params.commentTaskId
		)[0].comments
	};
};

export default connect(mapStateToProps)(CommentsTask);
