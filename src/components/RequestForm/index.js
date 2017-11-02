import { connect } from "react-redux";

import ApprovalForm from "./ApprovalForm";
import CostForm from "./CostForm";
import ProfileForm from "./ProfileForm";
import TravelForm from "./TravelForm";

const mapStateToProps = state => {
  return {
    reqDetails: state.requestForm
  };
};

export default connect(mapStateToProps)(
  ApprovalForm,
  CostForm,
  ProfileForm,
  TravelForm
);
