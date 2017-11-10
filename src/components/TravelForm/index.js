import { connect } from "react-redux";
import TravelForm from "./TravelForm";

import { setDestination, setTravelType } from "../../redux/request/action";

const mapStateToProps = state => {
  return {
    requestForm: state.request[0],
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDestination: t => {
      dispatch(setDestination(t));
      console.log(t);
    },
    setTravelType: a => {
      dispatch(setTravelType(a));
      console.log(a);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TravelForm);
