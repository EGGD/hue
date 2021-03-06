//环形图js
import React, { Component } from 'react';
import clipboard from 'clipboard-js';
import Circle from './Circle';
import '../index.css';

class RightCircleAndText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorData: this.props.data,
            rightColor: 'white'
        }
    };
    componentDidMount() {
        // console.log(this.state.colorData);
    };
    componentDidUpdate() {
        // console.log(this.props.data);
    };
    componentWillReceiveProps() {
        setTimeout(() => {
            let rightColor=this.state.rightColor;
            if(this.props.data.R>200){
                rightColor='black';
            }else{
                rightColor='white';
            }
            this.setState({
                rightColor:rightColor
            });
        }, 10);
    };
    onColorTextCopy(data) {
        document.getElementsByClassName("Colortips")[0].innerText = "已复制到剪贴板";
        clipboard.copy(data);
        document.getElementsByClassName("Title")[0].innerText = "点击复制数据";
    };
    onColorRGBCopy(data) {
        var obj = 'rgb(' + data.R + ',' + data.G + ',' + data.B + ')';
        document.getElementsByClassName("Title")[0].innerText = "已复制到剪贴板";
        clipboard.copy(obj);
        document.getElementsByClassName("Colortips")[0].innerText = "点击复制数据";
    };
    render() {
        var rightColor = {
            color: this.state.rightColor,
            borderColor: this.state.rightColor,
        };
        return (
            <div>
                <div className="rightColor" style={rightColor}>
                    <dl id="CMYKcolor">
                        <dt className="c altText" style={rightColor}>C</dt>
                        <Circle svgCircleColor={rightColor.color} svgTextColor={rightColor.color} svgCircleOneUnFillValue={this.props.data.C} />
                        <dt className="m altText" style={rightColor}>M</dt>
                        <Circle svgCircleColor={rightColor.color} svgTextColor={rightColor.color} svgCircleOneUnFillValue={this.props.data.M} />
                        <dt className="y altText" style={rightColor}>Y</dt>
                        <Circle svgCircleColor={rightColor.color} svgTextColor={rightColor.color} svgCircleOneUnFillValue={this.props.data.Y} />
                        <dt className="k altText" style={rightColor}>K</dt>
                        <Circle svgCircleColor={rightColor.color} svgTextColor={rightColor.color} svgCircleOneUnFillValue={this.props.data.K} />
                    </dl>
                    <dl id="RGBcolor" style={rightColor}>
                        <dt className="r altText" style={rightColor}>R</dt>
                        <label id="R">{this.props.data.R}</label>
                        <dt className="g altText" style={rightColor}>G</dt>
                        <label id="G">{this.props.data.G}</label>
                        <dt className="b altText" style={rightColor}>B</dt>
                        <label id="B">{this.props.data.B}</label>
                        <dt className="b altText"></dt>
                    </dl>

                </div>
                <div id="content__container__list" className="rightText" style={rightColor}>
                    <div id="content__container">
                        <span id="lrtop">{this.props.data.chinese}</span>
                        <div id="rightPinyin">{this.props.data.pinin}</div>
                        <hr style={rightColor} className="hrStyle" />
                        <div className="tooltip">
                            <span className=" titleTips Colortips">点击复制数据</span>
                            <span id="rightColorTitle" onClick={this.onColorTextCopy.bind(this, this.props.data.colorText)}>
                                {this.props.data.colorText}
                            </span>
                        </div>
                        <div className="tooltips">
                            <span className=" titleTips Title">点击复制数据</span>
                            <span id="rightRGB" onClick={this.onColorRGBCopy.bind(this, this.props.data)}>
                                rgb({this.props.data.R},{this.props.data.G},{this.props.data.B})
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default RightCircleAndText;
