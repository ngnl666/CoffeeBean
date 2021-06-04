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
    @click="openCouponModal(true)"
  >
    新增優惠券
  </button>

  <table class="table table-striped table-hover align-middle my-5">
    <thead>
      <tr>
        <th>優惠券名稱</th>
        <th width="200">CODE</th>
        <th width="200">折扣比</th>
        <th width="150">到期日</th>
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
      <tr v-for="item in enabledCoupons" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.code }}</td>
        <td>{{ item.percent }}</td>
        <td>{{ conertToDate(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled" class="text-success">已啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <button
            @click="openCouponModal(false, item)"
            class="btn btn-outline-success btn-sm"
          >
            編輯
          </button>
          <button
            @click="openDelCouponModal(item)"
            class="btn btn-outline-danger btn-sm"
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

  <!-- CouponModal -->
  <div class="modal fade" ref="couponModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="couponModalLabel">
            <span class="fw-bold">新增優惠券</span>
          </h5>
          <button
            @click="couponModal.hide()"
            type="button"
            class="btn-close"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="title" class="mb-1">標題</label>
            <input
              v-model="tempCoupon.title"
              class="form-control"
              id="title"
              type="text"
              placeholder="請輸入標題"
            />
          </div>
          <div class="form-group">
            <label class="my-1" for="code">優惠碼</label>
            <input
              v-model="tempCoupon.code"
              min="2021-05-27"
              class="form-control"
              id="code"
              type="text"
              placeholder="請輸入優惠碼"
            />
          </div>
          <div class="form-group">
            <label class="my-1" for="percent">折扣百分比</label>
            <input
              v-model="tempCoupon.percent"
              class="form-control"
              id="percent"
              type="number"
              placeholder="請輸入折扣"
            />
          </div>
          <div class="form-group">
            <label class="my-1" for="date">到期日</label>
            <input
              v-model="date"
              ref="couponDate"
              class="form-control"
              id="date"
              type="date"
              placeholder="請輸入日期"
            />
          </div>
          <input
            v-model="tempCoupon.is_enabled"
            :true-value="1"
            :false-value="0"
            class="my-3 mt-4"
            id="is_enabled"
            type="checkbox"
          />
          <label for="is_enabled">&nbsp;是否啟用</label>
        </div>
        <div class="modal-footer">
          <button
            @click="couponModal.hide()"
            type="button"
            class="btn btn-secondary"
          >
            取消
          </button>
          <button @click="updateCoupon" class="btn btn-primary" type="button">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- delCouponModal -->
  <div class="modal fade" ref="delCouponModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span class="fw-bold">刪除優惠券</span>
          </h5>
          <button
            @click="delCouponModal.hide()"
            type="button"
            class="btn-close"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempCoupon.title }}</strong>
          優惠券(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            @click="delCouponModal.hide()"
            class="btn btn-outline-secondary"
            type="button"
          >
            取消
          </button>
          <button @click="deleteCoupon()" class="btn btn-danger" type="button">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import { Modal } from 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Alert from '../components/Alert.vue';
import Pagination from '../components/Pagination.vue';

export default {
  data() {
    return {
      status: {
        fullPage: true,
        color: '#20c997',
      },
      tempCoupon: {},
      isNew: false,
      isEnabled: false,
      couponModal: null,
      delCouponModal: null,
      date: '',
    };
  },
  components: {
    Loading,
    Alert,
    Pagination,
  },
  watch: {
    date() {
      const timestamp = new Date(this.date);
      this.tempCoupon.due_date = Math.floor(timestamp / 1000);
    },
  },
  computed: {
    ...mapState('moduleAdmin', ['coupons', 'isAlert', 'isLoading']),
    enabledCoupons() {
      return this.isEnabled
        ? this.coupons.filter(p => p.is_enabled)
        : this.coupons;
    },
  },
  methods: {
    ...mapActions('moduleAdmin', ['getCoupons']),
    ...mapMutations('moduleAdmin', ['setAlertMsg', 'setIsAlert']),
    openCouponModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {};
        this.isNew = true;
      } else {
        this.tempCoupon = Object.assign({}, item);
        this.isNew = false;
      }
      this.couponModal.show();
    },
    updateCoupon() {
      var vm = this;
      let api = vm.isNew
        ? `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`
        : `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
      let httpMethod = vm.isNew ? 'post' : 'put';

      this.$http[httpMethod](api, { data: vm.tempCoupon })
        .then(res => {
          if (!res.data.success) {
            vm.setAlertMsg('上傳優惠券失敗');
            this.couponModal.hide();
            vm.getCoupons();
            return;
          }
          this.couponModal.hide();
          vm.getCoupons();
        })
        .catch(error => console.log(error.message));
    },
    openDelCouponModal(item) {
      this.tempCoupon = Object.assign({}, item);
      this.delCouponModal.show();
    },
    deleteCoupon() {
      var vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${this.tempCoupon.id}`;

      this.$http
        .delete(api)
        .then(res => {
          if (!res.data.success) {
            vm.setAlertMsg(res.data.message);
            return;
          }
          this.delCouponModal.hide();
          vm.getCoupons();
        })
        .catch(error => console.log(error.message));
    },
    conertToDate(timestamp) {
      return new Date(timestamp * 1000).toLocaleDateString();
    },
  },
  mounted() {
    this.couponModal = new Modal(this.$refs.couponModal);
    this.delCouponModal = new Modal(this.$refs.delCouponModal);
  },
  created() {
    this.getCoupons();
  },
};
</script>

<style lang="scss" scoped>
.enabledCheck {
  margin: 0 0 0 3px;
}
</style>
