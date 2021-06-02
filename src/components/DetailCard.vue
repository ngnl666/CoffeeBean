<template>
  <Navbar />
  <div class="productDetail">
    <nav class="productDetail__nav">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">SHOP</li>
        <li class="breadcrumb-item active">咖啡豆</li>
        <li class="breadcrumb-item active">淺培</li>
      </ol>
    </nav>

    <div class="productDetail__card">
      <div class="productDetail__card--left">
        <img
          class="productDetail__img"
          src="../assets/image/product-1.jpeg"
          alt="coffeebean"
        />
        <div class="productDetail__group">
          <button class="myBtn myBtn--count">
            <i class="fas fa-chevron-left"></i>
          </button>
          <input
            v-model="productQuantity"
            class="myInput productDetail__input"
            type="text"
          />
          <button class="myBtn myBtn--count myBtn--count-r">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div class="productDetail__card--right">
        <h3 class="productDetail__name">阿拉比卡咖啡豆</h3>
        <p class="productDetail__detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          ipsam cumque ullam quis doloremque magnam corporis voluptates minima.
          Neque vitae optio non nemo iusto tenetur soluta, earum eaque dolore
          aperiam modi. Inventore eius, quam libero fugit, quidem, ullam sunt
          dignissimos blanditiis atque consequuntur pariatur corrupti dolorem
          tempora excepturi quo saepe.
        </p>
        <div class="productDetail__description">
          <div class="productDetail__origin">$500</div>
          <div class="productDetail__price">$350</div>
        </div>
        <button class="myBtn productDetail__cart">
          <i class="productDetail__icon fas fa-shopping-cart">加到購物車</i>
        </button>
      </div>
    </div>

    <p class="productDetail__relateTitle">- 猜你喜歡 -</p>

    <div class="productDetail__products">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
  <Footer />
</template>

<script>
import { mapMutations } from 'vuex';
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
      productQuantity: 3,
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
    margin-bottom: 2rem;
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
