//环形图js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Ring_Diagram from './Ring_Diagram.js';
import Right_div from './Right_div';
class Left_div extends Component {
    constructor(props) {
        super(props);
        // fetch('http://192.168.0.208:30/getColor').then(res=>{
        //     res.json().then(data=>{
        //         _data=data.list;
        //         this.setState({
        //             colorData:_data
        //         });
        //     })
        // });
        // fetch('http://fengyitong.name:8090/api/color/getcolor').then(res=>{
        //     res.json().then(data=>{
        //         _data=data;
        //         this.setState({
        //             colorData:_data
        //         });
        //     })
        // });
        this.state = {
            colorData: this.props.data
        };
    };
    handleEmail(val) {
        ReactDOM.unmountComponentAtNode(document.getElementById("right"));
        ReactDOM.render(<Right_div data={val} />, document.getElementById('right'));
        document.getElementById('content__container__list').className='rightText content__container content__container__list'
        
        setTimeout(function(){
            document.getElementById('content__container__list').className='rightText'
        },800)
    };
    componentDidMount() {
        setTimeout(function () {
            document.body.style.transition = 'background 2s';
        }, 2000);
    };



    render() {
        let listdata = this.state.colorData.map((value, index) => {
            if (index === this.state.colorData.length - 1) {
                return (
                    <Ring_Diagram default={value} handleEmail={this.handleEmail.bind(this)} setTimeoutId={index} key={value.id} tf={true} />
                );
            } else {
                return (
                    <Ring_Diagram default={value} handleEmail={this.handleEmail.bind(this)} setTimeoutId={index} key={value.id} tf={false} />
                );
            }
        });
        return (
            <div>{listdata}</div>
        );
    };
};

export default Left_div;
