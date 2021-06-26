<template>
  <Alert v-if="isAlert" />
  <table class="table table-striped table-hover" v-if="myCart.length">
    <thead>
      <tr class="fs-5">
        <th width="250px" scope="col">商品</th>
        <th width="230px" scope="col">數量</th>
        <th width="180px" scope="col">價格</th>
        <th width="100px" scope="col">刪除</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in myCart" :key="item.product_id">
        <th class="fs-6" scope="row">{{ item.title }}</th>
        <td>
          <div class="input-group mb-3">
            <button
              @click="changeQty(item, '-')"
              class="input-group-text btn btn-success"
              :disabled="item.qty === 1"
            >
              <i class="input-append fas fa-minus"></i>
            </button>
            <input
              type="text"
              v-model="item.qty"
              disabled
              class="form-control text-center"
            />
            <button
              @click="changeQty(item, '+')"
              class="input-group-text btn btn-success"
            >
              <i class="input-append fas fa-plus"></i>
            </button>
          </div>
        </td>
        <td>${{ item.price * item.qty }}</td>
        <td>
          <button @click="deleteItem(item.product_id)" class="btn btn-danger">
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
  watch: {
    myCart() {
      if (this.myCart.length === 0) this.setButtonEnabled(false);
    },
  },
  computed: {
    ...mapState(['isAlert']),
    ...mapGetters('moduleFrontPage', ['myCart']),
    totalPrice() {
      return this.myCart.reduce((acc, cur) => {
        return acc + cur.price * cur.qty;
      }, 0);
    },
  },
  methods: {
    ...mapActions('moduleFrontPage', ['deleteCartItem']),
    ...mapMutations('moduleFrontPage', [
      'delTempCart',
      'setButtonEnabled',
      'setTempCart',
    ]),
    changeQty(item, state) {
      let qty = item.qty;
      if (state === '-' && qty !== 1) {
        this.setTempCart({
          product_id: item.product_id,
          qty: --qty,
          change: true,
        });
      }
      if (state === '+') {
        this.setTempCart({
          product_id: item.product_id,
          qty: ++qty,
          change: true,
        });
      }
    },
    deleteItem(itemId) {
      this.delTempCart(itemId);
      this.deleteCartItem(itemId);
    },
  },
  created() {
    if (this.myCart.length > 0) this.setButtonEnabled(true);
  },
};
</script>

<style lang="scss">
.table > tbody > tr > td {
  vertical-align: middle;
}

.input-append {
  color: #fff;
}

.returnBtn:hover {
  color: #fff;
}
</style>
