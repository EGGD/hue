//左侧内容
import { connect } from 'react-redux';
import LeftCirCleAndLine from '../components/LeftCircleAndLine';
import {changeColor} from '../actions'

const mapStateToProps = (state) => ({
  active: state.colorDataFilter
})
const mapDispatchToProps = (dispatch) => ({
  onClick: (value) => {
    dispatch(changeColor(value))
  }
})
const LeftList = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftCirCleAndLine)
export default LeftList;