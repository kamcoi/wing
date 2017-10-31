import { connect } from 'react-redux'
import Main from './Main'

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Main)
