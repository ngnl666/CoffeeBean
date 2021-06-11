<template>
  <Navbar />
  <Banner />
  <div class="favorite">
    <button
      class="btn btn-primary favorite__btn"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
    >
      我的優惠券
    </button>
    <div class="row justify-content-center">
      <div class="collapse col-6 mb-4" id="collapseExample">
        <div class="list-group" v-for="coupon in myCoupons" :key="coupon.code">
          <a
            href="#"
            class="fs-5 text-danger list-group-item list-group-item-action"
            ><span class="fs-5 fw-bold text-success ml-3">{{
              coupon.code
            }}</span>
            ({{ coupon.name }})
            <span class="favorite__date">{{ coupon.date }}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="favorite__item">
      <Card v-for="item in favoriteProducts" :key="item.id" :product="item" />
    </div>
  </div>
  <Footer />
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Navbar from '../components/Navbar.vue';
import Banner from '../components/Banner.vue';
import Card from '../components/Card.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Banner,
    Card,
    Footer,
  },
  data() {
    return {
      coupons: '',
    };
  },
  computed: {
    ...mapState('moduleFrontPage', ['staredProducts', 'products']),
    favoriteProducts() {
      return this.products.filter(p => this.staredProducts.includes(p.id));
    },
    myCoupons() {
      const set = new Set();
      return this.coupons.filter(c =>
        !set.has(c.name) ? set.add(c.name) : false
      );
    },
  },
  methods: {
    ...mapActions('moduleFrontPage', ['getProducts']),
    handleScroll() {
      this.bgActive = window.scrollY > 0 ? true : false;
      this.setBgActive(this.bgActive);
    },
  },
  created() {
    this.getProducts();
    this.coupons = JSON.parse(localStorage.getItem('myCoupons')) || [];
  },
};
</script>

<style lang="scss"></style>
