<template>
  <Navbar />
  <Banner />
  <div class="favorite">
    <Card />
    <Card />
    <Card />
    <Card />
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
