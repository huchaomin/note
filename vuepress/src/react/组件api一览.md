```
import React, { Suspense, lazy } from 'react';
const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillMount() {}     //即将过时
    componentWillUpdate() {}        //即将过时
    componentWillReceiveProps() {}      //即将过时
    

    componentWillUnmount() {    
        clearInterval(this.timerID);
    }
    
    componentDidUpdate(prevProps) {
        console.log('old props:', prevProps);
        console.log('new props:', this.props);
    }
    
    //会在重新渲染前被触发。其默认实现总是返回 true，强制让 React 执行更新（或者不）
    //你知道在什么情况下你的组件不需要更新，你可以在 shouldComponentUpdate 中返回 false 来跳过整个渲染过程。其包括该组件的 render 调用以及之后的操作。
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    
    unmountComponentAtNode() {
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    <section>
                        <OtherComponent />
                        <AnotherComponent />
                    </section>
                </Suspense>
            </div>
        );
    }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
![FireShot Capture 031 - React lifecycle methods diagram - projec](https://note.youdao.com/yws/res/4335/B3F70F9A907B406BBE769AC4E82F57EA)
![FireShot Capture 032 - React lifecycle methods diagram - projec](https://note.youdao.com/yws/res/4386/9D3567DE7F5146A79F4FDB0B4BEDE01E)