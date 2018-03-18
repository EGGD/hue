import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CircleAndLine from './CircleAndLine';
// import RightCircleAndText from './RightCircleAndText';

class LeftCircleAndLine extends Component {
    constructor(props) {
        super(props);
    };
    // setRightCircleAndTextData(data) {
    //     //重新绘制右侧内容 传递点击参数
    //     ReactDOM.render(<RightCircleAndText data={data} />, document.getElementById('right'));
    //     document.getElementById('content__container__list').className = 'rightText content__container content__container__list'
    //     setTimeout(function () {
    //         document.getElementById('content__container__list').className = 'rightText'
    //     }, 800);
    //     //设置背景色
    //     document.getElementsByTagName("body")[0].style.background = data.colorText;
    //     let textColor = this.state.textColor;
    //     //判断R的值是否大于200 是的画就换线条和圆的颜色
    //     data.R > 200 ? textColor = 'black' : textColor = 'white';
    //     this.setState({
    //         textColor: textColor
    //     });
    // };
    render() {
        let data = this.props.active.allData;
        let listdata;
        if (data) listdata = "无数据";
        listdata = data.map((value, index) => {
            return <CircleAndLine key={index}
                svgTextColor={value.colorText}
                svgLineColor={value.colorText}
                svgCircleHeight={300}
                svgCircleWidth={100}
                svgCircleUnFillValueC={value.C}
                svgCircleUnFillValueM={value.M}
                svgCircleUnFillValueY={value.Y}
                svgCircleUnFillValueK={value.K}
                svgCircleUnFillValueR={value.R}
                svgCircleUnFillValueG={value.G}
                svgCircleUnFillValueB={value.B}
                svgCircleColor={this.props.active.textColor}
                svgPinin={value.pinin}
                svgNumberID={value.number}
                svgChinese={value.chinese}
                setRightCircleAndTextData={this.props.onClick}
                fatherData={value}
            />
        });

        return (
            <div id="left" className="left">
                {listdata}
            </div>
        );
    };
};

export default LeftCircleAndLine;
