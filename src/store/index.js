import { createStore } from 'vuex';
import axios from 'axios';

const moduleAdmin = {
  namespaced: true,
  state: () => ({
    products: [],
    coupons: [],
    orders: [],
    isLoading: false,
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
  },
  actions: {
    getProducts({ commit }, page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      commit('setIsLoading', true);

      axios
        .get(api)
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', '取得商品列表失敗', { root: true });
            commit('setIsAlert', null, { root: true });
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
            commit('setAlertMsg', '取得優惠券列表失敗', { root: true });
            commit('setIsAlert', null, { root: true });
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
            commit('setAlertMsg', '取得訂單列表失敗', { root: true });
            commit('setIsAlert', null, { root: true });
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
    staredProducts: [],
    myCoupons: [],
    carts: '',
    pagination: {},
  }),
  mutations: {
    setBgActive(state, payload) {
      state.bgActive = payload;
    },
    setProducts(state, payload) {
      state.staredProducts = JSON.parse(localStorage.getItem('staredId')) || [];

      for (const p of payload) {
        state.staredProducts.includes(p.id)
          ? (p.stared = true)
          : (p.stared = false);
      }
      state.products = payload;
    },
    setStaredProducts(state, payload) {
      payload.stared = true;
      state.staredProducts.push(payload.id);
      localStorage.setItem('staredId', JSON.stringify(state.staredProducts));
    },
    removeStaredProducts(state, payload) {
      const pid = state.staredProducts.indexOf(payload.id);
      payload.stared = false;
      state.staredProducts.splice(pid, 1);
      localStorage.setItem('staredId', JSON.stringify(state.staredProducts));
    },
    setMyCoupons(state, payload) {
      state.myCoupons = JSON.parse(localStorage.getItem('myCoupons')) || [];
      state.myCoupons.push(payload);
    },
    setCart(state, payload) {
      state.carts = payload;
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
            commit('setAlertMsg', '取得商品失敗', { root: true });
            commit('setIsAlert', null, { root: true });
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
    getCart({ commit }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      axios
        .get(api)
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', '取得購物車列表失敗', { root: true });
            commit('setIsAlert', null, { root: true });
            return;
          }
          commit('setCart', res.data.data.carts);
        })
        .catch(error => {
          console.log(error.message);
        });
    },
    addCart({ commit }, cartItem) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;

      axios
        .post(api, { data: cartItem })
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', '加入購物車失敗', { root: true });
            commit('setIsAlert', null, { root: true });
            return;
          }
          commit('setAlertMsg', '加入購物車成功!', { root: true });
          commit('setIsAlert', null, { root: true });
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
    alertMsg: '',
    isAlert: false,
  },
  getters: {},
  mutations: {
    setPagination(state, payload) {
      state.pagination = payload;
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
  actions: {},
  modules: { moduleAdmin, moduleFrontPage },
});
