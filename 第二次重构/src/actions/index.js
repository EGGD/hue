import { createAction } from 'redux-actions';
const webApi = 'http://118.24.62.236:3020/';
const fetchHeader = {
  method: "POST",
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: ""
};
export const init = createAction('INIT', (data) => ({ data }));
export const changeColor = createAction('CHANGECOLOR', (data) => ({ data }));
export function getColorData() {
  return dispatch => {
    fetch(`${webApi}getColor`).then(res => {
      res.json().then(data => {
        // console.log(data);
        // if (data.code === 3000)
        dispatch(init(data.list));
        // dispatch(changeColor(data.list[0]));
      })
    })
  }
}
