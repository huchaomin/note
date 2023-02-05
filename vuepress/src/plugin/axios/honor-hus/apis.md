---
date: '1643686754697'
title: honor-hus 封装 axios 之api列表
description: honor-hus 封装 axios 之api列表，放置所有请求地址以及初始配置
tags: [axios]
---
### honor-hus 封装 axios 之api列表，放置所有请求地址以及初始配置
```javascript
/* eslint-disable no-template-curly-in-string */
/*
 * @功能描述 接口配置列表
 * type 接口请求方式 默认get
 * cache 是否缓存接口 默认false 只会缓存get请求
 * loading 是否显示加载模态框 默认false
 * formUrlencoded 是否采用formUrlencoded形式 只针对post请求， 默认false
 * _showErrMsg response.data.code !== 0 时是否弹出data.msg， 默认true
 */
export default{
  getProcessById: { // 查询工作流
    loading: true,
    cache: true,
    url: 'process/select-by-id',
  },
  saveProcess: { // 保存工作流
    type: 'post',
    loading: true,
    url: 'process/save',
  },
  releaseProcess: { // 工作流上线下线操作
    type: 'post',
    loading: true,
    formUrlencoded: true,
    _showErrMsg: false,
    url: 'process/release',
  },
  getResourceListPaging: { // 脚本或者jar包页面查询分页接口
    type: 'post',
    loading: true,
    url: 'resources/list-paging?pageNo=${pageNo}&pageSize=${pageSize}',
  },
  // ...
}
```
