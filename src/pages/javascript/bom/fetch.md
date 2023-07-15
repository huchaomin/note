---
title: Fetch API 的简单理解
---

## 与XMLHttpRequest的差异

- Fetch API 使用 Promise 对象，而不是使用回调函数。
- Fetch API 采用模块化设计，API 分散在多个对象上（Response 对象、Request 对象、Headers 对象），更合理一些；相比之下，XMLHttpRequest 的 API 设计并不是很好，输入、输出、状态都在同一个接口管理，容易写出非常混乱的代码
- Fetch API 通过数据流（Stream 对象）处理数据，可以分块读取，有利于提高网站性能表现，减少内存占用，对于请求大文件或者网速慢的场景相当有用。XMLHTTPRequest 对象不支持数据流，所有的数据必须放在缓存里，不支持分块读取，必须等待全部拿到后，再一次性吐出来

## 前言

例子：从服务器获取json数据

```js
fetch('https://api.github.com/users/ruanyf')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Request Failed', err));

// await 写法
async function getJSON() {
  let url = 'https://api.github.com/users/ruanyf';
  try {
    let response = await fetch(url); // response是一个 Stream 对象
    return await response.json(); // response.json()是一个异步操作，取出所有内容，并将其转为 JSON 对象。
  } catch (error) {
    console.log('Request Failed', error);
  }
}
```

## response 对象

### 属性

- Response.ok：一个布尔值，表示请求是否成功。`true` 对应 HTTP 请求的状态码 200 到 299，`false` 对应其他的状态码。
- Response.status：一个数字值，表示 HTTP 回应的状态码（例如，200 表示成功，404 表示未找到）。
- Response.statusText：一个字符串，表示 HTTP 回应的状态信息（例如，OK 表示成功，Not Found 表示未找到）。
- Response.headers：一个 Headers 对象，表示 HTTP 回应的头信息。

  - Headers.get()：根据指定的键名，返回键值。
  - Headers.has()： 返回一个布尔值，表示是否包含某个标头。
  - Headers.set()：将指定的键名设置为新的键值，如果该键名不存在则会添加。
  - Headers.append()：添加标头。
  - Headers.delete()：删除标头。
  - Headers.keys()：返回一个遍历器，可以依次遍历所有键名。
  - Headers.values()：返回一个遍历器，可以依次遍历所有键值。
  - Headers.entries()：返回一个遍历器，可以依次遍历所有键值对（[key, value]）。
  - Headers.forEach()：依次遍历标头，每个标头都会执行一次参数函数。

  ::: warning
  上面的有些方法可以修改标头，那是因为继承自 Headers 接口。对于 HTTP 回应来说，修改标头意义不大，况且很多标头是只读的，浏览器不允许修改。
  :::

- Response.url：一个字符串，表示 HTTP 回应的 URL 地址。如果 URL 存在跳转，该属性返回的是最终 URL。
- Response.redirected：用于将 Response 结果重定向到指定的 URL。该方法一般只用在 Service Worker 里面。
- Response.type：一个字符串，表示 HTTP 回应的类型（basic、cors）。

  - basic：同域名下的请求，或者是跨域请求，但服务器的响应头信息里面没有包含`Access-Control-Allow-Origin`字段。
  - cors：跨域请求，且服务器的响应头信息里面包含`Access-Control-Allow-Origin`字段。
  - error：网络错误，主要用于 Service Worker。
  - opaque：如果fetch()请求的type属性设为no-cors，就会返回这个值，表示发出的是简单的跨域请求，类似 `<form>` 表单的那种跨域请求
  - opaqueredirect： 如果fetch()请求的redirect属性设为manual，就会返回这个值

- Response.body：一个 ReadableStream 对象，供用户操作。

  ```js
  // 它可以用来分块读取内容，应用之一就是显示下载的进度。
  const response = await fetch('flower.jpg');
  // 返回一个遍历器。这个遍历器的read()方法每次返回一个对象，表示本次读取的内容块。
  const reader = response.body.getReader();
  while(true) {
    // done属性是一个布尔值，用来判断有没有读完；
    // value属性是一个 arrayBuffer 数组，表示内容块的内容，而value.length属性是当前块的大小。
    const {done, value} = await reader.read();
    if (done) {
      break;
    }
    console.log(`Received ${value.length} bytes`)
  }
  ```

### 方法

- response.text()： 可以用于获取文本数据，比如 HTML 文件
- response.json()： 可以用于获取 JSON 数据
- response.blob()： 可以用于获取二进制文件

  ```js
  const response = await fetch('flower.jpg');
  const myBlob = await response.blob();
  const objectURL = URL.createObjectURL(myBlob);
  const myImage = document.querySelector('img');
  myImage.src = objectURL;
  ```

- response.arrayBuffer()： 可以用于获取二进制数据

  ```js
  const audioCtx = new window.AudioContext();
  const source = audioCtx.createBufferSource();
  const response = await fetch('song.ogg');
  const buffer = await response.arrayBuffer();
  const decodeData = await audioCtx.decodeAudioData(buffer);
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.loop = true;
  ```

- response.formData()： 主要用在 Service Worker 里面，拦截用户提交的表单，修改某些数据以后，再提交给服务器。
- response.clone()： 复制一个 Response 对象

  ```js
  // Stream 对象只能读取一次，读取完就没了
  let text =  await response.text();
  let json =  await response.json();  // 报错

  // 复制一个 Response 对象，就可以多次读取了
  const response1 = await fetch('flowers.jpg');
  const response2 = response1.clone();
  const myBlob1 = await response1.blob();
  const myBlob2 = await response2.blob();
  image1.src = URL.createObjectURL(myBlob1);
  image2.src = URL.createObjectURL(myBlob2);
  ```

## 第二个参数，定制 HTTP 请求

- method： HTTP 请求的方法，比如 GET、POST、PUT、DELETE 等。默认是 GET。
- headers： HTTP 请求的头信息，必须是一个对象。可以设置的头信息包括`Content-Type`、`Accept`、`If-Modified-Since`、`Authorization`等。

  ::: warning
  有些标头不能通过headers属性设置，比如Content-Length、Cookie、Host等等。它们是由浏览器自动生成，无法修改。
  :::

- body：POST 请求的数据体
- cache：属性指定如何处理缓存

  - default：默认值，先在缓存里面寻找匹配的请求。
  - no-store：直接请求远程服务器，并且不更新缓存。
  - reload：直接请求远程服务器，并且更新缓存。
  - no-cache：将服务器资源跟本地缓存进行比较，有新的版本才使用服务器资源，否则使用缓存。
  - force-cache：缓存优先，只有不存在缓存的情况下，才请求远程服务器。
  - only-if-cached：只检查缓存，如果缓存里面不存在，将返回504错误。

- mode：属性用于设置是否跨域，以及如何跨域。

  - cors：默认值，允许跨域请求。
  - same-origin：只允许同源请求。
  - no-cors：请求方法只限于 GET、POST 和 HEAD，并且只能使用有限的几个简单标头，不能添加跨域的复杂标头，相当于提交表单所能发出的请求。

- credentials：指定是否发送 Cookie

  - same-origin：默认值，同源请求时发送 Cookie，跨域请求时不发送。
  - include：不管同源请求，还是跨域请求，一律发送 Cookie。
  - omit：一律不发送。

- signal：指定一个 AbortSignal 实例，用于取消fetch()请求
- keepalive：用于页面卸载时，告诉浏览器在后台保持连接，继续发送数据

  ```js
  // 一个典型的场景就是，用户离开网页时，脚本向服务器提交一些用户行为的统计信息。这时，如果不用keepalive属性，数据可能无法发送，因为浏览器已经把页面卸载了
  window.onunload = function() {
    fetch('/analytics', {
      method: 'POST',
      body: "statistics",
      keepalive: true
    });
  };
  ```
