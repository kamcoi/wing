import { connect } from "react-redux";
import TravelForm from "./TravelForm";

const mapStateToProps = state => {
  return {
    travel1: state.travel
  };
};

export default connect(mapStateToProps)(TravelForm);
