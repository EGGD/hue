import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftList from './LeftList';
import RightList from './RightList';
// import texture from '../image/texture.png';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let stylebackg = {
      backgroundColor: this.props.colorText,
      // backgroundImage: `url(${texture})`,
      WebkitTransition:'background-color 1.5s linear',
      display: "flex"
    }
    return (
      <div style={stylebackg}>
        <LeftList />
        <RightList />
      </div>
    )
  }
}
App = connect(
  state => state.colorDataFilter.showData,
  null
)(App)
export default App;