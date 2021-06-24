<template>
  <footer class="footer">
    <div class="footer__logo">
      <p>CoffeeBean</p>
    </div>

    <ul class="footer__media">
      <li>
        <a href="mailto:e3e38888@gmail.com"
          ><i class="hvr-grow-shadow footer__item fas fa-at"></i
        ></a>
      </li>
      <li>
        <a href="https://github.com/ngnl666"
          ><i class="hvr-grow-shadow footer__item fab fa-github"></i
        ></a>
      </li>
      <li>
        <a href="#"><i class="hvr-grow-shadow footer__item fab fa-line"></i></a>
      </li>
    </ul>

    <div class="footer__copyright">
      © 僅作為個人作品練習，所有資料皆來自網路，無商業用途
    </div>
    <div class="footer__admin">
      <router-link to="/login" class="admin"
        ><i class="hvr-buzz-out fas fa-tools"></i
      ></router-link>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/abstracts/variables';
@import '../assets/abstracts/mixins';

.admin {
  color: #000;
}

.footer {
  background-color: $color-primary;
  padding: 1.5rem;

  &__logo {
    font-family: 'Alex Brush', cursive;
    color: $color-white;
    font-size: $font-xl;
    text-align: center;
    margin-bottom: 2rem;

    @include respond(phone) {
      font-size: calc(#{$font-xl} * 1.25);
    }
  }

  &__media {
    display: flex;
    justify-content: center;
    margin-left: 0.5rem;
    margin-bottom: 2rem;
  }

  &__item {
    font-size: $font-m;
    margin-right: 2rem;
    color: #4f4f4f;

    @include respond(phone) {
      font-size: $font-l;
    }
  }

  &__copyright {
    text-align: center;
  }

  &__admin {
    text-align: right;
    font-size: $font-l;
  }
}
</style>
