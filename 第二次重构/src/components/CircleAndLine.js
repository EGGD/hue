import React, { Component } from 'react';

class CircleAndLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circleInit: {
        // 拼音
        svgPinin: '',
        // 数字id
        svgNumberID: '',
        // chinese
        svgChinese: '',
        // 字体颜色
        svgTextColor: '#000',
        // 线条颜色
        svgLineColor: '#000',
        // svg高度
        svgCircleHeight: '100',
        // svg宽度
        svgCircleWidth: '100',
        // C的度数
        svgCircleFillValueC: 94,
        svgCircleUnFillValueC: parseInt(Math.random() * 94),
        // M的度数
        svgCircleFillValueM: 94,
        svgCircleUnFillValueM: parseInt(Math.random() * 94),
        // Y的度数
        svgCircleFillValueY: 94,
        svgCircleUnFillValueY: parseInt(Math.random() * 94),
        // K的度数
        svgCircleFillValueK: 94,
        svgCircleUnFillValueK: parseInt(Math.random() * 94),
        // R的度数
        svgCircleFillValueR: 121,
        svgCircleUnFillValueR: parseInt(Math.random() * 121),
        // G的度数
        svgCircleFillValueG: 121,
        svgCircleUnFillValueG: parseInt(Math.random() * 121),
        // B的度数
        svgCircleFillValueB: 121,
        svgCircleUnFillValueB: parseInt(Math.random() * 121),
        // 圆圈的颜色
        svgCircleColor: '#000',
        // 圆圈线条的颜色
        svgCircleLineWidth: '6',
        // 里圆圈的透明度
        svgCircleOpacity: '0.3',
      },
      fatherData:this.props.fatherData
    };
  }
  componentDidMount() {
    //初始化所有的内容
    this.svgInit();
  }
  componentWillUnmount() {
    // clearTimeout(initSvgNumberSetTime);
  }
  //父组件传递参数到子组件的时候 使用这个参数 但是会出现信息滞后的问题 所以要延迟一点时间调用
  componentWillReceiveProps(){
    setTimeout(() => {
      this.svgInit();
    }, 10);
  }
  svgInit() {
    const oldCircleInit = this.state.circleInit;
    const newCircleInit = this.props;
    for (const key in newCircleInit) {
      if (oldCircleInit.hasOwnProperty(key)) {
        // 单个园255最大的值计算
        const cmykTrue = ['svgCircleUnFillValueC', 'svgCircleUnFillValueM', 'svgCircleUnFillValueY', 'svgCircleUnFillValueK'].indexOf(key) !== -1;
        const rgbTrue = ['svgCircleUnFillValueR', 'svgCircleUnFillValueG', 'svgCircleUnFillValueB'].indexOf(key) !== -1;
        if (cmykTrue) {
          oldCircleInit[key] = (255 - newCircleInit[key]) / 2.7;
        } else if (rgbTrue) {
          oldCircleInit[key] = (255 - newCircleInit[key]) / 2.1;
        } else {
          oldCircleInit[key] = newCircleInit[key];
        }
      }
    }
    this.setState({ circleInit: oldCircleInit });
  }
  render() {
    let circleInit = this.state.circleInit,
      svgPinin = circleInit.svgPinin,
      svgNumberID = circleInit.svgNumberID,
      svgChinese = circleInit.svgChinese,
      svgCircleWidth = circleInit.svgCircleWidth,
      svgCircleHeight = circleInit.svgCircleHeight,
      svgLineColor = circleInit.svgLineColor,
      svgTextColor = circleInit.svgTextColor,
      svgCircleColor = circleInit.svgCircleColor,
      svgCircleUnFillValueC = parseInt(circleInit.svgCircleUnFillValueC),
      svgCircleUnFillValueM = parseInt(circleInit.svgCircleUnFillValueM),
      svgCircleUnFillValueY = parseInt(circleInit.svgCircleUnFillValueY),
      svgCircleUnFillValueK = parseInt(circleInit.svgCircleUnFillValueK),
      svgCircleUnFillValueR = parseInt(circleInit.svgCircleUnFillValueR),
      svgCircleUnFillValueG = parseInt(circleInit.svgCircleUnFillValueG),
      svgCircleUnFillValueB = parseInt(circleInit.svgCircleUnFillValueB),
      svgCircleLineWidth = circleInit.svgCircleLineWidth,
      svgCircleOpacity = circleInit.svgCircleOpacity;
    return (
      <svg 
      onClick={()=>{this.props.setRightCircleAndTextData(this.state.fatherData)}} 
      width={svgCircleWidth} height={svgCircleHeight} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 300" >
        <g id="text">
          <text fill={svgCircleColor} transform="matrix(1 0 0 0.9245 72.7471 49.6069)" glyphOrientationVertical="0" writingMode="tb">{svgChinese}</text>
          <text fill={svgCircleColor} transform="matrix(0 0.9245 -1 0 67.4405 13.1343)">{svgNumberID}</text>
          <text fill={svgCircleColor} transform="matrix(0 0.9035 -1 0 64.9006 172.7432)">{svgPinin}</text>
          <text fill={svgCircleColor} transform="matrix(0 0.9035 -1 0 25.7374 172.7432)">{svgTextColor}</text>
        </g>
        <g id="line">
          {/* R  */}
          {/* stroke 填充的颜色
          strokeWidth 线条的宽度
          svgCircleOpacity 圈的颜色
          strokeLinecap 线条边缘样式 
          fill 可以设置动画执行完就停止*/}
          <g>
            <line stroke={svgCircleColor} strokeWidth={3} opacity={svgCircleOpacity} x1="45" y1="171.4" x2="45" y2="293" strokeLinecap="round" />
            <line strokeDasharray="121" stroke={svgCircleColor} strokeWidth={3} x1="45" y1="171.4" x2="45" y2="293" strokeLinecap="round" />
            <animate attributeName="stroke-dashoffset" begin="0s" from="121" to={svgCircleUnFillValueR} dur="3s" fill="freeze" />
          </g>
          {/* G */}
          <g>
            <line stroke={svgCircleColor} strokeWidth={3} opacity={svgCircleOpacity} x1="55" y1="171.4" x2="55" y2="293" strokeLinecap="round" />
            <line strokeDasharray="121" stroke={svgCircleColor} strokeWidth={3} x1="55" y1="171.4" x2="55" y2="293" strokeLinecap="round" />
            <animate attributeName="stroke-dashoffset" begin="0s" from="121" to={svgCircleUnFillValueG} dur="3s" fill="freeze" />
          </g>
          {/* B */}
          <g>
            <line stroke={svgCircleColor} strokeWidth={3} opacity={svgCircleOpacity} x1="50.2" y1="171.4" x2="50.2" y2="293" strokeLinecap="round" />
            <line strokeDasharray="121" stroke={svgCircleColor} strokeWidth={3} x1="50.2" y1="171.4" x2="50.2" y2="293" strokeLinecap="round" />
            <animate attributeName="stroke-dashoffset" begin="0s" from="121" to={svgCircleUnFillValueB} dur="3s" fill="freeze" />
          </g>
        </g>
        <g id="C">
          <circle fill="none" strokeWidth={svgCircleLineWidth} opacity={svgCircleOpacity} stroke={svgCircleColor} cx="36" cy="28.1" r="15" />
          <circle transform="rotate(-90, 36 28.1)" fill="none" strokeDasharray="94" strokeWidth={svgCircleLineWidth} stroke={svgCircleColor} cx="36" cy="28.1" r="15" />
          <animate attributeName="stroke-dashoffset" begin="0s" from="94" to={svgCircleUnFillValueC} dur="3s" fill="freeze" />
        </g>
        <g id="M">
          <circle fill="none" strokeWidth={svgCircleLineWidth} opacity={svgCircleOpacity} stroke={svgCircleColor} cx="36" cy="69.7" r="15" />
          <circle transform="rotate(-90, 36 69.7)" fill="none" strokeDasharray="94" strokeWidth={svgCircleLineWidth} stroke={svgCircleColor} cx="36" cy="69.7" r="15" />
          <animate attributeName="stroke-dashoffset" begin="0s" from="94" to={svgCircleUnFillValueM} dur="3s" fill="freeze" />
        </g>
        <g id="Y">
          <circle fill="none" strokeWidth={svgCircleLineWidth} opacity={svgCircleOpacity} stroke={svgCircleColor} cx="36" cy="111.2" r="15" />
          <circle transform="rotate(-90, 36 111.2)" fill="none" strokeDasharray="94" strokeWidth={svgCircleLineWidth} stroke={svgCircleColor} cx="36" cy="111.2" r="15" />
          <animate attributeName="stroke-dashoffset" begin="0s" from="94" to={svgCircleUnFillValueY} dur="3s" fill="freeze" />
        </g>
        <g id="K">
          <circle fill="none" strokeWidth={svgCircleLineWidth} opacity={svgCircleOpacity} stroke={svgCircleColor} cx="36" cy="152.7" r="15" />
          <circle transform="rotate(-90, 36 152.7)" fill="none" strokeDasharray="94" strokeWidth={svgCircleLineWidth} stroke={svgCircleColor} cx="36" cy="152.7" r="15" />
          <animate attributeName="stroke-dashoffset" begin="0s" from="94" to={svgCircleUnFillValueK} dur="3s" fill="freeze" />
        </g>
        <g id="RGB">
          <rect fill={svgLineColor} x="12.5" y="1" width="75" height="6" strokeLinecap="round" />
        </g>
      </svg>
    );
  }
}

export default CircleAndLine;
