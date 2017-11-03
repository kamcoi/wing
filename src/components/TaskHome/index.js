import { connect } from "react-redux";
import Task from "./Task";

const mapStateToProps = state => {
  return {
    taskHome: state.task
  };
};

export default connect(mapStateToProps)(Task);
