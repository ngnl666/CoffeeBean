<template>
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
          />{{ errors }}
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
          />
          <ErrorMessage name="tel" />
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
          />
          <ErrorMessage name="email" />
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
          />
          <ErrorMessage name="addr" />
          <label for="addr">地址</label>
        </div>
        <Field
          class="form-select"
          as="select"
          name="paid"
          rules="required"
          placeholder="地址"
        >
          <option disabled>請選擇支付方式</option>
          <option value="credit">刷卡</option>
          <option value="atm">ATM 轉帳</option>
        </Field>
        <ErrorMessage name="paid" />
        <div class="input-group my-3">
          <input type="text" class="form-control" />
          <button class="btn btn-success text-light" type="button">套用</button>
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
      <p class="userinfo__coupon text-center text-success fw-bolder fs-4">
        <i class="fas fa-ticket-alt me-1"></i>COFFEE520
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
      ></textarea>
      <label for="floatingTextarea2">留言備註</label>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate';

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
  if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
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
  },
  data() {
    return {};
  },
  computed: {
    ...mapState('moduleFrontPage', ['carts']),
    totalPrice() {
      return this.carts.reduce((acc, cur) => {
        return acc + cur[1].final_total;
      }, 0);
    },
  },
  methods: {
    ...mapActions('moduleFrontPage', ['getCart']),
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
