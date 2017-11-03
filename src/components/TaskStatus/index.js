import { connect } from "react-redux";
import TaskStatus from "./TaskStatus";

const mapStateToProps = state => {
  return {
    status: state.task[(0, 1)]
  };
};

export default connect(mapStateToProps)(TaskStatus);
