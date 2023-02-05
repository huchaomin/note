import { Dialog } from 'quasar';
import ImageViewer from './ImageViewer.vue';

export default (srcArr, index = 0) => {
  Dialog.create({
    component: ImageViewer,
    componentProps: {
      srcArr,
      index,
    },
  });
};
