// import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Ring_Diagram from './views/Ring_Diagram';
// import Left_div from './views/Left_div';
// import Right_div from './views/Right_div';
import LeftCircleAndLine from './views/LeftCircleAndLine';
import RightCircleAndText from './views/RightCircleAndText';

fetch('http://fengyitong.name:8090/api/color/getcolor').then(res => {
    res.json().then(data => {
        // ReactDOM.render(<Left_div data={data} />, document.getElementById('left'));
        // ReactDOM.render(<Right_div  data={data[0]}/>, document.getElementById('right'));
        ReactDOM.render(<LeftCircleAndLine data={data} />, document.getElementById('left'));
        ReactDOM.render(<RightCircleAndText data={data[0]}/>, document.getElementById('right'));
        document.body.style.transition = 'background 2s';        
        document.getElementsByTagName("body")[0].style.background = data[0].colorText;
    })
});





