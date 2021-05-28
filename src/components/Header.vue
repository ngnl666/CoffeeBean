<template>
  <header class="header">
    <Navbar />
    <div class="header__slogan">用咖啡填滿生活的每一天</div>
    <div class="header__arrow">
      <i class="fas fa-chevron-down"></i>
    </div>
    <div class="bg-video">
      <video class="bg-video__content" autoplay muted loop>
        <source src="../assets/image/coffee.mp4" type="video/mp4" />
      </video>
    </div>
  </header>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/abstracts/variables';
@import '../assets/abstracts/mixins';

.header {
  position: relative;

  &__slogan {
    @include absCenter(60%);
    width: 20ch;
    animation: typing 3s steps(20), blink 0.5s step-end infinite alternate;
    color: $color-white;
    font-size: $font-xl;
    font-weight: bolder;
    letter-spacing: 5px;
    border-right: 3px solid $color-white;
    overflow: hidden;
    white-space: nowrap;
    z-index: 9;
  }

  &__arrow {
    @include absCenter(88%);
    animation: bounce 2s infinite;
    font-size: $font-xl;
    color: $color-secondary;
    opacity: 0.8;
    z-index: 9;
  }
}

.bg-video {
  width: 100%;
  height: 100%;
  opacity: 0.8;
  z-index: -0.5;

  &__content {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
