<template>
  <Navbar />
  <Banner />
  <main class="shop">
    <nav class="shop__nav">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">TOP</li>
        <li v-if="activeList" class="breadcrumb-item active">
          {{ activeList }}
        </li>
        <li v-if="activeItem" class="breadcrumb-item active">
          {{ activeItem }}
        </li>
      </ol>
    </nav>

    <div class="shop__sidebar">
      <ul class="shop__list" ref="shop__list">
        <li
          @click="activeList = 'all'"
          :class="{ activeList: activeList === 'all' }"
          class="shop__listItem"
        >
          所有商品
        </li>
        <li
          @click="activeList = 'coffeebean'"
          :class="{ activeList: activeList === 'coffeebean' }"
          class="shop__listItem"
        >
          咖啡豆
          <ul
            class="shop__list--inner"
            :class="{ active: activeList === 'coffeebean' }"
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
          @click="activeList = 'equipment'"
          :class="{ activeList: activeList === 'equipment' }"
          class="shop__listItem"
        >
          咖啡設備
          <ul
            class="shop__list--inner"
            :class="{ active: activeList === 'equipment' }"
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
          @click="activeList = 'collection'"
          :class="{ activeList: activeList === 'collection' }"
          class="shop__listItem"
        >
          典藏商品
          <ul
            class="shop__list--inner"
            :class="{ active: activeList === 'collection' }"
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
      dataList: {
        coffeebean: ['淺培', '中培', '深培'],
        equipment: ['手沖 / 磨豆', '半自動'],
        collection: ['生活用品', '隨行杯'],
      },
      activeList: '',
      activeItem: '',
      bgActive: false,
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
