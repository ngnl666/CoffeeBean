import swal from 'sweetalert';
import { createStore } from 'vuex';
import axios from 'axios';

const moduleAdmin = {
  namespaced: true,
  state: () => ({
    products: [],
    coupons: [],
    orders: [],
    tempProduct: {
      imageUrl: '',
    },
    isNew: false,
    showProductModal: false,
    showDelModal: false,
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
    setTempProduct(state, payload) {
      state.tempProduct = payload;
    },
    setIsNew(state, payload) {
      state.isNew = payload;
    },
    setShowDelModal(state, payload) {
      state.showDelModal = payload;
    },
    setShowProductModal(state, payload) {
      state.showProductModal = payload;
    },
  },
  actions: {
    getProducts({ commit }, page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      commit('setIsLoading', true, { root: true });

      axios
        .get(api)
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', '取得商品列表失敗', { root: true });
            commit('setIsAlert', null, { root: true });
            return;
          }
          commit('setIsLoading', false, { root: true });
          commit('setProducts', res.data.products);
          commit('setPagination', res.data.pagination, { root: true });
        })
        .catch(error => console.log(error.message));
    },
    getCoupons({ commit }, page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      commit('setIsLoading', true, { root: true });

      axios
        .get(api)
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', '取得優惠券列表失敗', { root: true });
            commit('setIsAlert', null, { root: true });
            return;
          }
          commit('setIsLoading', false, { root: true });
          commit('setCoupons', res.data.coupons);
          commit('setPagination', res.data.pagination, { root: true });
        })
        .catch(error => console.log(error.message));
    },
    getOrders({ commit }, page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      commit('setIsLoading', true, { root: true });

      axios
        .get(api)
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', '取得訂單列表失敗', { root: true });
            commit('setIsAlert', null, { root: true });
            return;
          }
          res.data.orders.shift();
          commit('setIsLoading', false, { root: true });
          commit('setOrders', res.data.orders);
          commit('setPagination', res.data.pagination, { root: true });
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
    tempCart: new Map(
      JSON.parse(localStorage.getItem('storageCart'))?.map(c => [c[0], c[1]])
    ),
    carts: [],
    couponCode: '',
    finalTotal: '',
    orderId: '',
    formData: '',
    buttonEnabled: false,
    jumped: false,
    order: {},
    pagination: {},
  }),
  getters: {
    myCart(state) {
      const cart = [...state.tempCart];
      const finalCart = [];

      cart.forEach(([pid, qty]) => {
        state.products.forEach(item => {
          if (pid === item.id) {
            finalCart.push({
              title: item.title,
              qty: qty,
              product_id: pid,
              unit: item.unit,
              original_price: item.original_price,
              price: item.price,
            });
          }
        });
      });
      return finalCart;
    },
    cartNum(state) {
      return Array.from(state.tempCart).length;
    },
  },
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
    setTempCart(state, payload) {
      if (state.tempCart.get(payload.product_id)) {
        let qty = state.tempCart.get(payload.product_id);
        payload?.change ? (qty = payload.qty) : (qty += payload.qty);

        state.tempCart.set(payload.product_id, qty);
        localStorage.setItem(
          'storageCart',
          JSON.stringify([...state.tempCart])
        );
      } else {
        state.tempCart.set(payload.product_id, payload.qty);
        localStorage.setItem(
          'storageCart',
          JSON.stringify([...state.tempCart])
        );
      }
    },
    delTempCart(state, payload) {
      state.tempCart.delete(payload);
      localStorage.setItem('storageCart', JSON.stringify([...state.tempCart]));
    },
    delAllTempCart(state) {
      state.tempCart = new Map();
    },
    setCart(state, payload) {
      state.carts = payload;
    },
    setFinalTotal(state, payload) {
      state.finalTotal = Math.round(payload);
    },
    setCouponCode(state, payload) {
      state.couponCode = payload;
    },
    setOrderId(state, payload) {
      state.orderId = payload;
    },
    setFormData(state, payload) {
      state.formData = payload;
    },
    setOrder(state, payload) {
      state.order = payload;
    },
    setPaid(state, payload) {
      state.order.is_paid = payload;
    },
    setJumped(state, payload) {
      state.jumped = payload;
    },
    setButtonEnabled(state, payload) {
      state.buttonEnabled = payload;
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
      commit('setIsLoading', true, { root: true });

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
          commit('setIsLoading', false, { root: true });
        })
        .catch(error => {
          console.log(error.message);
        });
    },
    getCart({ commit }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      commit('setIsLoading', true, { root: true });

      axios
        .get(api)
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', '取得購物車列表失敗', { root: true });
            commit('setIsAlert', null, { root: true });
            return;
          }
          commit('setCart', res.data.data.carts);
          commit('setIsLoading', false, { root: true });
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
            commit('setAlertMsg', '商品加入失敗', { root: true });
            commit('setIsAlert', null, { root: true });
            return;
          }
          commit('setAlertMsg', '商品加入成功!', { root: true });
          commit('setIsAlert', null, { root: true });
        })
        .catch(error => {
          console.log(error.message);
        });
    },
    deleteCartItem({ commit }, itemId) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${itemId}`;

      axios
        .delete(api)
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', '刪除商品失敗', { root: true });
            commit('setIsAlert', null, { root: true });
            return;
          }
          commit('setAlertMsg', '刪除成功!', { root: true });
          commit('setIsAlert', null, { root: true });
        })
        .catch(error => console.log(error.message));
    },
    applyCoupon({ commit }, code) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;

      axios
        .post(api, { data: { code } })
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', res.data.message, { root: true });
            commit('setIsAlert', null, { root: true });
            return;
          }

          commit('setFinalTotal', res.data.data.final_total);
          commit('setCouponCode', code);
          commit('setAlertMsg', res.data.message, { root: true });
          commit('setIsAlert', null, { root: true });
        })
        .catch(error => console.log(error.message));
    },
    confirmOrder({ commit }, formData) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;

      axios
        .post(api, { data: formData })
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', res.data.message, { root: true });
            commit('setIsAlert', null, { root: true });
            return;
          }

          commit('setOrderId', res.data.orderId);
          commit('setAlertMsg', res.data.message, { root: true });
          commit('setIsAlert', null, { root: true });
        })
        .catch(error => console.log(error.message));
    },
    getOrder({ commit }, orderId) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${orderId}`;

      axios
        .get(api)
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', '找不到訂單資訊', { root: true });
            commit('setIsAlert', null, { root: true });
            return;
          }
          commit('setOrder', res.data.order);
        })
        .catch(error => console.log(error.message));
    },
    confirmPay({ commit }, orderId) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${orderId}`;

      axios
        .post(api)
        .then(res => {
          if (!res.data.success) {
            commit('setAlertMsg', '付款失敗', { root: true });
            commit('setIsAlert', null, { root: true });
            return;
          }

          commit('setPaid', true);
          commit('setAlertMsg', res.data.message, { root: true });
          commit('setIsAlert', null, { root: true });

          swal({
            title: '付款成功!',
            text: '再回去逛逛吧!',
            icon: 'success',
            buttons: {
              goto: '回商城',
            },
          }).then(value => {
            if (value) {
              commit('setJumped', true);
            }
          });
        })
        .catch(error => console.log(error.message));
    },
  },
};

export default createStore({
  state: {
    pagination: {},
    alertMsg: '',
    isAlert: false,
    isLoading: false,
  },
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
      }, 1000);
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {},
  modules: { moduleAdmin, moduleFrontPage },
});
