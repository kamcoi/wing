import { connect } from "react-redux";
import RequestStatus from "./RequestStatus";

const mapStateToProps = state => {
  return {
    request1: state.request[0]
  };
};

export default connect(mapStateToProps)(RequestStatus);
