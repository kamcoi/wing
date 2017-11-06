import { connect } from "react-redux";
import ProfileForm from "./ProfileForm";
import ApprovalForm from "./ApprovalForm";
import CostForm from "./CostForm";
import TravelForm from "./TravelForm";

import { setDestination } from "../../redux/requestForm/action";

const mapStateToProps = state => {
  return {
    requestForm: state.requestForm,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDestination: t => {
      dispatch(setDestination(t));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ProfileForm,
  ApprovalForm,
  CostForm,
  TravelForm
);
