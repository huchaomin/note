```javascript
const apiPrefix = 'hus'

const resolveURL = url => {
  if (url.startsWith('http')) {
    return url
  }
  return `/${apiPrefix}/${url.replace(/^\/+/, '')}`
}
export {
  resolveURL,
}
```
