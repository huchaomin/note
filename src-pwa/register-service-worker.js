import { register } from 'register-service-worker';
import { Notify } from 'quasar';

register(process.env.SERVICE_WORKER_FILE, {
  updated() {
    Notify.create({
      color: 'negative',
      icon: 'cached',
      message: '又有了新的笔记，点击刷新查看',
      timeout: 0,
      multiLine: true,
      position: 'top',
      actions: [
        {
          label: '刷新',
          color: 'yellow',
          handler: () => {
            window.location.reload();
          },
        },
        {
          label: '取消',
          color: 'white',
          handler: () => {},
        },
      ],
    });
  },
});
