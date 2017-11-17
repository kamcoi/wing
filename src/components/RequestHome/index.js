import { connect } from "react-redux";
import Request from "./Request";

const mapStateToProps = (state, ownProps) => {
  return {
    requestHome: state.request,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Request);
