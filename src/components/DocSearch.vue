<script setup>
import '@docsearch/css';
import docsearch from '@docsearch/js';

// const props = defineProps<{
//   algolia: DefaultTheme.AlgoliaSearchOptions
// }>()

const router = useRouter();
const route = useRoute();

function initialize() {
  const options = {
    container: '#docsearch',
    appId: 'C9LSIOZAYC',
    apiKey: '1172d6fa70c5b4fd88e3b3908d0e2ee1',
    indexName: 'mulinzi_note',

    // navigator: {
    //   navigate({ itemUrl }) {
    //     debugger;
    //     const { pathname: hitPathname } = new URL(
    //       window.location.origin + itemUrl,
    //     );

    //     // router doesn't handle same-page navigation so we use the native
    //     // browser location API for anchor navigation
    //     if (route.path === hitPathname) {
    //       window.location.assign(window.location.origin + itemUrl);
    //     } else {
    //       router.go(itemUrl);
    //     }
    //   },
    // },

    // // @ts-expect-error vue-tsc thinks this should return Vue JSX but it returns the required React one
    // hitComponent({ hit, children }) {
    //   return {
    //     __v: null,
    //     type: 'a',
    //     ref: undefined,
    //     constructor: undefined,
    //     key: undefined,
    //     props: { href: hit.url, children },
    //   };
    // },
  };
  onMounted(() => {
    docsearch(options);
  });
}
initialize();
</script>

<template>
  <div id="docsearch"></div>
</template>
