---
title: vite 中一些ssr的注意事项
---

- `import.meta.url` 在浏览器和 Node.js 中有不同的语义, 所以不支持ssr
