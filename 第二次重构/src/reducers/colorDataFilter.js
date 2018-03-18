import { handleActions } from 'redux-actions';
const colorDataFilter = handleActions({
  INIT(state, action) {
    let value = action.payload.data;
    return ({
      ...state,
      allData: value,
      showData: value[0],
      textColor: "#fff"
    })
  },
  CHANGECOLOR(state, action) {
    let value = action.payload.data;
    return ({
      ...state,
      showData: value,
      textColor: (value.R>200?"#000":"#fff")
    })
  }
}, { allData: [], showData: {}, textColor: "" })
export default colorDataFilter;