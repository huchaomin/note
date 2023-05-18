import getMeta from 'utils/get-meta.js';

export default (title, props) => {
  const route = useRoute();

  const metaTitle = computed(() => {
    const prefix = route.name || process.env.DOC_NAME;
    if (title.value) {
      return `${prefix} | ${title.value}`;
    }
    return prefix;
  });
  useMeta({
    title: metaTitle.value,
    // titleTemplate: (t) => `${t} | ${process.env.DOC_NAME}`,
    meta: getMeta(metaTitle.value, props.desc || metaTitle.value),
  });
};
