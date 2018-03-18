//左侧内容
import { connect } from 'react-redux';
import RightCircleAndText from '../components/RightCircleAndText';
import {changeColor} from '../actions'

const mapStateToProps = (state) => ({
  data: state.colorDataFilter.showData,
  textColor:state.colorDataFilter.textColor
})
const mapDispatchToProps = (dispatch) => ({
  onClick: (value) => {
    // dispatch(changeColor(value))
  }
})
const RightList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RightCircleAndText)
export default RightList;