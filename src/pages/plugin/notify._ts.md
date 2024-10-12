```ts
import {
  type NotificationConfig,
  type NotificationReturn,
  Notification,
} from '@arco-design/web-vue';

enum NotificationTypes {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error',
};

type optionsConfig = Omit<NotificationConfig & { type?: NotificationTypes }, 'content'>;

type createFn = (content: string, options?: optionsConfig)=> NotificationReturn;

type createMap = { // 映射类型和函数类型不能写在一起
  [key in NotificationTypes]: createFn
};

const create: createFn = (content, options = {}) => {
  const type = options.type ?? 'success';
  delete options.type;
  return Notification[type]({
    content,
    ...options,
  });
};

Object.values(NotificationTypes).forEach((type) => {
  (create as unknown as createMap)[type] = (content, options = {}) => create(content, {
    type,
    ...options,
  });
});
export default create as createFn & createMap;
```
