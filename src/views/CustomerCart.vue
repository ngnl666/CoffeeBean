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
      <tr v-for="item in myCart" :key="item.product_id">
        <th class="fs-6" scope="row">{{ item.title }}</th>
        <td>{{ item.qty }} {{ item.unit }}</td>
        <td>${{ item.price * item.qty }}</td>
        <td>
          <button @click="deleteItem(item.product_id)" class="btn btn-danger">
            刪除
          </button>
        </td>
        <!-- localstorage & 舊cart-->
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

  <p class="total text-end text-dark fw-bolder fs-4 pt-2" v-if="myCart.length">
    總金額：<span class="text-danger">{{ totalPrice }}</span
    >元
  </p>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';
import Alert from '../components/Alert.vue';

export default {
  components: { Alert },
  data() {
    return {};
  },
  computed: {
    ...mapState('moduleFrontPage', ['carts', 'originCart']),
    ...mapState(['isAlert']),
    ...mapGetters('moduleFrontPage', ['myCart']),
    totalPrice() {
      return this.myCart.reduce((acc, cur) => {
        return acc + cur.price * cur.qty;
      }, 0);
    },
  },
  methods: {
    ...mapActions('moduleFrontPage', ['getCart', 'deleteCartItem']),
    ...mapMutations('moduleFrontPage', ['delTempCart']),
    ...mapMutations(['setAlertMsg', 'setIsAlert']),
    deleteItem(itemId) {
      this.delTempCart(itemId);
      this.setAlertMsg('刪除商品成功');
      this.setIsAlert();
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
