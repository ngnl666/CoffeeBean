<template>
  <div class="navigation" :class="{ 'navigation-color': bgActive }">
    <h1 class="navigation__box">
      <router-link to="/" class="navigation__logo">CoffeeBean</router-link>
    </h1>

    <ul class="navigation__list">
      <li>
        <router-link to="/" class="navigation__link hvr-underline-from-center"
          >HOME</router-link
        >
      </li>
      <li>
        <router-link
          to="/shop/all"
          class="navigation__link hvr-underline-from-center"
          >SHOP</router-link
        >
      </li>
      <li>
        <router-link to="/pick" class="navigation__link navigation__link--pick"
          ><i class="navigation__icon--white fas fa-coffee"></i
        ></router-link>
      </li>
      <li>
        <router-link
          to="/cart/customer_cart"
          class="navigation__link hvr-forward"
          ><i class="navigation__icon--white fas fa-shopping-cart"></i>
          <div v-if="cartNum > 0" class="navigation__cartNum">
            {{ cartNum }}
          </div></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState('moduleFrontPage', ['bgActive']),
    ...mapGetters('moduleFrontPage', ['cartNum']),
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/abstracts/variables';
@import '../assets/abstracts/mixins';
@import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');

.navigation {
  background-color: transparent;
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.35rem 1.5rem;
  z-index: 99;
  transition: 0.5s;

  @include respond(tab-port) {
    // width: 95%;
  }

  &-color {
    background-color: rgba(152, 106, 75, 0.8);
  }

  &__logo {
    font-family: 'Alex Brush', cursive;
    color: $color-white;
  }

  &__list {
    display: flex;
    padding-right: 1rem;
  }

  &__link {
    color: $color-white;
    font-size: 1.25rem;
    font-weight: bold;
    margin-right: 1.5rem;
    letter-spacing: 2px;
    padding-top: 0.5rem;
    transition: all 0.25s;
    position: relative;

    &:hover {
      color: $color-blue;
    }

    &--pick {
      margin-right: 2rem;
      transition: 0.75s;
      &:hover {
        transform: rotateY(180deg);
      }
    }
  }

  &__cartNum {
    width: 1.4rem;
    height: 1.4rem;
    font-size: $font-s;
    text-align: center;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    right: -10px;
  }
}

@keyframes flip {
  0% {
    opacity: 0;
    bottom: 4%;
  }
  100% {
    opacity: 1;
    bottom: 7%;
  }
}
</style>
