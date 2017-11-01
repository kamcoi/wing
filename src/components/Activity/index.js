import { connect } from "react-redux";
import ActivityLog from "./ActivityLog";

const mapStateToProps = state => {
  return {
    activity: state.activityLog
  };
};

export default connect(mapStateToProps)(ActivityLog);
