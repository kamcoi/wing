import { connect } from "react-redux";
import SubmitForm from "./SubmitForm";

const mapStateToProps = state => {
  return {
    submit: state.requestForm
  };
};

export default connect(mapStateToProps)(SubmitForm);
