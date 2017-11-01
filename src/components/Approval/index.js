import { connect } from "react-redux";
import ApprovalForm from "./ApprovalForm";

const mapStateToProps = state => {
  return {
    approver: state.approval
  };
};

export default connect(mapStateToProps)(ApprovalForm);
