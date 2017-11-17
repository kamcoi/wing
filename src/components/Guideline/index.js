import { connect } from "react-redux";
import GuidelineContent from "./GuidelineContent";

const mapStateToProps = (state, ownProps) => {
  return {
    guidelineId: ownProps.navigation.state.params.guidelineId,
    guideline: state.guideline.filter(g => g.id == ownProps.navigation.state.params.guidelineId)[0],
    guideline2: state.guideline.filter(g => g.id == ownProps.navigation.state.params.guidelineId)[0].data,
  };
};

export default connect(mapStateToProps)(GuidelineContent);
