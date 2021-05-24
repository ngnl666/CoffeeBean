<template>
  <!-- <router-link :to="{ name: 'Login' }">登入</router-link> -->
  <div class="wrap">
    <Header />

    <section class="intro">
      <h2 class="intro__title">我們的咖啡</h2>
      <p class="intro__description">
        我們認真對待每一杯咖啡，精挑細選來自不同產區的咖啡豆，從生豆到烘培層層把關，結合來自台灣高大牧場的牛奶，打造出完美的比例。
      </p>
      <ul class="intro__section">
        <li class="intro__section-1">
          <div class="intro__pic">
            <img src="../assets/image/intro-1.jpg" alt="coffeBean">
          </div>
          <p class="intro__in">來自咖啡發源地的中南美洲以及非洲的咖啡豆</p>
        </li>
        <li class="intro__section-2">
          <div class="intro__pic">
            <img src="../assets/image/intro-2.jpg" alt="coffeBean">
          </div>
          <p class="intro__in">使用品質最好的鮮乳，在高溫加熱下呈現出最完美的奶泡</p>
        </li>
        <li class="intro__section-3">
          <div class="intro__pic">
            <img src="../assets/image/intro-3.jpg" alt="coffeBean">
          </div>
          <p class="intro__in">專業的義式咖啡機萃取出迷人香氣的 Espresso</p>
        </li>
      </ul>
    </section>

    <main class="main">
      <div class="main__section">
        <h3 class="main__topic">選豆</h3>
        <p class="main__description"></p>
      </div>
      <div class="main__section">
        <h3 class="main__topic">研磨</h3>
        <p class="main__description"></p>
      </div>
      <div class="main__section">
        <h3 class="main__topic">烘培</h3>
        <p class="main__description"></p>
      </div>
      <div class="main__topic">
        <h3 class="main__topic"></h3>
        <p class="main__description"></p>
      </div>
    </main>

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
