<template>
  <!-- <router-link :to="{ name: 'Login' }">登入</router-link> -->
  <div class="wrap">
    <Header />
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
