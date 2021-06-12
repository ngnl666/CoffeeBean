<template>
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
        <CustomerCart />
      </div>

      <div class="cart__btn">
        <button class="myBtn cart__myBtn">繼續結帳</button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { mapMutations } from 'vuex';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import CustomerCart from '../views/CustomerCart.vue';

export default {
  components: {
    Navbar,
    Footer,
    CustomerCart,
  },
  data() {
    return {
      bgActive: false,
      progress: [
        { num: 33.3, title: '確認購物車' },
        { num: 66.6, title: '寄貨資訊' },
        { num: 100, title: '完成訂單' },
      ],
      cartState: { num: 33.3, title: '確認購物車' },
    };
  },
  computed: {},
  methods: {
    ...mapMutations('moduleFrontPage', ['setBgActive']),
    handleScroll() {
      this.bgActive = window.scrollY > 0 ? true : false;
      this.setBgActive(this.bgActive);
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss"></style>
