import { connect } from "react-redux";
import SubmitForm from "./SubmitForm";

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.user,
		submit: state.request[0],
		formDraftId: ownProps.navigation.state.params.formDraftId,
		formDraft1: state.request.filter(
			f => f.ticketNumber == ownProps.navigation.state.params.formDraftId
		)[0]
	};
};

export default connect(mapStateToProps)(SubmitForm);
