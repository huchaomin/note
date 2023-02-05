/* eslint-disable no-param-reassign */
import mdPageList from 'pages/listing';
import DocLayout from 'layouts/DocLayout.vue';
import Empty from 'layouts/Empty.vue';
import leftTree from 'constant/leftTree.json';

// 这里不能修改 leftTree，会导致其他地方的引用也被修改
function handleLeftTree(arr) {
  return arr.map((item) => ({
    ...item,
    component: item.component === 'Empty' ? Empty : mdPageList[item.component],
    path: encodeURIComponent(item.path),
    children: item.children ? handleLeftTree(item.children) : undefined,
  }));
}

const routes = [
  {
    path: '/',
    component: DocLayout,
    children: [
      {
        path: '',
        component: () => import('layouts/PageLanding.vue'),
      },
      ...handleLeftTree(leftTree),
    ],
  },
  // Always leave this as last one
  {
    path: '/:catchAll(.*)*',
    component: DocLayout,
    children: [{
      path: '',
      component: () => import('layouts/Page404.vue'),
    }],
  },
];

export default routes;
