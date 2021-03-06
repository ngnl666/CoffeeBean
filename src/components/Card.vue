<template>
  <div class="productCard">
    <div class="productCard__fav">
      <i
        v-if="!product.stared"
        @click="isStared(true)"
        class="far fa-star productCard__fav--star"
      ></i>
      <i
        v-else
        @click="isStared(false)"
        class="fas fa-star productCard__fav--stared"
      ></i>
    </div>
    <router-link :to="`/detail/${product.id}`">
      <figure class="productCard__shape">
        <img
          :src="product.imageUrl"
          class="productCard__img"
          alt="coffeebean"
        />
        <figcaption class="productCard__caption">
          <router-link :to="`/detail/${product.id}`" class="productCard__link"
            >商品詳情</router-link
          >
        </figcaption>
      </figure>

      <p class="productCard__name">{{ product.title }}</p>
      <div class="productCard__description">
        <div
          :class="{
            hidden: !product.original_price || !product.original_price > 0,
          }"
          class="productCard__origin"
        >
          ${{ product.original_price }}
        </div>
        <div class="productCard__price">${{ product.price }}</div>
      </div>
    </router-link>

    <div class="productCard__cart">
      <i
        @click="addToCart({ product_id: product.id, qty: 1 })"
        class="fas fa-shopping-cart productCard__icon hvr-bounce-in"
      ></i>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['product'],
  data() {
    return {};
  },
  methods: {
    ...mapMutations('moduleFrontPage', [
      'setStaredProducts',
      'removeStaredProducts',
      'setTempCart',
    ]),
    ...mapMutations(['setIsAlert', 'setAlertMsg']),
    addToCart(cartItem) {
      this.setTempCart(cartItem);
      this.setAlertMsg('加入購物車成功');
      this.setIsAlert();
    },
    isStared(state) {
      state
        ? this.setStaredProducts(this.product)
        : this.removeStaredProducts(this.product);
    },
  },
};
</script>

<style lang="scss">
@import '../assets/abstracts/variables';
@import '../assets/abstracts/mixins';

.productCard {
  width: 18rem;
  height: 28rem;
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
  border-radius: 15px;
  box-shadow: 0 1rem 1rem rgba($color-primary, 0.3);
  position: relative;
  overflow: hidden;

  @include respond(tab-horizontal) {
    width: 16.5rem;
    height: 27rem;
  }

  @include respond(tab-port) {
    width: 22rem;
    height: 32rem;
  }

  @include respond(phone) {
    width: 100%;
    height: auto;
  }

  &__fav {
    width: 60px;
    height: 85px;
    background-color: $color-primary;
    position: absolute;
    right: 0.5rem;
    top: -5px;
    z-index: 9;
    clip-path: polygon(61% 84%, 40% 84%, 15% 65%, 15% 0, 85% 0, 85% 65%);
    transition: all 0.25s;

    @include respond(phone) {
      height: 75px;
    }

    &:hover {
      top: 0px;
    }

    &--star {
      font-size: $font-m;
      color: $color-white;
      position: absolute;
      right: 1.05rem;
      top: 1.15rem;

      @include respond(tab-port) {
        font-size: $font-l;
        right: 1.3rem;
        top: 1.8rem;
      }

      @include respond(phone) {
        right: 1.8rem;
        top: 2rem;
      }

      &ed {
        font-size: $font-m;
        position: absolute;
        right: 1.05rem;
        top: 1.15rem;
        color: $color-white;

        @include respond(tab-port) {
          font-size: $font-l;
          right: 1.3rem;
          top: 1.8rem;
        }

        @include respond(phone) {
          right: 1.8rem;
          top: 2rem;
        }
      }
    }
  }

  &__shape {
    position: relative;

    &:hover .productCard__caption {
      opacity: 1;
      transform: translate(-50%, -70%);
    }

    &:hover .productCard__img {
      filter: blur(1.5rem);
      border-radius: 50%;
    }
  }

  &__caption {
    position: absolute;
    left: 50%;
    top: 50%;
    opacity: 0;
    font-size: $font-m;
    text-align: center;
    transform: translate(-50%, 0%);
    transition: all 0.5s;
    backface-visibility: hidden;

    @include respond(phone) {
      font-size: $font-l;
    }
  }

  &__link {
    text-decoration: none;
    color: $color-white;
    font-weight: bold;
    letter-spacing: 5px;

    &:hover {
      color: $color-blue;
    }
  }

  &__img {
    width: 100%;
    height: 62.5%;
    margin-bottom: 1.5rem;
    clip-path: circle(50% at 50% 50%);
    transition: all 0.5s;
  }

  &__description {
    margin-top: -0.7rem;
  }

  &__name {
    font-size: $font-m;
    color: $color-primary;
    text-align: center;
    letter-spacing: 3px;

    @include respond(phone) {
      font-size: $font-l;
    }
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
    font-size: $font-m;
    color: $color-green;
    text-align: center;

    @include respond(phone) {
      font-size: $font-l;
    }
  }

  &__icon {
    position: absolute;
    right: 1.2rem;
    bottom: 1rem;
    font-size: $font-m;
    color: $color-blue;

    @include respond(phone) {
      font-size: $font-l;
    }
  }
}
</style>
