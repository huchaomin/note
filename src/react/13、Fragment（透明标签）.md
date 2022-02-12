##### Fragment 
```
import React, { Fragment } from 'react';

<dl>
    {props.items.map(item => (
        // Fragments should also have a `key` prop when mapping collections
        <Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
        </Fragment>
    ))}
</dl>
```
##### <></>
不需要在 fragment 标签中添加任何 prop 且你的工具支持的时候，你可以使用 短语法：
```
import React, { Fragment } from 'react';
function ListItem({ item }) {
  return (
    <>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}
```
## 另一种写法
```
import React from 'react';
<React.Fragment>
    <td>Hello</td>
    <td>World</td>
</React.Fragment>
```