import { connect } from "react-redux";
import ProfileForm from "./ProfileForm";
import ApprovalForm from "./ApprovalForm";
import CostForm from "./CostForm";
import TravelForm from "./TravelForm";

const mapStateToProps = state => {
  return {
    reqDetails: state.requestForm,
    user: state.user
  };
};

export default connect(mapStateToProps)(
  ProfileForm,
  ApprovalForm,
  CostForm,
  TravelForm
);
