<template>
  <Alert v-if="isAlert" />
  <table class="table table-striped table-hover" v-if="myCart.length">
    <thead>
      <tr class="fs-5">
        <th width="300px" scope="col">商品</th>
        <th width="180px" scope="col">數量</th>
        <th width="180px" scope="col">價格</th>
        <th width="100px" scope="col">刪除</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="[itemId, item] in myCart" :key="itemId" class="">
        <th class="fs-6" scope="row">{{ item.product.title }}</th>
        <td>{{ item.qty }}{{ item.product.unit }}</td>
        <td>${{ item.total }}</td>
        <td>
          <button @click="deleteItem(itemId)" class="btn btn-danger">
            刪除
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="noCart" v-else>
    <p class="fs-3">購物車內沒有商品，趕快去逛逛吧！</p>
    <router-link
      to="/shop/all"
      class="btn btn-lg btn-outline-success my-5 returnBtn"
      >回商店</router-link
    >
  </div>

  <p
    class="total text-end text-success fw-bolder fs-4 pt-2"
    v-if="myCart.length"
  >
    總金額：<span>{{ totalPrice }}</span
    >元
  </p>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Alert from '../components/Alert.vue';

export default {
  components: { Alert },
  data() {
    return {
      myCart: [],
    };
  },
  computed: {
    ...mapState('moduleFrontPage', ['carts']),
    ...mapState(['isAlert']),
    myCarts() {
      const map = new Map();
      for (const c of this.carts) {
        !map.get(c.product_id)
          ? map.set(c.product_id, c)
          : (map.get(c.product_id).qty += c.qty);
      }
      return map;
    },
    totalPrice() {
      return this.myCart.reduce((acc, cur) => {
        return acc + cur[1].final_total * cur[1].qty;
      }, 0);
    },
  },
  watch: {
    myCarts(val) {
      this.myCart = [...val];
    },
  },
  methods: {
    ...mapActions('moduleFrontPage', ['getCart', 'deleteCartItem']),
    deleteItem(itemId) {
      const vm = this;

      for (const c of vm.carts) {
        if (c.product_id === itemId) {
          vm.deleteCartItem(c.id);
        }
      }
      setTimeout(() => vm.getCart(), 1000);
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss">
.table > tbody > tr > td {
  vertical-align: middle;
}
.returnBtn:hover {
  color: #fff;
}
</style>
