import {connect} from 'react-redux',
import CostForm from './CostForm'

const mapStateToProps = state => {
  return {
    cost1: state.cost
  }
}

export default connect(mapStateToProps)(CostForm)
