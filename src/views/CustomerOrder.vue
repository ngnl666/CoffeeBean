<template>
  <Alert v-if="isAlert" />
  <table class="table table-striped table-hover mb-5">
    <thead>
      <tr class="fs-5">
        <th width="200px" scope="col">訂購時間</th>
        <th width="300px" scope="col">訂單編號</th>
        <th width="180px" scope="col">價格</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ createOrderDate(order.create_at) }}</td>
        <td>{{ orderId }}</td>
        <td>${{ Math.round(order.total) }}</td>
      </tr>
    </tbody>
  </table>

  <p class="text-success fs-5 fw-bold">
    <i class="fas fa-info-circle me-2"></i>收件人資訊
  </p>
  <table class="table table-striped table-hover mb-5" v-if="order?.user">
    <tbody>
      <tr>
        <th>姓名</th>
        <td>{{ order.user.name }}</td>
      </tr>
      <tr>
        <th>收件人電話</th>
        <td>{{ order.user.tel }}</td>
      </tr>
      <tr>
        <th>收件人信箱</th>
        <td>{{ order.user.email }}</td>
      </tr>
      <tr>
        <th>收件人地址</th>
        <td>{{ order.user.address }}</td>
      </tr>
      <tr>
        <th>付款方式</th>
        <td>{{ order.user.pay }}</td>
      </tr>
      <tr>
        <th>付款狀態</th>
        <td>
          <span v-if="order.is_paid" class="text-success">已付款</span>
          <span v-else class="text-danger">尚未付款</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import Alert from '../components/Alert.vue';

export default {
  components: { Alert },
  data() {
    return {};
  },
  computed: {
    ...mapState('moduleFrontPage', ['orderId', 'order']),
    ...mapState(['isAlert']),
  },
  methods: {
    ...mapMutations('moduleFrontPage', ['setButtonEnabled']),
    ...mapActions('moduleFrontPage', ['getOrder']),
    createOrderDate(timestamp) {
      const time = new Date(timestamp * 1000);
      return `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`;
    },
  },
  created() {
    const vm = this;
    setTimeout(() => vm.getOrder(this.orderId), 1000);
    vm.setButtonEnabled(true);
  },
};
</script>

<style lang="scss"></style>
