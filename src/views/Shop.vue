<template>
  <Navbar />
  <Banner />
  <main class="shop">
    <nav class="shop__nav">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">SHOP</li>
        <li
          v-for="item in breadcrumbList"
          :key="item"
          class="breadcrumb-item active"
        >
          {{ item }}
        </li>
      </ol>

      <div class="shop__myFav">
        <router-link to="/favorite" class="myBtn myBtn--blue"
          >我的收藏</router-link
        >
      </div>
    </nav>

    <div class="shop__main">
      <div class="shop__sidebar">
        <ul class="shop__list" ref="shop__list">
          <li
            @click="activeList = '所有商品'"
            :class="{ activeList: activeList === '所有商品' }"
            class="shop__listItem"
          >
            所有商品
          </li>
          <li
            @click="activeList = '咖啡豆'"
            :class="{ activeList: activeList === '咖啡豆' }"
            class="shop__listItem"
          >
            咖啡豆
            <ul
              class="shop__list--inner"
              :class="{ active: activeList === '咖啡豆' }"
            >
              <li
                v-for="(item, key) in dataList.coffeebean"
                :key="key"
                @click="activeItem = item"
              >
                <i class="fas fa-mug-hot" v-if="activeItem === item"></i>
                {{ item }}
              </li>
            </ul>
          </li>
          <li
            @click="activeList = '咖啡設備'"
            :class="{ activeList: activeList === '咖啡設備' }"
            class="shop__listItem"
          >
            咖啡設備
            <ul
              class="shop__list--inner"
              :class="{ active: activeList === '咖啡設備' }"
            >
              <li
                v-for="item in dataList.equipment"
                :key="item"
                @click="activeItem = item"
              >
                <i class="fas fa-mug-hot" v-if="activeItem === item"></i>
                {{ item }}
              </li>
            </ul>
          </li>
          <li
            @click="activeList = '典藏商品'"
            :class="{ activeList: activeList === '典藏商品' }"
            class="shop__listItem"
          >
            典藏商品
            <ul
              class="shop__list--inner"
              :class="{ active: activeList === '典藏商品' }"
            >
              <li
                v-for="item in dataList.collection"
                :key="item"
                @click="activeItem = item"
              >
                <i class="fas fa-mug-hot" v-if="activeItem === item"></i>
                {{ item }}
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="shop__products">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </main>
  <Footer />
</template>

<script>
import { mapMutations } from 'vuex';
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
      dataList: {
        coffeebean: ['淺培', '中培', '深培'],
        equipment: ['手沖 / 磨豆', '半自動'],
        collection: ['生活用品', '隨行杯'],
      },
      breadcrumbList: [],
      activeList: '',
      activeItem: '',
      bgActive: false,
    };
  },
  computed: {
    breadcrumbPair() {
      return [this.activeList, this.activeItem];
    },
  },
  watch: {
    breadcrumbPair(val, oldVal) {
      val[0] !== oldVal[0]
        ? (this.breadcrumbList = [val[0]])
        : (this.breadcrumbList = this.breadcrumbPair);
    },
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
