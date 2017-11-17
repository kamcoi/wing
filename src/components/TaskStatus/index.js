import { connect } from "react-redux";
import TaskStatus from "./TaskStatus";

const mapStateToProps = (state, ownProps) => {
	return {
		taskId: ownProps.navigation.state.params.taskId,
		taskDetails: state.task.filter(
			t => t.ticketNumber == ownProps.navigation.state.params.taskId
		)[0]
	};
};

export default connect(mapStateToProps)(TaskStatus);
