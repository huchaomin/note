import injectToc from './inject-toc';
import injectScroll from './inject-scroll';

const docStoreKey = '_q_ds_';

export function useDocStore() {
  return inject(docStoreKey);
}

export function provideDocStore(platform, cookies) {
  const $q = useQuasar();
  const $route = useRoute();
  const $router = useRouter();
  const isMobile = platform.is.mobile;

  const store = {
    $q,
    $route,
    $router,
    platform,
    state: {
      dark: cookies.get('theme') === 'dark',
      menuDrawer: !isMobile,
    },

    toggleDark() {
      store.state.dark = store.state.dark === false;
    },

    toggleMenuDrawer() {
      store.state.menuDrawer = store.state.menuDrawer === false;
    },

    hasRightDrawer: computed(() => store.state.toc.length > 0 && !isMobile),
  };

  injectToc(store);
  injectScroll(store);

  if (!process.env.SERVER) {
    store.state = reactive(store.state);
  }

  watch(() => store.state.dark, (val) => {
    cookies.set('theme', val ? 'dark' : 'light', { path: '/', sameSite: 'Strict' });
    $q.addressbarColor.set(`${val ? '#1a1b1e' : '#fafafa'}`);
    $q.dark.set(val);
  }, { immediate: true });

  provide(docStoreKey, store);
  return store;
}
