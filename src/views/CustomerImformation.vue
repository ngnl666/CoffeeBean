<template>
  <Alert v-if="isAlert" />
  <div class="userinfo mb-3">
    <div class="userinfo__input-group col-6 me-5">
      <Form v-slot="{ errors }">
        <div class="form-floating mb-3">
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
        <div class="form-floating mb-3">
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
        <div class="form-floating mb-3">
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
        <div class="form-floating mb-3">
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
        >
          <option selected disabled>請選擇支付方式</option>
          <option value="credit">刷卡</option>
          <option value="atm">ATM 轉帳</option>
        </Field>
        <ErrorMessage class="text-danger" name="paid" />
        <div class="input-group my-3">
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
      <p class="userinfo__title fs-5 fw-bolder text-center">
        <i class="fas fa-shopping-cart me-2"></i>購物清單
      </p>
      <table class="table">
        <tr v-for="[itemId, item] in carts" :key="itemId">
          <td style="height: 35px">
            {{ item.product.title }} {{ item.final_total }}
          </td>
        </tr>
      </table>
      <p
        v-if="finalTotal"
        class="userinfo__coupon text-center text-success fw-bolder fs-4"
      >
        <i class="fas fa-ticket-alt me-1"></i>{{ couponCode }}
      </p>
      <p class="userinfo__total text-start text-dark fw-bolder fs-5 pt-1">
        總金額
      </p>
      <p class="text-center text-danger fw-bolder fs-4">{{ totalPrice }}元</p>
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
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
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
      },
    },
  },
  computed: {
    ...mapState('moduleFrontPage', ['carts', 'finalTotal', 'couponCode']),
    ...mapState(['isAlert']),
    totalPrice() {
      if (this.finalTotal) {
        return Math.round(this.finalTotal);
      } else {
        return this.carts.reduce((acc, cur) => {
          return acc + cur[1].final_total;
        }, 0);
      }
    },
  },
  methods: {
    ...mapActions('moduleFrontPage', ['getCart', 'applyCoupon']),
    ...mapMutations('moduleFrontPage', ['setFormData']),
    useCoupon() {
      this.applyCoupon(this.code);
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss">
@import '../assets/abstracts/variables';

.userinfo {
  display: flex;

  &__paid {
    padding: 0.5rem 2rem;
    border: 2px solid $color-primary;
    border-radius: 1rem;
  }

  &__title {
    color: #694220;
  }
}
</style>
