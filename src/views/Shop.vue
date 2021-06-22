<template>
  <Alert v-if="isAlert" />
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :is-full-page="status.fullPage"
    :color="status.color"
  />

  <Navbar />
  <Banner />
  <main class="shop">
    <nav class="shop__nav">
      <router-link to="/favorite" class="myBtn myBtn--blue"
        >我的收藏</router-link
      >
    </nav>

    <div class="shop__main">
      <div class="shop__sidebar">
        <div class="shop__sidebar--top">
          <div class="shop__sidebar--top-L"></div>
          <div class="shop__sidebar--top-R"></div>
        </div>
        <div class="shop__sidebar--body">
          <ul class="shop__list" ref="shop__list">
            <li
              :class="{ activeList: activeList === 'all' }"
              class="shop__listItem"
            >
              <router-link to="/shop/all" class="shop__link"
                >所有商品</router-link
              >
            </li>
            <li
              :class="{ activeList: activeList === 'coffeebean' }"
              class="shop__listItem"
            >
              <router-link to="/shop/coffeebean" class="shop__link"
                >咖啡豆</router-link
              >
              <ul
                class="shop__list--inner"
                :class="{ active: activeList === 'coffeebean' }"
              >
                <li v-for="(item, key) in list.coffeebean" :key="key">
                  <router-link
                    :to="`/shop/coffeebean/${item.split('-')[1]}`"
                    class="shop__link"
                    ><i
                      class="fas fa-mug-hot"
                      v-if="activeItem === item.split('-')[1]"
                    ></i
                    >{{ item.split('-')[0] }}</router-link
                  >
                </li>
              </ul>
            </li>
            <li
              :class="{ activeList: activeList === 'equipment' }"
              class="shop__listItem"
            >
              <router-link to="/shop/equipment" class="shop__link"
                >咖啡設備</router-link
              >
              <ul
                class="shop__list--inner"
                :class="{ active: activeList === 'equipment' }"
              >
                <li v-for="item in list.equipment" :key="item">
                  <router-link
                    :to="`/shop/equipment/${item.split('-')[1]}`"
                    class="shop__link"
                    ><i
                      class="fas fa-mug-hot"
                      v-if="activeItem === item.split('-')[1]"
                    ></i
                    >{{ item.split('-')[0] }}</router-link
                  >
                </li>
              </ul>
            </li>
            <li
              :class="{ activeList: activeList === 'classic' }"
              class="shop__listItem"
            >
              <router-link to="/shop/classic" class="shop__link"
                >典藏商品</router-link
              >
              <ul
                class="shop__list--inner"
                :class="{ active: activeList === 'classic' }"
              >
                <li v-for="item in list.classic" :key="item">
                  <router-link
                    :to="`/shop/classic/${item.split('-')[1]}`"
                    class="shop__link"
                    ><i
                      class="fas fa-mug-hot"
                      v-if="activeItem === item.split('-')[1]"
                    ></i
                    >{{ item.split('-')[0] }}</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="shop__products">
        <Card v-for="item in ProductsPerPage" :key="item.id" :product="item" />
      </div>
    </div>
    <div class="shop__pagination pagination-lg">
      <Pagination />
    </div>
  </main>
  <Footer />
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Alert from '../components/Alert.vue';
import Navbar from '../components/Navbar.vue';
import Banner from '../components/Banner.vue';
import Card from '../components/Card.vue';
import Pagination from '../components/Pagination.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Loading,
    Alert,
    Navbar,
    Banner,
    Card,
    Pagination,
    Footer,
  },
  data() {
    return {
      list: {
        coffeebean: ['淺培-light', '中培-medium', '深培-high'],
        equipment: ['手沖 / 磨豆-grinder', '半自動-automatic'],
        classic: ['生活用品-life', '隨行杯-cup'],
      },
      bgActive: false,
      status: {
        fileUploading: false,
        fullPage: true,
        color: '#bb9175',
      },
    };
  },
  computed: {
    ...mapState('moduleFrontPage', ['products', 'pagination', 'tempCart']),
    ...mapState(['isAlert', 'isLoading']),
    activeList() {
      return this.$route.params.list;
    },
    activeItem() {
      return this.$route.params.item;
    },
    filterProducts() {
      const vm = this;
      return vm.products.filter(p => {
        if (vm.activeList !== 'all' && !vm.activeItem) {
          return vm.activeList === p.category.split('-')[0];
        } else if (vm.activeItem) {
          return vm.activeItem === p.category.split('-')[1];
        } else {
          return true;
        }
      });
    },
    ProductsPerPage() {
      return this.filterProducts.slice(
        6 * (this.pagination.current_page - 1),
        6 * this.pagination.current_page
      );
    },
  },
  watch: {
    activeList() {
      this.setPagination({
        total_pages: Math.ceil(this.filterProducts.length / 6),
        current_page: 1,
      });
    },
    activeItem() {
      this.setPagination({
        total_pages: Math.ceil(this.filterProducts.length / 6),
        current_page: 1,
      });
    },
  },
  methods: {
    ...mapActions('moduleFrontPage', ['getProducts']),
    ...mapMutations('moduleFrontPage', ['setBgActive', 'setPagination']),
    handleScroll() {
      this.bgActive = window.scrollY > 0 ? true : false;
      this.setBgActive(this.bgActive);
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.getProducts();
  },
};
</script>

<style lang="scss"></style>
