import { connect } from "react-redux";
import Comments from "./Comments";

const mapStateToProps = state => {
  return {
    comment1: state.commentDetails,
    comment2: state.comments
  };
};

export default connect(mapStateToProps)(Comments);
