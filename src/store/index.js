import { createStore } from 'vuex';
import axios from 'axios';

const moduleAdmin = {
  namespaced: true,
  state: () => ({
    products: [],
    coupons: [],
    orders: [],
    isLoading: false,
    alertMsg: '',
    isAlert: false,
  }),
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setCoupons(state, payload) {
      state.coupons = payload;
    },
    setOrders(state, payload) {
      state.orders = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    setAlertMsg(state, payload) {
      state.alertMsg = payload;
      state.isAlert = true;
    },
    setIsAlert(state) {
      setTimeout(() => {
        state.isAlert = false;
      }, 3000);
    },
  },
  actions: {
    getProducts({ commit }, page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      commit('setIsLoading', true);

      axios
        .get(api)
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', '取得商品列表失敗');
            commit('setIsAlert');
            return;
          }
          commit('setIsLoading', false);
          commit('setProducts', res.data.products);
          commit('setPagination', res.data.pagination, { root: true });
        })
        .catch(error => console.log(error.message));
    },
    getCoupons({ commit }, page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      commit('setIsLoading', true);

      axios
        .get(api)
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', '取得優惠券列表失敗');
            commit('setIsAlert');
            return;
          }
          commit('setIsLoading', false);
          commit('setCoupons', res.data.coupons);
          commit('setPagination', res.data.pagination, { root: true });
        })
        .catch(error => console.log(error.message));
    },
    getOrders({ commit }, page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      commit('setIsLoading', true);

      axios
        .get(api)
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', '取得訂單列表失敗');
            commit('setIsAlert');
            return;
          }
          commit('setIsLoading', false);
          commit('setOrders', res.data.coupons);
          commit('setPagination', res.data.pagination);
        })
        .catch(error => console.log(error.message));
    },
  },
};

const moduleFrontPage = {
  namespaced: true,
  state: () => ({
    bgActive: false,
    products: [],
    pagination: {},
  }),
  mutations: {
    setBgActive(state, payload) {
      state.bgActive = payload;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    setPagination(state, payload) {
      state.pagination = {
        total_pages: payload.total_pages,
        current_page: payload.current_page,
        has_pre: payload.current_page !== 1,
        has_next: payload.current_page !== payload.total_pages,
        category: null,
        products: payload.products,
      };
    },
  },
  actions: {
    getProducts({ commit }, page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      axios
        .get(api)
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', '取得商品失敗');
            return;
          }
          commit('setProducts', res.data.products);
          commit('setPagination', {
            total_pages: Math.ceil(res.data.products.length / 6),
            current_page: page,
          });
        })
        .catch(error => {
          console.log(error.message);
        });
    },
  },
};

export default createStore({
  state: {
    pagination: {},
  },
  getters: {},
  mutations: {
    setPagination(state, payload) {
      state.pagination = payload;
    },
  },
  actions: {},
  modules: { moduleAdmin, moduleFrontPage },
});
