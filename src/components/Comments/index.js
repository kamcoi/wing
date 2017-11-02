import { connect } from "react-redux";
import Comments from "./Comments";

const mapStateToProps = state => {
  return {
    comment1: state.comments,
    comment2: state.comments.commentData
  };
};

export default connect(mapStateToProps)(Comments);
