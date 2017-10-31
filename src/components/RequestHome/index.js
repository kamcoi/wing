import { connect } from "react-redux";
import Request from "./Request";

const mapStateToProps = state => {
  return {
    request1: state.requestHome
  };
};

export default connect(mapStateToProps)(Request);
