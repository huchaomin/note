import getMeta from 'utils/get-meta.js';

export default (title, props) => {
  const route = useRoute();

  const metaTitle = computed(() => {
    if (title.value) {
      return `${route.name} | ${title.value}`;
    }
    return route.name;
  });
  useMeta({
    title: metaTitle.value,
    titleTemplate: (t) => `${t} | ${process.env.DOC_NAME}`,
    meta: getMeta(metaTitle.value, props.desc || metaTitle.value),
  });
};
