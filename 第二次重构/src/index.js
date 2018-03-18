import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import { getColorData } from './actions';
import App from './containers/App';

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
  )
)
store.dispatch(getColorData());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)
// import LeftCircleAndLine from './views/LeftCircleAndLine';
// import RightCircleAndText from './views/RightCircleAndText';

// fetch('http://fengyitong.name:8090/api/color/getcolor').then(res => {
//     res.json().then(data => {
//         // ReactDOM.render(<Left_div data={data} />, document.getElementById('left'));
//         // ReactDOM.render(<Right_div  data={data[0]}/>, document.getElementById('right'));
//         ReactDOM.render(<LeftCircleAndLine data={data} />, document.getElementById('left'));
//         ReactDOM.render(<RightCircleAndText data={data[0]}/>, document.getElementById('right'));
//         document.body.style.transition = 'background 2s';        
//         document.getElementsByTagName("body")[0].style.background = data[0].colorText;
//     })
// });





