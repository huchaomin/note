import injectToc from './inject-toc';
import injectScroll from './inject-scroll';

const docStoreKey = '_q_ds_';

export function useDocStore() {
  return inject(docStoreKey);
}

export function provideDocStore() {
  const $q = useQuasar();
  const $route = useRoute();
  const $router = useRouter();

  const store = {
    $q,
    $route,
    $router,

    state: {
      dark: $q.cookies.get('theme') === 'dark',
      menuDrawer: true,
    },

    toggleDark() {
      store.state.dark = store.state.dark === false;
    },

    toggleMenuDrawer() {
      store.state.menuDrawer = store.state.menuDrawer === false;
    },
  };

  injectToc(store);
  injectScroll(store);

  if (!process.env.SERVER) {
    const isMobile = $q.platform.is.mobile;
    if (isMobile) {
      store.state.menuDrawer = false;
    }
    store.state = reactive(store.state);
    store.hasRightDrawer = computed(() => store.state.toc.length > 0 && !isMobile);
  }

  watch(() => store.state.dark, (val) => {
    $q.cookies.set('theme', val ? 'dark' : 'light', { path: '/', sameSite: 'Strict' });
    $q.addressbarColor.set(`${val ? '#1a1b1e' : '#fafafa'}`);
    $q.dark.set(val);
  }, { immediate: true });

  provide(docStoreKey, store);
  return store;
}
