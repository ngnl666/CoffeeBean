<template>
  <Navbar />
  <Banner />
  <div class="favorite">
    <p>
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
      >
        我的優惠券
      </button>
    </p>
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
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
  <Footer />
</template>

<script>
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
};
</script>

<style lang="scss"></style>
