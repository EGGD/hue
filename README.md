# 声明
  此界面创意来源于
  [http://nipponcolors.com/#kyara/](http://nipponcolors.com/#kyara/)<br />

### Hue是什么？
是一个颜色展示及获取的网站
### Hue有什么功能？
* 方便的`选择展示颜色`功能
* 展示颜色渐变及动画效果

### Hue如何使用？
[http://color.fengyitong.name/](http://color.fengyitong.name/)<br />
点击上面的网站 左侧为颜色库 右侧为数据展示栏
  * `CMYK`为颜色的CMYk颜色
  * `RGB`为颜色的RGB颜色
  * `中文`为颜色的当前颜色的中文名称
  * 鼠标移动到右侧如`#303030`上时候可以复制上面的数据
  * 下面的`rgb(48,48,48)`也是如此 可直接用于网页颜色
### Hue使用了什么技术
  #### `前台`：<br/>
  * `React`用于`数据展示`<br/>
  * `Createjs`用于`饼图及线图动画`<br/>
  * `Clipboard`用于`数据复制及读取`<br/>
  #### `后台`：<br/>
  * `express`用于数据库`连接`、`查询`等操作

### 当时编写`Hue`的技术难点
  * 难点：由于当时不想要引用JQuery框架 所产生的数据无法获取的问题
  * 解决：最后使用`fetch`来进行`数据获取`及获取完成后`数据展示` 代码如下<p>
```javascript
   fetch('http://fengyitong.name:8090/api/color/getcolor').then(res => {
      res.json().then(data => {
          ReactDOM.render(<Left_div data={data} />, document.getElementById('left'));
          ReactDOM.render(<Right_div  data={data[0]}/>, document.getElementById('right'));
      })
   });
```

  * 难点：使用`React`时产生的父节点 `数据及方法调用`的问题
  * 解决：使用官网`doc`及搜索引擎解决<p>
  调用`父结点数据` 需要`父结点`先命名一个`子结点接收变量`<br>
  后子结点再使用this.props.data来进行数据获取<br>
  ```javascript
    <Right_div data={val} />
    this.props.data
  ```
  * 难点：使用`Createjs`时动画重新渲染的问题
  * 解决：重新渲染`React组件`来进行动画的重新渲染<p>
  子结点点击列表将`数据专递`至`父结点` `父结点`再`重新渲染组件`
  ```javascript
    // 子结点传递数据
    onSetBackground(e) {
      var that = this
      that.onsetCanves(e.id, e.colorText);
      this.props.handleEmail(e);
    }
    // 父结点接收传递数据并重新渲染
    <Ring_Diagram default={value} handleEmail={this.handleEmail.bind(this)} setTimeoutId={index} key={value.id} tf={true} />
    handleEmail(val) {
        ReactDOM.render(<Right_div data={val} />, document.getElementById('right'));
        document.getElementById('content__container__list').className='rightText content__container content__container__list'
        setTimeout(function(){
            document.getElementById('content__container__list').className='rightText'
        },800)
    };
  ```
  * 难点：页面底色过于空白的问题
  * 解决：底部添加一个div使之产生背景叠加效果<p>

  * 难点：使用`Nodejs`数据读取跨域问题
  * 解决：添加部分代码解决 代码如下：
  
```javascript
  app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });
```
### 代码获取后如何使用

```javascript
  //在 node 及 react 文件目录下运行 来进行基本文件获取
  npm install
  //在 node 及 react 文件目录下运行 来启动服务
  npm start 
  //在 eact 文件目录下运行 来打包服务
  npm build 
```


### 缺点
  兼容没有做的非常仔细<p>
  饼图动画在鼠标移动时会产生卡顿<p>
