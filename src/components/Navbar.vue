<template>
  <div class="navigation" :class="{ 'navigation-color': bgActive || display }">
    <div class="navigation__box">
      <h1 class="navigation__title">
        <router-link to="/" class="navigation__logo">CoffeeBean</router-link>
      </h1>

      <a
        @click.prevent="display = !display"
        href="#"
        :class="{ rotate: display }"
        class="navigation__link navigation__link--toggle"
      >
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <ul :class="{ display: display }" class="navigation__list">
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
    return {
      display: false,
    };
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

  @include respond(phone) {
    padding: 0.75rem 0 0.35rem 1rem;
    display: block;
  }

  &__box {
    display: flex;
    justify-content: space-between;
  }

  &-color {
    background-color: rgba(152, 106, 75, 0.8);
  }

  &__logo {
    font-family: 'Alex Brush', cursive;
    color: $color-white;

    @include respond(phone) {
      font-size: $font-xl;
    }
  }

  &__list {
    display: flex;
    padding-right: 1rem;

    @include respond(phone) {
      max-height: 0px;
      overflow: hidden;
    }

    li {
      @include respond(phone) {
        margin-bottom: 0.5rem;
      }
    }
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
      transition: 0.5s;
      &:hover {
        transform: rotateY(180deg);

        @include respond(phone) {
          transform: translateX(10px);
        }
      }
    }

    &--toggle {
      width: 3.75rem;
      height: 3rem;
      border: 2px solid $color-white;
      border-radius: 5px;
      position: relative;
      cursor: pointer;
      display: none;

      @include respond(phone) {
        display: block;
      }

      > span {
        width: 1.5rem;
        height: 2px;
        background-color: $color-white;
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        margin: auto;
        transition: all 0.5s;
      }

      > span:nth-child(1) {
        transform: translateY(0.5rem);
      }

      > span:nth-child(3) {
        transform: translateY(-0.5rem);
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

.display {
  display: block;
  max-height: 107px;
  transition: all 0.5s;
}

.rotate {
  > span:nth-child(1) {
    transform: rotate(220deg);
  }

  > span:nth-child(2) {
    opacity: 0;
  }

  > span:nth-child(3) {
    transform: rotate(-220deg);
  }
}
</style>
