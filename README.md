# 我的笔记空间

```bash
git remote set-url origin https://github.com/huchaomin/tmp-new-doc.git
```

## 注意

## 构建时需要安装

### @quasar/fastclick

```javascript
if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && window.navigator.standalone) {
  import('@quasar/fastclick')
}
```

### register-service-worker

```javascript
import { register } from 'register-service-worker'
```

### vue-pug-to-html

将pug转换为html,不过很多属性和slot转换不正常

```bash
pugToHtml
```

### sass to scss

<https://sass-scss-converter.netlify.app/>

### 谷歌统计

```html
 <script async src="https://www.googletagmanager.com/gtag/js?id=G-0QMYMP52TQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-0QMYMP52TQ');
</script>


  process.env.CLIENT === true && Router.afterEach(to => {
    gtag('config', 'UA-6317975-6', {
      page_path: to.path
    })
  })
```

## todo

- 百度统计
- iconSet 定义自己的图标，并嵌合到index.html中
- 搞明白index.html中各个标签的意思
- .stylintrc 这个文件干啥的
- eslint-plugin-quasar
- package.json 中的插件都有什么用
- 消除 todo
- SurveyCountdown.vue 倒计时组件
- iconSet: 'svg-mdi-v6' 看看能不能整合到 svg-symbols
- masterComponent: markRaw({}) ? markRaw 一个component
- import { withDirectives } from 'vue'; 这个为什么识别不出来
- Object(o): <https://segmentfault.com/q/1010000007902095>
- import { EventBus } from 'quasar'  // lts 里面不需要引入
- 迁移到 新的 quasar docs
- build/ssg.js
- eslint-plugin-markdown
- markdown-it-task-lists
- 参考文献
- font-size
- 验证addressbarColor

## others

- 升级pnpm 请使用 npm add -g pnpm

```javascript
export default (title, links) => {
  function getContent() {
    return links.map((link) => h('div', { class: 'doc-page-listing' }, [
      h(QIcon, {
        name: link.page === true ? farFile : fasFolderOpen,
      }),

      h(DocLink, { to: link.to }, () => link.title),
    ]));
  }

  return {
    name: 'DocListingPage',

    setup() {
      return () => h(DocPage, {
        title,
        noEdit: true,
        metaTitle: title,
        metaDesc: `List of pages under the '${title}' section`,
      }, getContent);
    },
  };
};

next({
  path: to.fullPath.replace('/quasar-cli/', '/quasar-cli-webpack/'),
  query: to.query,
  hash: to.hash,
});


const getJsonUrl = process.env.DEV === true
  ? (file) => `/node_modules/quasar/dist/api/${file}.json`
  : (file) => `/quasar-api/${file}.json`;

process.env.CLIENT && onMounted(() => {
fetch(getJsonUrl(props.file))
  .then((response) => response.json())
  .then((json) => {
    parseApiFile(props.file, json);
    loading.value = false;
  });
});


import { scroll } from 'quasar';
const { setVerticalScrollPosition, getVerticalScrollPosition } = scroll;

$store.leftDrawerState = !$store.leftDrawerState; // reactive 里面的 ref 不用.value

ref: (vm) => { if (vm) { childRefs[path] = vm; } },

function showMenu(proxy) {
  if (proxy !== void 0 && proxy !== rootRef.value) {
    proxy.show !== void 0 && proxy.show();
    const parent = getParentProxy(proxy);
    if (parent !== void 0) {
      showMenu(parent);
    }
  }
}

function getParentProxy(proxy) {
  if (Object(proxy.$parent) === proxy.$parent) {
    return proxy.$parent;
  }

  let { parent } = proxy.$;

  while (Object(parent) === parent) {
    if (Object(parent.proxy) === parent.proxy) {
      return parent.proxy;
    }
    parent = parent.parent;
  }
}
```

打印深层次对象`console.log(JSON.stringify(obj, null, 2))`,其中2是用于缩进的空格数
