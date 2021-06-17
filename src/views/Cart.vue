<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :is-full-page="status.fullPage"
    :color="status.color"
  />
  <Navbar />
  <div class="cart">
    <div class="cart__container">
      <div class="progress cart__prograss" style="height: 3rem">
        <div
          class="progress-bar cart__prograss-bar bg-success"
          role="progressbar"
          :style="`width: ${cartState.num}%`"
        >
          {{ cartState.title }}
        </div>
      </div>

      <div class="cart__customerCart">
        <CustomerCart v-if="this.$route.name === 'CustomerCart'" />
        <CustomerImformation
          v-if="this.$route.name === 'CustomerImformation'"
        />
        <CustomerOrder v-if="this.$route.name === 'CustomerOrder'" />
      </div>
      <div class="cart__btn">
        <router-link
          v-if="curUrl === '確認訂單'"
          to="/cart/customer_cart"
          class="myBtn cart__cancelBtn"
          >回購物車</router-link
        >
        <router-link
          :to="`/cart/${cartState.path}`"
          class="myBtn cart__myBtn"
          @click="confirm"
          >{{ curUrl }}</router-link
        >
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CustomerCart from '../views/CustomerCart.vue';
import CustomerImformation from '../views/CustomerImformation.vue';
import CustomerOrder from '../views/CustomerOrder.vue';

export default {
  components: {
    Loading,
    Navbar,
    Footer,
    CustomerCart,
    CustomerImformation,
    CustomerOrder,
  },
  data() {
    return {
      bgActive: false,
      cartState: {
        num: 33.3,
        title: '確認購物車',
        path: 'customer_imformation',
      },
      status: {
        fileUploading: false,
        fullPage: true,
        color: '#bb9175',
      },
    };
  },
  computed: {
    ...mapState('moduleFrontPage', ['formData']),
    ...mapState(['isLoading']),
    curUrl() {
      let routerName;

      switch (this.$route.name) {
        case 'CustomerCart':
          routerName = '確認商品';
          break;
        case 'CustomerImformation':
          routerName = '確認訂單';
          break;
        case 'CustomerOrder':
          routerName = '結帳付款';
          break;
      }
      return routerName;
    },
  },
  watch: {
    curUrl(val) {
      switch (val) {
        case '確認商品':
          this.cartState.num = 33.3;
          this.cartState.title = '確認購物車';
          this.cartState.path = 'customer_imformation';
          break;
        case '確認訂單':
          this.cartState.num = 66.6;
          this.cartState.title = '填寫寄貨資訊';
          this.cartState.path = 'customer_order';
          break;
        case '結帳付款':
          this.cartState.num = 100;
          this.cartState.title = '完成訂單';
          break;
      }
    },
  },
  methods: {
    ...mapActions('moduleFrontPage', ['confirmOrder']),
    ...mapMutations('moduleFrontPage', ['setBgActive']),
    ...mapMutations(['setIsLoading']),
    handleScroll() {
      this.bgActive = window.scrollY > 0 ? true : false;
      this.setBgActive(this.bgActive);
    },
    confirm() {
      if (this.$route.name === 'CustomerImformation') {
        this.confirmOrder(this.formData);
      } else {
        return;
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeRouteUpdate() {
    this.setIsLoading(true);
    setTimeout(() => {
      this.setIsLoading(false);
    }, 700);
  },
};
</script>

<style lang="scss"></style>
