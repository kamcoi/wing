import { connect } from "react-redux";
import ProfileForm from "./ProfileForm";

const mapStateToProps = state => {
  return {
    profile1: state.profile
  };
};

export default connect(mapStateToProps)(ProfileForm);
