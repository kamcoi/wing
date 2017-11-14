import { connect } from "react-redux";
import GuidelineHome from "./GuidelineHome";
import GuidelineContent from "./GuidelineContent";

const mapStateToProps = state => {
  return {
    content: state.guideline
  };
};

export default mapStateToProps(GuidelineContent)(GuidelineHome);
