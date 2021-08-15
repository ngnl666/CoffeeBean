<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :is-full-page="status.fullPage"
    :color="status.color"
  />

  <Alert v-if="isAlert" />

  <button
    type="button"
    class="btn btn-dark float-end my-4"
    @click="openProductModal(true)"
  >
    建立新產品
  </button>
  <table class="col-10 table table-striped table-hover align-middle my-5">
    <thead>
      <tr>
        <th width="200">分類</th>
        <th>產品名稱</th>
        <th width="150">原價</th>
        <th width="200">售價</th>
        <th width="150">
          是否啟用
          <input
            v-model="isEnabled"
            class="form-check-input enabledCheck"
            type="checkbox"
            value="isEnabled"
            id="flexCheckDefault"
          />
        </th>
        <th width="180">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in enabledProducts" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td>{{ setCurrency(item.original_price) }}</td>
        <td>{{ setCurrency(item.price) }}</td>
        <td>
          <span v-if="item.is_enabled" class="text-success">啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <button
            class="btn btn-outline-success btn-sm"
            @click="openProductModal(false, item)"
          >
            編輯
          </button>
          <button
            class="btn btn-outline-danger btn-sm"
            @click="openDelProductModal(item)"
          >
            刪除
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex justify-content-center">
    <Pagination />
  </div>

  <ProductModal />
  <DelProductModal />
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Alert from '../components/Alert.vue';
import Pagination from '../components/Pagination.vue';
import ProductModal from '../components/ProductModal.vue';
import DelProductModal from '../components/DelProductModal.vue';

export default {
  data() {
    return {
      status: {
        fileUploading: false,
        fullPage: true,
        color: '#20c997',
      },
      isEnabled: false,
    };
  },
  components: {
    Loading,
    Alert,
    Pagination,
    ProductModal,
    DelProductModal,
  },
  computed: {
    ...mapState('moduleAdmin', ['products', 'isLoading', 'isNew']),
    ...mapState(['isAlert']),
    enabledProducts() {
      return this.isEnabled
        ? this.products.filter(p => p.is_enabled)
        : this.products;
    },
  },
  methods: {
    ...mapActions('moduleAdmin', ['getProducts']),
    ...mapMutations('moduleAdmin', [
      'setTempProduct',
      'setIsNew',
      'setShowProductModal',
      'setShowDelModal',
    ]),
    ...mapMutations(['setAlertMsg', 'setIsAlert']),
    openProductModal(isNew, item) {
      if (isNew) {
        this.setTempProduct({});
        this.setIsNew(true);
      } else {
        this.setTempProduct({ ...item });
        this.setIsNew(false);
      }
      this.setShowProductModal(false);
      setTimeout(() => {
        this.setShowProductModal(true);
      }, 500);
    },
    openDelProductModal(item) {
      this.setTempProduct({ ...item });
      this.setShowDelModal(false);
      setTimeout(() => {
        this.setShowDelModal(true);
      }, 500);
    },
    setCurrency(num) {
      const n = Number(num);
      return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
        const currency =
          i && c !== '.' && (a.length - i) % 3 === 0
            ? `, ${c}`.replace(/\s/g, '')
            : c;
        return currency;
      })}`;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.enabledCheck {
  margin: 0 0 0 3px;
}
</style>
