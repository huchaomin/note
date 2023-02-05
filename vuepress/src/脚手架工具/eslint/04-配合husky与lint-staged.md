---
date: '1641550624552' 
title: eslint配合husky与lint-staged
description: eslint配合husky与lint-staged,为代码洁癖保驾护航
tags: [eslint]
---

### 安装husky和lint-staged
```shell
yarn add husky lint-staged -D
npx husky-init
```

### .husky\pre-commit 文件修改
```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

### 修改package.json
```json
"lint-staged": {
  "*.{js,jsx,vue}": [
    "eslint"
  ]
},
```

### 01和04最终的devDependencies(仅作参考)
```json
"devDependencies": {
  "eslint": "^7.32.0",
  "eslint-config-standard": "^16.0.3",
  "eslint-plugin-import": "^2.25.4",
  "eslint-plugin-node": "^11.1.0",
  "eslint-plugin-promise": "^5.2.0",
  "eslint-plugin-vue": "^8.2.0",
  "husky": "^7.0.0",
  "lint-staged": "^12.1.6"
}
```
