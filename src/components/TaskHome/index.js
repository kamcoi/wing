import { connect } from "react-redux";
import Task from "./Task";

const mapStateToProps = state => {
  return {
    task: state.taskHome
  };
};

export default connect(mapStateToProps)(Task);
