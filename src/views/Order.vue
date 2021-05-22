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
      <tr>
        <td>{{ 123 }}</td>
        <td>{{ 456 }}</td>
        <td>
          <ul class="list-unstyled">
            <li>
              {{ 333 }} 數量 {{ 777 }}
              {{ 111 }}
            </li>
          </ul>
        </td>
        <td>{{ 222 }}</td>
        <td>
          <strong class="text-success">已付款</strong>
          <!-- <span v-else class="text-mutes">未付款</span> -->
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
    ...mapState(['isLoading', 'orders']),
  },
  created() {
    this.$store.dispatch('getOrders');
  },
};
</script>

<style lang="scss"></style>
