import { connect } from "react-redux";
import Request from "./Request";

import { newRequest } from "../../redux/request/action";

const mapStateToProps = state => {
  return {
    requestHome: state.request
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newRequest: t => {
      dispatch(newRequest(t));
      console.log(t);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Request);
