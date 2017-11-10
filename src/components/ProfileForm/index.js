import { connect } from "react-redux";
import ProfileForm from "./ProfileForm";

const mapStateToProps = state => {
  return {
    requestForm: state.request[0],
    user: state.user
  };
};

export default connect(mapStateToProps)(ProfileForm);
