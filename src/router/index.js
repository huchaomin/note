import {
  createRouter, createMemoryHistory, createWebHistory, START_LOCATION,
} from 'vue-router';
import { LoadingBar } from 'quasar';
import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default () => {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : createWebHistory;

  const Router = createRouter({
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from) => {
    if (from !== START_LOCATION) {
      LoadingBar.start();
    }
  });
  Router.afterEach(() => {
    LoadingBar.stop();
  });
  return Router;
};
