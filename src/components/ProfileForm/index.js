import { connect } from "react-redux";
import ProfileForm from "./ProfileForm";

const mapStateToProps = state => {
	return {
		requestForm: state.request,
		friend1: state.request[0].friends,
		user: state.user
	};
};

export default connect(mapStateToProps)(ProfileForm);
