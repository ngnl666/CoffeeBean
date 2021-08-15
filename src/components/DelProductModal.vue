<template>
  <div
    class="modal fade"
    ref="delProductModal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span class="fw-bold">刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            @click="delProductModal.hide()"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct.title }}</strong>
          商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="delProductModal.hide()"
            class="btn btn-outline-secondary"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteProduct()">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { Modal } from 'bootstrap';

export default {
  name: 'DelProductModal',
  data() {
    return {
      delProductModal: 132,
    };
  },
  computed: {
    ...mapState('moduleAdmin', ['tempProduct', 'showDelModal']),
  },
  watch: {
    showDelModal(val) {
      val ? this.delProductModal.show() : false;
    },
  },
  methods: {
    ...mapActions('moduleAdmin', ['getProducts']),
    deleteProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${this.tempProduct.id}`;

      vm.$http
        .delete(api)
        .then(res => {
          if (!res.data.success) {
            vm.setAlertMsg(res.data.message);
            vm.setIsAlert();
            return;
          }
          this.delProductModal.hide();
          vm.getProducts();
        })
        .catch(error => console.log(error.message));
    },
  },
  mounted() {
    this.delProductModal = new Modal(this.$refs.delProductModal);
  },
};
</script>

<style lang="scss" scoped></style>
