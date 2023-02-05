---
title: boot file
---

| prop name | description |
| --- | --- |
| app | Vue app instance |
| router | Instance of Vue Router from ‘src/router/index.js’ |
| store | Instance of the Pinia or the Vuex store - store only will be passed if your project uses Pinia |
| ssrContext | Available only on server-side, if building for SSR. More info |
| urlPath | The pathname (path + search) part of the URL. It also contains the hash on client-side. |
| publicPath | The configured public path. |
| redirect | Function to call to redirect to another URL. Accepts String (full URL) or a Vue Router location String or Object. |

## 可以异步

```javascript
export default async ({ app, router, store }) => {
  // something to do
  await something()
}
```

## 从node_modules中引入

```javascript
boot: [
  '~my-npm-package/some/file'
]
```

## 选择性boot

```javascript
boot: [
  ctx.mode.electron ? 'some-file' : ''
]
```

## redirect

The redirect() method accepts a String (full URL) or a Vue Router location String or Object.
 On SSR it can receive a second parameter which should be a Number for any of the HTTP STATUS codes that redirect the browser (3xx ones).

- 不用添加 publicPath
- 不会添加 hash

```javascript
redirect('/1') // Vue Router location as String
redirect({ path: '/1' }) // Vue Router location as Object
redirect('https://quasar.dev') // Example for redirect() with a URL
```

As it was mentioned in the previous sections, the default export of a boot file can return a Promise. If this Promise gets rejected with an Object that contains a “url” property, then Quasar CLI will redirect the user to that URL:

```javascript
export default () => {
  const isAuthorized = // ...
  if (!isAuthorized && !urlPath.startsWith('/login')) {
    return Promise.reject({ url: '/login' })
  }
}
```
