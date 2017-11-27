//环形图js
import React, { Component } from 'react';
//https://www.npmjs.com/package/createjs-cmd createjs如何在es6当中使用
import createjs from 'createjs-cmd';
import '../css/Ring_Diagram.css';
class Ring_Diagram extends Component {
  constructor(props) {
    super(props);
  };
  //Canves 填充
  onsetCanves(id, bg, callback) {
    var that = this;
    bg === undefined ? bg = 'rgba(255,0,0,1)' : bg = bg;
    document.body.style.background = bg
    var ring = document.getElementById(id);
    var stage = new createjs.Stage(ring);
    //圆
    var canvesY = 10;
    var round = new createjs.Container();
    for (var i = 0; i < 4; i++) {
      //最外面的底圈
      let circle = new createjs.Shape().set({ x: 70, y: canvesY, scaleX: 6 });
      circle.graphics.f("rgba(255,255,255,0.3)").dc(0, 0, 7)
      //中间的小圈  需要使用遮罩的时候 要先把下面那个属性设置好  然后 容器mask为“-circle2” image里面有图
      let circle2 = new createjs.Shape().set({ x: 68, y: canvesY, scaleX: 6 });
      circle2.graphics.beginFill(bg).drawCircle(0, 0, 3);
      circle2.compositeOperation = "destination-out";
      //扇形 计算扇形的幅度
      var arcNumber = that.cmykRoundArc(that.props.default, i);
      var r = 7;
      let shape = new createjs.Shape().set({
        x: 26,
        y: canvesY + 7,
        scaleY: 6,
        rotation: -90
      });
      let shapBg = 'white';
      shape.graphics.beginFill(shapBg).moveTo(r, r); //绘制点移动(r, r)点
      shape.graphics.arc(r, r, r, 0, 0 * Math.PI / 180, false); //从起始点顺时针画弧到终点
      shape.graphics.lineTo(r, r); //从终点画线到圆形。到此扇形的封闭区域形成
      shape.graphics.endFill();
      createjs.Tween.get(shape.graphics._instructions[2]).to({
        endAngle: arcNumber * Math.PI / 180
      }, 2000)

      //添加元素到容器 并更新
      round.addChild(circle);
      round.addChild(shape);
      round.addChild(circle2);
      round.mask = -circle2;
      canvesY += 20;
    };

    //线
    var linex = 90;
    let line = new createjs.Container();
    for (var z = 0; z < 3; z++) {
      let line1 = new createjs.Shape();
      line1.graphics.setStrokeStyle(5).beginStroke("rgba(255,255,255,0.3)");
      line1.graphics.moveTo(linex, 80);
      line1.graphics.lineTo(linex, 150);
      line1.graphics.endStroke();
      let line2 = new createjs.Shape();
      line2.graphics.setStrokeStyle(5).beginStroke("white");
      line2.graphics.moveTo(linex, 80);
      line2.graphics.lineTo(linex, 80);
      //计算线的长度
      let lineNumber = that.rgbLine(that.props.default, z);
      createjs.Tween.get(line2.graphics.command).to({
        y: lineNumber
      }, 2000);
      line2.graphics.endStroke();
      line.addChild(line1)
      line.addChild(line2)
      linex += 10;
    };
    stage.addChild(round);
    stage.addChild(line);
    //设置动画
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", handleTick);
    function handleTick(event) {
      stage.update();
    };
    if (callback === 'function') {
      callback()
    }
  };


  componentDidMount() {
    this.onsetCanves(this.props.default.id, this.props.default.colorText);
  };
  //计算扇形的幅度
  cmykRoundArc(data, i) {
    var number;
    if (i === 0) {
      number = data.C
    } else if (i === 1) {
      number = data.M
    } else if (i === 2) {
      number = data.Y
    } else if (i === 3) {
      number = data.K
    }
    if (number === 0)
      return 0;
    else
      return number / 100 * 360;
  }
  //计算扇形的幅度
  rgbLine(data, i) {
    var number;
    if (i === 0) {
      number = data.R
    } else if (i === 1) {
      number = data.G
    } else if (i === 2) {
      number = data.B
    }
    if (number === 0)
      return 80;
    else
      return number / 255 * 70 + 80;
  }
  //设置背景色
  onSetBackground(e) {
    var that = this
    that.onsetCanves(e.id, e.colorText);
    this.props.handleEmail(e);
  }
  

  render() {
    return (
      <div className="canvesDiv" onClick={this.onSetBackground.bind(this, this.props.default)}>
        <div className="colorBlocks" style={{ background: this.props.default.colorText }}></div>
        <div>
          <canvas id={this.props.default.id} style={{ width: '100px', height: '297px' }}></canvas>
          <span className="spanNumber">{this.props.default.number} {this.props.default.chinese}</span>
        </div>
        <div className="footer">
          <label className="spanColorNumber">{this.props.default.colorText}</label>
          <label className="colorPinYin">{this.props.default.pinin}</label>
        </div>
      </div>
    );
  };
};

export default Ring_Diagram;
