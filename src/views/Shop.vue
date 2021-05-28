<template>
  <Navbar />
  <Banner />
  <main class="shop">
    <nav class="shop__nav" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/shop">TOP</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>

    <div class="container">
      <div class="row">
        <div class="shop__list">
          <ul class="list-group">
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
              "
            >
              A list item
              <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
              "
            >
              A second list item
              <span class="badge bg-primary rounded-pill">2</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
              "
            >
              A third list item
              <span class="badge bg-primary rounded-pill">1</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script>
import { mapMutations } from 'vuex';
import Navbar from '../components/Navbar.vue';
import Banner from '../components/Banner.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
    Banner,
  },
  data() {
    return {
      bgActive: false,
    };
  },
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
