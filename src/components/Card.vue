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

    <figure class="productCard__shape">
      <img :src="product.imageUrl" class="productCard__img" alt="coffeebean" />
      <figcaption class="productCard__caption">
        <router-link :to="`/detail/${product.id}`" class="productCard__link"
          >商品詳情</router-link
        >
      </figcaption>
    </figure>

    <p class="productCard__name">{{ product.title }}</p>
    <div class="productCard__description">
      <div
        v-if="product.original_price && product.original_price > 0"
        class="productCard__origin"
      >
        ${{ product.original_price }}
      </div>
      <div class="productCard__price">${{ product.price }}</div>
    </div>

    <div class="productCard__cart">
      <i class="fas fa-shopping-cart productCard__icon hvr-bounce-in"></i>
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
    ]),
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
  box-shadow: 0 1rem 1rem rgba($color-black, 0.2);
  position: relative;
  overflow: hidden;

  &__fav {
    width: 60px;
    height: 85px;
    background-color: $color-yellow;
    position: absolute;
    right: 0.5rem;
    top: -15px;
    z-index: 9;
    clip-path: polygon(85% 65%, 50% 100%, 15% 65%, 14% 0, 50% 0%, 85% 0);
    transition: all 0.5s;

    &:hover {
      top: 0px;
    }

    &--star {
      font-size: $font-m;
      color: $color-white;
      position: absolute;
      right: 1.05rem;
      top: 1.15rem;

      &ed {
        font-size: $font-m;
        position: absolute;
        right: 1.05rem;
        top: 1.15rem;
        color: yellow;
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
  }

  &__origin {
    color: $color-grey;
    font-size: $font-s;
    padding-left: 1rem;
    text-decoration: line-through;
  }

  &__price {
    font-size: $font-m;
    color: $color-green;
    text-align: center;
  }

  &__icon {
    position: absolute;
    right: 1.2rem;
    bottom: 1rem;
    font-size: $font-m;
    color: $color-blue;
  }
}
</style>
