import { connect } from "react-redux";
import RequestStatus from "./RequestStatus";

const mapStateToProps = (state, ownProps) => {
  return {
    request1: state.request,
    formId: ownProps.navigation.state.params.formId,
    form1: state.request.filter(f => f.ticketNumber == ownProps.navigation.state.params.formId)[0]
  };
};

export default connect(mapStateToProps)(RequestStatus);
