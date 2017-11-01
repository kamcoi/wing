import { connect } from "react-redux";
import TaskStatus from "./TaskStatus";

const mapStateToProps = state => {
  return {
    status: state.taskStatus
  };
};

export default connect(mapStateToProps)(TaskStatus);
