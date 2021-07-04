<template>
  <Alert v-if="isAlert" />
  <div class="userinfo mb-3">
    <div class="userinfo__input-group col-12 col-md-6 me-5">
      <Form v-slot="{ errors }">
        <div class="form-floating mb-4">
          <Field
            type="text"
            class="form-control"
            autocomplete="off"
            placeholder="姓名"
            id="name"
            name="name"
            rules="required"
            :class="{ 'is-invalid': errors.name }"
            v-model="form.user.name"
          />
          <ErrorMessage class="text-danger" name="name" />
          <label for="name">姓名</label>
        </div>
        <div class="form-floating mb-4">
          <Field
            type="number"
            class="form-control"
            autocomplete="off"
            placeholder="電話"
            id="tel"
            name="tel"
            rules="required|minMaxLength:8,10"
            :class="{ 'is-invalid': errors.tel }"
            v-model="form.user.tel"
          />
          <ErrorMessage class="text-danger" name="tel" />
          <label for="tel">電話</label>
        </div>
        <div class="form-floating mb-4">
          <Field
            type="email"
            class="form-control"
            autocomplete="off"
            placeholder="電子信箱"
            id="email"
            name="email"
            rules="required|email"
            :class="{ 'is-invalid': errors.email }"
            v-model="form.user.email"
          />
          <ErrorMessage class="text-danger" name="email" />
          <label for="email">電子信箱</label>
        </div>
        <div class="form-floating mb-4">
          <Field
            type="text"
            class="form-control"
            autocomplete="off"
            placeholder="地址"
            id="addr"
            name="addr"
            rules="required"
            :class="{ 'is-invalid': errors.addr }"
            v-model="form.user.address"
          />
          <ErrorMessage class="text-danger" name="addr" />
          <label for="addr">地址</label>
        </div>
        <Field
          class="form-select"
          as="select"
          name="paid"
          rules="required"
          :class="{ 'is-invalid': errors.paid }"
          v-model="form.user.pay"
        >
          <option selected disabled>請選擇支付方式</option>
          <option value="刷卡">刷卡</option>
          <option value="ATM轉帳">ATM 轉帳</option>
        </Field>
        <ErrorMessage class="text-danger" name="paid" />
        <div class="input-group my-5">
          <input v-model="code" type="text" class="form-control" />
          <button
            @click="useCoupon()"
            class="btn btn-success text-light"
            type="button"
          >
            套用
          </button>
        </div>
      </Form>
    </div>

    <div class="userinfo__paid">
      <p class="userinfo__title fw-bolder text-center">
        <i class="fas fa-shopping-cart me-2"></i>購物清單
      </p>
      <table class="table">
        <tr v-for="item in carts" :key="item.id">
          <td style="height: 35px" class="userinfo__item text-center">
            {{ item.product.title }} {{ item.total }}
          </td>
        </tr>
      </table>
      <p
        class="userinfo__coupon text-center text-success fw-bolder"
        v-if="isUsed"
      >
        <i class="fas fa-ticket-alt me-1"></i>{{ couponCode }}
      </p>
      <p
        class="userinfo__coupon text-center text-success fw-bolder"
        v-if="isUsed"
      >
        ({{ discount }})
      </p>
      <p class="userinfo__total text-start text-dark fw-bolder pt-1">總金額</p>
      <p
        v-if="isUsed"
        class="userinfo__price text-center text-danger fw-bolder"
      >
        {{ finalTotal }}元
      </p>
      <p v-else class="userinfo__price text-center text-danger fw-bolder">
        {{ totalPrice }}元
      </p>
    </div>
  </div>

  <div class="userinfo__comment">
    <div class="form-floating">
      <textarea
        class="form-control"
        autocomplete="off"
        placeholder="留言備註"
        id="floatingTextarea2"
        style="height: 100px"
        v-model="form.message"
      ></textarea>
      <label for="floatingTextarea2">留言備註</label>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate';
import { couponList } from '../couponList.js';
import Alert from '../components/Alert.vue';
defineRule('required', value => {
  if (!value || !value.length) {
    return '此欄位為必填';
  }
  return true;
});
defineRule('email', value => {
  if (!value || !value.length) {
    return true;
  }
  if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
  ) {
    return 'Email 必須為正確格式';
  }
  return true;
});
defineRule('minMaxLength', (value, [min, max]) => {
  if (!value || !value.length) {
    return true;
  }
  if (value.length < min) {
    return `必須至少為 ${min} 位數字`;
  }
  if (value.length > max) {
    return `必須少於 ${max} 位數字`;
  }
  return true;
});
//////////////////////////////////////////////////////////////
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    Alert,
  },
  data() {
    return {
      code: '',
      isUsed: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          pay: '',
        },
        message: '',
      },
    };
  },
  watch: {
    form: {
      deep: true,
      handler(val) {
        this.setFormData(val);
        if (
          [...document.querySelectorAll('[role="alert"]')].length === 0 &&
          !Object.values(this.form.user).includes('')
        ) {
          this.setButtonEnabled(true);
        } else {
          this.setButtonEnabled(false);
        }
      },
    },
    finalTotal() {
      this.isUsed = true;
    },
    totalPrice() {
      this.isUsed = false;
    },
  },
  computed: {
    ...mapState('moduleFrontPage', ['carts', 'couponCode', 'finalTotal']),
    ...mapState(['isAlert']),
    totalPrice() {
      return this.carts.reduce((acc, cur) => acc + cur.total, 0);
    },
    discount() {
      return couponList.find(c => c.code === this.code)?.name;
    },
  },
  methods: {
    ...mapActions('moduleFrontPage', [
      'getCart',
      'applyCoupon',
      'deleteCartItem',
    ]),
    ...mapMutations('moduleFrontPage', ['setFormData', 'setButtonEnabled']),
    useCoupon() {
      this.applyCoupon(this.code);
    },
  },
  created() {
    const vm = this;
    setTimeout(() => vm.getCart(), 1000);
  },
  unmounted() {
    this.setButtonEnabled(false);
    this.carts.forEach(item => this.deleteCartItem(item.id));
    localStorage.setItem('storageCart', JSON.stringify([]));
  },
};
</script>

<style lang="scss">
@import '../assets/abstracts/variables';
@import '../assets/abstracts/mixins';
.userinfo {
  display: flex;
  @include respond(phone) {
    display: block;
  }
  &__paid {
    padding: 0.5rem 2rem;
    width: 40%;
    border: 2px solid $color-primary;
    border-radius: 1rem;
    @include respond(phone) {
      width: 95%;
      margin: 0 auto 2rem auto;
    }
  }
  &__title {
    color: #694220;
  }
  &__item {
    @include respond(phone) {
      font-size: $font-m;
    }
  }
  &__title,
  &__coupon,
  &__total,
  &__price {
    font-size: $font-m;
    @include respond(phone) {
      font-size: $font-l;
    }
  }
}
</style>
