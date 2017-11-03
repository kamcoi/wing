import { connect } from "react-redux";
import Comments from "./Comments";

const mapStateToProps = state => {
  return {
    comment1: state.request[(0, 1)],
    comment2: state.request[(0, 1)].comments
  };
};

export default connect(mapStateToProps)(Comments);
