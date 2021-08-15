<template>
  <Alert v-if="isAlert" />
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

    <div class="productDetail__wrap">
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
                currentProduct.original_price &&
                currentProduct.original_price > 0
              "
              class="productDetail__origin"
            >
              $ {{ currentProduct.original_price }}
            </div>
            <div class="productDetail__price">$ {{ currentProduct.price }}</div>
          </div>
          <button
            @click="
              addToCart({ product_id: currentProduct.id, qty: productQuantity })
            "
            class="myBtn productDetail__cart"
          >
            <i
              :class="{ cartGoRight: isAnimation }"
              class="productDetail__icon fas fa-shopping-cart"
              >加到購物車</i
            >
          </button>
        </div>
      </div>

      <!-- 熱量表 -->
      <div class="card text-center" style="width: 18rem">
        <div class="card-header">熱量表</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
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
import Alert from '../components/Alert.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Card from '../components/Card.vue';
export default {
  components: {
    Alert,
    Navbar,
    Footer,
    Card,
  },
  data() {
    return {
      productQuantity: 1,
      randomNum: 3,
      breadcrumbList: [],
      randomProducts: [],
      isAnimation: false,
    };
  },
  computed: {
    ...mapState('moduleFrontPage', ['products']),
    ...mapState(['isAlert']),
    currentProduct() {
      return this.products.find(p => p.id === this.$route.params.productId);
    },
  },
  watch: {
    currentProduct(val) {
      if (val) this.createRandomProducts();
    },
    randomNum() {
      this.createRandomProducts();
    },
  },
  methods: {
    ...mapActions('moduleFrontPage', ['getProducts']),
    ...mapMutations('moduleFrontPage', ['setBgActive', 'setTempCart']),
    ...mapMutations(['setIsAlert', 'setAlertMsg']),
    addToCart(cartItem) {
      const vm = this;
      this.setTempCart(cartItem);
      this.isAnimation = true;
      setTimeout(() => {
        vm.isAnimation = false;
      }, 1000);
      this.setAlertMsg('加入購物車成功');
      this.setIsAlert();
    },
    handleScroll() {
      this.bgActive = window.scrollY > 0;
      this.setBgActive(this.bgActive);
    },
    createRandomProducts() {
      let rNum;
      const rArray = [];
      this.randomProducts = [];
      this.productQuantity = 1;
      while (this.randomProducts.length < this.randomNum) {
        rNum = Math.floor(Math.random() * this.products.length);
        if (
          this.products[rNum].id !== this.currentProduct.id &&
          !rArray.includes(rNum)
        ) {
          this.randomProducts.push(this.products[rNum]);
          rArray.push(rNum);
        }
      }
    },
  },
  mounted() {
    if (document.body.clientWidth < 769) this.randomNum = 2;
    if (document.body.clientWidth < 577) this.randomNum = 1;
    this.createRandomProducts();
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.getProducts();
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
  &__wrap {
    display: flex;
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
    box-shadow: 0 1rem 1rem rgba($color-primary, 0.4);
    display: flex;
    @include respond(phone) {
      width: 30rem;
      height: auto;
      display: block;
    }
    &--left {
      flex-basis: 60%;
      @include respond(phone) {
        width: 50%;
      }
    }
    &--right {
      flex-basis: 40%;
      padding: 1.5rem 1rem;
    }
  }
  &__img {
    width: 100%;
    height: 90%;
    @include respond(phone) {
      width: 200%;
      height: 250px;
    }
  }
  &__group {
    display: flex;
    @include respond(phone) {
      width: 200%;
    }
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
    @include respond(phone) {
      font-size: $font-xl;
      margin-bottom: 2.5rem;
    }
  }
  &__detail {
    margin-bottom: 3rem;
    @include respond(phone) {
      margin-bottom: 1.5rem;
    }
  }
  &__description {
    margin-bottom: 1rem;
  }
  &__origin {
    color: $color-grey;
    font-size: $font-s;
    padding-left: 1rem;
    text-decoration: line-through;
    @include respond(phone) {
      font-size: $font-m;
    }
  }
  &__price {
    font-size: $font-l;
    color: $color-green;
    text-align: center;
    @include respond(phone) {
      font-size: $font-xl;
    }
  }
  &__cart {
    background-color: $color-blue;
    color: $color-white;
    margin: 0 auto;
    overflow: hidden;
  }
  &__icon {
    text-align: center;
  }
  &__relateTitle {
    color: $color-blue;
    font-size: $font-m;
    letter-spacing: 3px;
    text-align: center;
    @include respond(tab-port) {
      margin-bottom: 2.5rem;
    }
  }
  &__products {
    display: flex;
    justify-content: space-around;
    @include respond(phone) {
      justify-content: center;
      padding-left: 2rem;
    }
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
.cartGoRight {
  animation: cartGoRight 1s;
}
@keyframes cartGoRight {
  100% {
    transform: translateX(99%);
  }
}
</style>
