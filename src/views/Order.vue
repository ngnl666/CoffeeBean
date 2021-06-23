<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :is-full-page="status.fullPage"
    :color="status.color"
  />

  <table class="table table-striped table-hover align-middle my-5">
    <thead>
      <tr>
        <th width="150">購買時間</th>
        <th width="150">Email</th>
        <th>購買款項</th>
        <th width="150">應付金額</th>
        <th width="100">是否付款</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in orders" :key="key">
        <td>{{ createOrderDate(item.create_at) }}</td>
        <td>{{ item.user?.email }}</td>
        <td>
          <ul
            v-for="(p, key) in item.products"
            :key="key"
            class="list-unstyled"
          >
            <li>{{ p.product.title }} * {{ p.qty }}</li>
          </ul>
        </td>
        <td>$ {{ Math.round(item.total) }}</td>
        <td>
          <strong v-if="item.is_paid" class="text-success">已付款</strong>
          <span v-else class="text-mutes">未付款</span>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="d-flex justify-content-center">
    <Pagination />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Pagination from '../components/Pagination.vue';

export default {
  data() {
    return {
      status: {
        fullPage: true,
        color: '#20c997',
      },
    };
  },
  components: {
    Loading,
    Pagination,
  },
  computed: {
    ...mapState('moduleAdmin', ['isLoading', 'orders']),
  },
  methods: {
    createOrderDate(timestamp) {
      const time = new Date(timestamp * 1000);
      return `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`;
    },
  },
  created() {
    this.$store.dispatch('moduleAdmin/getOrders');
  },
};
</script>

<style lang="scss"></style>
