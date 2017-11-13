import { connect } from "react-redux";
import SubmitForm from "./SubmitForm";

const mapStateToProps = state => {
  return {
    submit: state.request[0],
    user: state.user
  };
};

export default connect(mapStateToProps)(SubmitForm);
