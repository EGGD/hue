//环形图js
import React, { Component } from 'react';
import createjs from 'createjs-cmd';
import clipboard from 'clipboard-js';
import '../index.css';
class Right_div extends Component {
    constructor(props) {
        super(props);
        this.state={
            colorData:this.props.data,
            rightColor:'white'
        }
    };
    componentDidMount() {
        this.onSetRightCMYK(this.props.data);
    }

    //cmyk圈的颜色设置
    onSetRightCMYK(data, color) {
        var color = 'white';
        if (data.R > 200) {
            color='black';
            this.setState({
                rightColor:color
            })
        };
        this.setCMYK(data.C, "C", color);
        this.setCMYK(data.M, "M", color);
        this.setCMYK(data.Y, "Y", color);
        this.setCMYK(data.K, "K", color);
    }
    setCMYK(data, id, bg) {
        var that = this;
        var stage = new createjs.Stage(id);

        //构建显示对象的容器
        var container = new createjs.Container();

        let circle = new createjs.Shape().set({ x: 110, y: 70 });
        circle.graphics.f("rgba(255,255,255,0.3)").dc(0, 0, 70);
        //中间的小圈
        let circle2 = new createjs.Shape().set({ x: 110, y: 70 });
        circle2.graphics.f("red").drawCircle(0, 0, 60);
        circle2.compositeOperation = "destination-out";
        //container不能用链式操作
        var r = 70;
        let shape = new createjs.Shape().set({ x: 40, y: 139, rotation: -90 });
        shape.graphics.beginFill(bg).moveTo(r, r); //绘制点移动(r, r)点
        shape.graphics.arc(r, r, r, 0, 0 * Math.PI / 180, false); //从起始点顺时针画弧到终点
        shape.graphics.lineTo(r, r); //从终点画线到圆形。到此扇形的封闭区域形成
        shape.graphics.endFill();
        createjs.Tween.get(shape.graphics._instructions[2]).to({
            endAngle: data / 100 * 360 * Math.PI / 180
        }, 2000)

        container.addChild(circle);
        container.addChild(shape);
        container.addChild(circle2);
        container.mask = -circle2;
        stage.addChild(container);

        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", handleTick);
        function handleTick(event) {
            stage.update();
        };
    }
    onColorTextCopy(data) {
        document.getElementsByClassName("Colortips")[0].innerText = "已复制到剪贴板";
        clipboard.copy(data);
        document.getElementsByClassName("Title")[0].innerText = "点击复制数据";
    }
    onColorRGBCopy(data) {
        var obj= 'rgb('+data.R+','+data.G+','+data.B+')';
        document.getElementsByClassName("Title")[0].innerText = "已复制到剪贴板";
        clipboard.copy(obj);
        document.getElementsByClassName("Colortips")[0].innerText = "点击复制数据";
    }

    render() {
        var rightColor={
            color:this.state.rightColor,
            borderColor:this.state.rightColor,
        }
        var hrStyle={
            borderWidth: '0.5px'                        
        }
        return (
            <div>
                <div className="rightColor" style={rightColor}>
                    <dl id="CMYKcolor">
                        <dt className="c altText" style={rightColor}>C</dt>
                        <div>
                            <span id="Cnumber">{this.props.data.C}</span>
                            <canvas id="C"></canvas>
                        </div>
                        <dt className="m altText" style={rightColor}>M</dt>
                        <div>
                            <span id="Mnumber">{this.props.data.M}</span>
                            <canvas id="M"></canvas>
                        </div>
                        <dt className="y altText" style={rightColor}>Y</dt>
                        <div>
                            <span id="Ynumber">{this.props.data.Y}</span>
                            <canvas id="Y"></canvas>
                        </div>
                        <dt className="k altText" style={rightColor}>K</dt>
                        <div>
                            <span id="Knumber">{this.props.data.K}</span>
                            <canvas id="K"></canvas>
                        </div>
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
                            <span id="rightRGB" onClick={this.onColorRGBCopy.bind(this,this.props.data)}>
                                rgb({this.props.data.R},{this.props.data.G},{this.props.data.B})
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Right_div;
