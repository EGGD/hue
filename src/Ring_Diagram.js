//环形图js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//https://www.npmjs.com/package/createjs-cmd createjs如何在es6当中使用
import createjs from 'createjs-cmd';
import './css/Individual.css';
class Ring_Diagram extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var ring = document.getElementById("ring");
    var stage = new createjs.Stage("ring");  
    //最外面的底圈
    let circle = new createjs.Shape();
    circle.x = circle.y = 20;
    circle.graphics.beginFill("#f00").drawCircle(100, 0, 20,50);
    
    stage.addChild(circle);
    //中间的小圈
    // let circle2 = new createjs.Shape();
    // circle2.x = circle2.y = 20;
    // circle2.graphics.beginFill("blue").drawCircle(0, 0, 10,20);
    // stage.addChild(circle2);
    //扇形
    stage.update();  
  }

  render() {
    return (
      <canvas id="ring" style={{ width: '50px', height: '297px' }}></canvas>
    );
  }
}

export default Ring_Diagram;
