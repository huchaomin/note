import { Loading, QSpinnerTail, uid } from 'quasar';

Loading.setDefaults(
  {
    spinnerColor: 'primary',
    spinner: QSpinnerTail,
    spinnerSize: 60,
    backgroundColor: 'grey-1',
  },
);

export default (options) => {
  const id = uid();
  return Loading.show({ ...options, group: id });
};
