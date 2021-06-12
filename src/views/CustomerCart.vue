<template>
  <Alert v-if="isAlert" />
  <table class="table table-striped table-hover">
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
          <button @click="deleteCartItem(item.id)" class="btn btn-danger">
            刪除
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <p class="total text-end text-success fw-bolder fs-4 pt-2">
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
  },
  created() {
    this.getCart(); // 一次只會刪除一單位的產品，而且之後要重複取得購物車資料
  },
};
</script>

<style lang="scss">
.table > tbody > tr > td {
  vertical-align: middle;
}
</style>
