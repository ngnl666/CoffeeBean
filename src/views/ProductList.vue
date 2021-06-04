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

  <table class="table table-striped table-hover align-middle my-5">
    <thead>
      <tr>
        <th width="150">分類</th>
        <th>產品名稱</th>
        <th width="150">原價</th>
        <th width="200">售價</th>
        <th width="200">
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

  <!-- productModal-->
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
              <img
                :src="tempProduct.imageUrl"
                img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                class="img-fluid"
                alt=""
              />
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
                    type="unit"
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
          <button type="button" class="btn btn-primary" @click="updateProduct">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- delProductModal -->
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
import { mapActions, mapMutations, mapState } from 'vuex';
import { Modal } from 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Alert from '../components/Alert.vue';
import Pagination from '../components/Pagination.vue';

export default {
  data() {
    return {
      status: {
        fileUploading: false,
        fullPage: true,
        color: '#20c997',
      },
      tempProduct: {
        imageUrl: '',
      },
      isNew: false,
      isEnabled: false,
      productModal: null,
      delProductModal: null,
    };
  },
  components: {
    Loading,
    Alert,
    Pagination,
  },
  computed: {
    ...mapState('moduleAdmin', ['isAlert', 'products', 'isLoading']),
    enabledProducts() {
      return this.isEnabled
        ? this.products.filter(p => p.is_enabled)
        : this.products;
    },
  },
  methods: {
    ...mapActions('moduleAdmin', ['getProducts']),
    ...mapMutations('moduleAdmin', ['setAlertMsg', 'setIsAlert']),
    openProductModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = Object.assign({}, item);
        this.isNew = false;
      }
      this.productModal.show();
    },
    updateProduct() {
      var vm = this;
      let api = vm.isNew
        ? `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
        : `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      let httpMethod = vm.isNew ? 'post' : 'put';

      this.$http[httpMethod](api, { data: vm.tempProduct })
        .then(res => {
          if (!res.data.success) {
            vm.setAlertMsg('上傳商品失敗');
            vm.setIsAlert();
            this.productModal.hide();
            vm.getProducts();
            return;
          }
          this.productModal.hide();
          vm.getProducts();
        })
        .catch(error => console.log(error.message));
    },
    openDelProductModal(item) {
      this.tempProduct = Object.assign({}, item);
      this.delProductModal.show();
    },
    deleteProduct() {
      var vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${this.tempProduct.id}`;

      this.$http
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
    uploadFile() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      const uploadedFile = this.$refs.files.files[0];
      const formData = new FormData();
      vm.status.fileUploading = true;
      formData.append('file-to-upload', uploadedFile);
      this.$http
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
  mounted() {
    this.productModal = new Modal(this.$refs.productModal);
    this.delProductModal = new Modal(this.$refs.delProductModal);
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
