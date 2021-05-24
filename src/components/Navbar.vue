<template>
  <div class="navigation">
    <h1 class="navigation__box">
      <a class="navigation__logo" href="#">CoffeeBean</a>
    </h1>

    <ul class="navigation__list">
      <li>
        <a
          class="navigation__link hvr-underline-from-center"
          href="#"
          >HOME</a
        >
      </li>
      <li><a class="navigation__link hvr-underline-from-center" href="#">SHOP</a></li>
      <li>
        <a class="navigation__link hvr-forward" href="#">
          <i class="navigation__icon--white fas fa-shopping-cart"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss" scoped>
@import '../assets/abstracts/variables';
@import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');

.navigation {
  background-color: rgba(152, 106, 75, 0.8);
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.35rem 1.5rem;
  z-index: 99;

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
    margin-left: 1.5rem;
    letter-spacing: 2px;
    padding-top: 0.5rem;
    transition: all 0.25s;

    &:hover {
      color: $color-blue;
    }
  }
}
</style>
