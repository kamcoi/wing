import { connect } from "react-redux";
import AddFriends from "./AddFriends";

const mapStateToProps = state => {
  return {
    add: state.addFriends
  };
};

export default connect(mapStateToProps)(AddFriends);
