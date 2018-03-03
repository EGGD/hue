import React, { Component } from 'react';
class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circleInit: {
        //字的颜色
        svgTextColor: '#000',
        //圆的高度
        svgCircleHeight: "100",
        //圆的宽度
        svgCircleWidth: "100",
        //填充最大值
        svgCircleOneFillValue: 255,
        //填充大小
        svgCircleOneUnFillValue: parseInt(Math.random() * 255),
        //圆圈的颜色
        svgCircleColor: '#000',
        //圆圈线条宽度
        svgCircleLineWidth: '10',
        //内圈的透明度
        svgCircleOpacity: '0.3'
      }
    }
  }
  componentDidMount() {
    this.svgInit();
  }
  componentDidUpdate(){
    // this.setSvgNumber();
  }
  //父组件传递参数到子组件的时候 使用这个参数 但是会出现信息滞后的问题 所以要延迟一点时间调用
  componentWillReceiveProps(){
    setTimeout(() => {
      this.svgInit();
    }, 10);
  }
  svgInit() {
    let oldCircleInit = this.state.circleInit;
    let newCircleInit = this.props;
    for (const key in newCircleInit) {
      if (oldCircleInit.hasOwnProperty(key)) {
        key === 'svgCircleOneUnFillValue' ? oldCircleInit[key] = 255 - newCircleInit[key] : oldCircleInit[key] = newCircleInit[key];
      }
    }
    this.setState({
      circleInit:oldCircleInit
    })
    this.setSvgNumber();    
  }
  setSvgNumber() {
    let circleInit = this.state.circleInit;
    let fillValue = circleInit.svgCircleOneFillValue;
    let unFillValue = circleInit.svgCircleOneUnFillValue;
    let setFillValue;
    if (fillValue === unFillValue) {
      return;
    };
    //计算两个数据是否相同 不相同就添加或者减少
    if (fillValue > unFillValue) {
      setFillValue = Math.max(unFillValue, fillValue - 1);
    } else {
      setFillValue = Math.min(unFillValue, fillValue + 1);
    };
    circleInit.svgCircleOneFillValue = setFillValue;
    this.setState({ circleInit: circleInit });
    clearTimeout(timeout);
    let timeout = setTimeout(() => {
      this.setSvgNumber();
    }, 20);
  }
  componentWillUnmount() {
    // clearTimeout(initSvgNumberSetTime);
  }
  render() {
    let circleInit = this.state.circleInit,
      svgCircleWidth = circleInit.svgCircleWidth,
      svgCircleHeight = circleInit.svgCircleHeight,
      svgTextColor = circleInit.svgTextColor,
      svgCircleColor = circleInit.svgCircleColor,
      svgCircleOneFillValue = circleInit.svgCircleOneFillValue,
      svgCircleLineWidth = circleInit.svgCircleLineWidth,
      svgCircleOpacity = circleInit.svgCircleOpacity;
    return (
      <div>
        <svg width={svgCircleWidth} height={svgCircleHeight} viewBox="0 0 100 100">
          <text x="50%" y="50%" style={{ textAnchor: "middle", dominantBaseline: "middle", fill: svgTextColor }}>{255-svgCircleOneFillValue}</text>                    
          <circle strokeWidth={svgCircleLineWidth} opacity={svgCircleOpacity} cx="50%" cy="50%" r="40.65" fill="none" stroke="#fff"  strokeLinecap="round" />
          <circle stroke={svgCircleColor} strokeWidth={svgCircleLineWidth} strokeDashoffset={svgCircleOneFillValue}  transform="rotate(-90, 50 50)" cx="50%" cy="50%" r="40.65" fill="none"  strokeDasharray="255"  strokeLinecap="round" />
        </svg>
      </div>
    );
  }
}

export default Circle;
