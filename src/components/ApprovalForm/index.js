import { connect } from "react-redux";
import ApprovalForm from "./ApprovalForm";

const mapStateToProps = (state, ownProps) => {
	return {
		name1: state.request[(0, 1)],
		name2: state.addFriend[(0, 1)]
	};
};

export default connect(mapStateToProps)(ApprovalForm);
