```
return (
    <ul>{
        this.props.numbers.map((number) => {
            <li key={number.toString()}>
                {number}
            </li>
        })
    }</ul>
)
```
## key
key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。  
**一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串**  
**避免使用列表项的index作为key**