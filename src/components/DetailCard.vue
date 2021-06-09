<template>
  <Navbar />
  <div class="productDetail">
    <nav class="productDetail__nav">
      <ol class="breadcrumb">
        <router-link to="/shop/all" class="breadcrumb-item">SHOP</router-link>
        <li
          v-for="(item, key) in currentProduct.category.split('-')"
          :key="item"
          class="breadcrumb-item"
        >
          <router-link
            :to="`/shop/${item}`"
            v-if="key === 0"
            class="productDetail__link breadcrumb__link"
            >{{ item }}</router-link
          >
          <span v-else>{{ item }}</span>
        </li>
      </ol>
    </nav>

    <div class="productDetail__card">
      <div class="productDetail__card--left">
        <img
          class="productDetail__img"
          :src="currentProduct.imageUrl"
          alt="coffeebean"
        />
        <div class="productDetail__group">
          <button
            @click="productQuantity--"
            :disabled="productQuantity === 1"
            class="myBtn myBtn--count"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <input
            v-model="productQuantity"
            class="myInput productDetail__input"
            type="number"
            disabled
          />
          <button
            @click="productQuantity++"
            :disabled="productQuantity === 10"
            class="myBtn myBtn--count myBtn--count-r"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div class="productDetail__card--right">
        <h3 class="productDetail__name">{{ currentProduct.title }}</h3>
        <p class="productDetail__detail">
          {{ currentProduct.description }}
        </p>
        <div class="productDetail__description">
          <div
            v-if="
              currentProduct.original_price && currentProduct.original_price > 0
            "
            class="productDetail__origin"
          >
            $ {{ currentProduct.original_price }}
          </div>
          <div class="productDetail__price">$ {{ currentProduct.price }}</div>
        </div>
        <button class="myBtn productDetail__cart">
          <i class="productDetail__icon fas fa-shopping-cart">加到購物車</i>
        </button>
      </div>
    </div>

    <p class="productDetail__relateTitle">- 猜你喜歡 -</p>

    <div class="productDetail__products">
      <Card v-for="item in randomProducts" :key="item.id" :product="item" />
    </div>
  </div>
  <Footer />
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Card from '../components/Card.vue';

export default {
  components: {
    Navbar,
    Footer,
    Card,
  },
  data() {
    return {
      productQuantity: 1,
      breadcrumbList: [],
      randomProducts: [],
    };
  },
  computed: {
    ...mapState('moduleFrontPage', ['products']),
    currentProduct() {
      return this.products.find(p => p.id === this.$route.params.productId);
    },
  },
  watch: {
    currentProduct(val) {
      if (val) this.createRandomProducts();
    },
  },
  methods: {
    ...mapActions('moduleFrontPage', ['getProducts']),
    ...mapMutations('moduleFrontPage', ['setBgActive']),
    handleScroll() {
      this.bgActive = window.scrollY > 0 ? true : false;
      this.setBgActive(this.bgActive);
    },
    createRandomProducts() {
      // 會產生重複的資料
      let rNum;
      this.randomProducts = [];
      this.productQuantity = 1;

      while (this.randomProducts.length < 3) {
        rNum = Math.floor(Math.random() * this.products.length);
        if (this.products[rNum].id !== this.currentProduct.id) {
          this.randomProducts.push(this.products[rNum]);
        }
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.getProducts();
    this.createRandomProducts();
  },
};
</script>

<style lang="scss">
@import '../assets/abstracts/variables';
@import '../assets/abstracts/mixins';
@import '../assets/base/components';

.productDetail {
  padding: 5rem 3rem;
  background-color: $color-secondary;

  &__nav {
    padding-top: 1rem;
    margin-left: 1rem;
  }

  &__link {
    display: inline !important;
  }

  &__card {
    width: 50rem;
    height: 30rem;
    background-color: $color-white;
    margin: 0 auto;
    margin-top: 1.5rem;
    margin-bottom: 5rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 1rem 1rem rgba($color-black, 0.2);
    display: flex;

    &--left {
      flex-basis: 60%;
    }

    &--right {
      flex-basis: 40%;
      padding: 1.5rem 1rem;
    }
  }

  &__img {
    width: 100%;
    height: 90%;
  }

  &__group {
    display: flex;
  }

  &__input {
    margin: 0 auto;
    width: 100%;
  }

  &__name {
    color: $color-primary;
    font-size: $font-l;
    font-weight: bold;
    letter-spacing: 5px;
    padding-top: 1.5rem;
    margin-bottom: 5rem;
  }

  &__detail {
    margin-bottom: 3rem;
  }

  &__description {
    margin-bottom: 1rem;
  }

  &__origin {
    color: $color-grey;
    font-size: $font-s;
    padding-left: 1rem;
    text-decoration: line-through;
  }

  &__price {
    font-size: $font-l;
    color: $color-green;
    text-align: center;
  }

  &__cart {
    background-color: $color-blue;
    color: $color-white;
    margin: 0 auto;
    overflow: hidden;

    &:hover .productDetail__icon {
      animation: cartGoRight 1s;
    }
  }

  &__icon {
    text-align: center;
  }

  &__relateTitle {
    color: $color-blue;
    font-size: $font-m;
    letter-spacing: 3px;
    text-align: center;
  }

  &__products {
    display: flex;
    justify-content: space-around;
  }
}

.myBtn {
  &--count {
    padding: 0.75rem 1rem;
    border-radius: 0px;
    background-color: $color-blue;
    color: $color-white;

    &:disabled {
      background-color: $color-grey;
    }

    &-r {
      border-radius: 0 0 10px 0;
    }
  }
}

@keyframes cartGoRight {
  100% {
    transform: translateX(95%);
  }
}
</style>
