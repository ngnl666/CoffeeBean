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
        <div class="list-group">
          <a
            href="#"
            class="fs-5 text-danger list-group-item list-group-item-action"
            ><span class="fs-5 fw-bold text-success ml-3">ABC123</span>
            (50% off)
          </a>
          <a href="#" class="list-group-item list-group-item-action"
            >A second link item</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >A third link item</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >A fourth link item</a
          >
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
    return {};
  },
  computed: {
    ...mapState('moduleFrontPage', ['staredProducts', 'products']),
    favoriteProducts() {
      return this.products.filter(p => this.staredProducts.includes(p.id));
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
  },
};
</script>

<style lang="scss"></style>
