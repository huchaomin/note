```
npm install -g mirror-config-china --registry=http://registry.npm.taobao.org

npm install sass-loader node-sass --save-dev
```
App.module.scss
```
.App {
    padding: 50px;
    
    .p {
        font-size: 20px;
    }
    
    p {
        background: red;
    }
    
    &.active {
        color: $red;
    }
 }
```
App.js
```
import style from './App.module.scss';
...
const classNames = require('classnames');
return (
    <div>
        <div className={style.App}>
            <p>背景红色且会影响子代组件</p>
            <p className={style.p}>字体大小为20px,不会影响子组件</p>
        </div>
        <div className={classNames(style.App,style.active)}>
            color: red;
        </div>
    </div>
)
```