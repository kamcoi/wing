import { connect } from "react-redux";
import RequestStatus from "./RequestStatus";

const mapStateToProps = state => {
  return {
    reqStatus: state.requestStatus
  };
};

export default connect(mapStateToProps)(RequestStatus);
