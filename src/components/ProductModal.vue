<template>
  <form class="form">
    <div class="modal fade" ref="productModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="productModalLabel">
              <span class="fw-bold">新增產品</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              @click="productModal.hide()"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image" class="mb-2">輸入圖片網址</label>
                  <input
                    v-model="tempProduct.imageUrl"
                    type="text"
                    class="form-control mb-2"
                    id="image"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile" class="mb-2"
                    >或 上傳圖片
                    <i
                      class="fas fa-spinner fa-pulse"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    @change="uploadFile"
                    type="file"
                    id="customFile"
                    class="form-control mb-3"
                    ref="files"
                  />
                </div>
                <img :src="tempProduct.imageUrl" class="img-fluid" alt="" />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title" class="mb-2">標題</label>
                  <input
                    v-model="tempProduct.title"
                    type="text"
                    class="form-control mb-2"
                    id="title"
                    placeholder="請輸入標題"
                  />
                </div>

                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="category" class="mb-2">分類</label>
                    <input
                      v-model="tempProduct.category"
                      type="text"
                      class="form-control mb-2"
                      id="category"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price" class="mb-2">單位</label>
                    <input
                      v-model="tempProduct.unit"
                      type="text"
                      class="form-control mb-2"
                      id="unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="origin_price" class="mb-2">原價</label>
                    <input
                      v-model="tempProduct.original_price"
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price" class="mb-2">售價</label>
                    <input
                      v-model="tempProduct.price"
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description" class="mb-2">產品描述</label>
                  <textarea
                    v-model="tempProduct.description"
                    type="text"
                    class="form-control mb-2"
                    id="description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content" class="mb-2">說明內容</label>
                  <textarea
                    v-model="tempProduct.content"
                    type="text"
                    class="form-control mb-2"
                    id="content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="productModal.hide()"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { Modal } from 'bootstrap';

export default {
  name: 'ProductModal',
  data() {
    return {
      status: {
        fileUploading: false,
        fullPage: true,
        color: '#20c997',
      },
      productModal: null,
    };
  },
  computed: {
    ...mapState('moduleAdmin', ['tempProduct', 'isNew', 'showProductModal']),
  },
  watch: {
    showProductModal(val) {
      val ? this.productModal.show() : false;
    },
  },
  methods: {
    ...mapActions('moduleAdmin', ['getProducts']),
    ...mapMutations('moduleAdmin', ['setShowProductModal']),
    ...mapMutations(['setAlertMsg', 'setIsAlert']),
    updateProduct() {
      const vm = this;
      const api = vm.isNew
        ? `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
        : `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      const httpMethod = vm.isNew ? 'post' : 'put';

      vm.$http[httpMethod](api, { data: vm.tempProduct })
        .then(res => {
          if (!res.data.success) {
            vm.setAlertMsg('上傳商品失敗');
            vm.setIsAlert();
            this.productModal.hide();
            vm.getProducts();
            this.setShowProductModal(false);
            return;
          }
          this.productModal.hide();
          vm.getProducts();
        })
        .catch(error => console.log(error.message));
    },
    uploadFile() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      const uploadedFile = this.$refs.files.files[0];
      const formData = new FormData();
      vm.status.fileUploading = true;
      formData.append('file-to-upload', uploadedFile);
      vm.$http
        .post(api, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(res => {
          if (!res.data.success) {
            vm.setAlertMsg(res.data.message);
            vm.setIsAlert();
            vm.status.fileUploading = false;
            this.$refs.files.value = '';
            return;
          }
          vm.status.fileUploading = false;
          this.$refs.files.value = '';
          vm.tempProduct.imageUrl = res.data.imageUrl;
        })
        .catch(error => console.log(error.message));
    },
  },
  mounted() {
    this.productModal = new Modal(this.$refs.productModal);
  },
};
</script>

<style lang="scss" scoped></style>
