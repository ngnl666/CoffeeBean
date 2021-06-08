import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';
import VueAxios from 'vue-axios';
import 'animate.css';
import 'hover.css';
import 'bootstrap';

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios
      .post(api)
      .then(res => (res.data.success ? next() : next({ path: '/login' })))
      .catch(error => console.log(error.message));
  } else {
    next();

    if (
      (to.name !== 'List' && to.name !== 'Item') ||
      to.fullPath.split('/')[2] === 'all'
    ) {
      window.scroll(0, 0);
    }
  }
});

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app');
