<template>
  <header>
    <Navbar />
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
.bg-video {
  height: 100%;
  width: 100%;
  opacity: 0.8;
  overflow: hidden;
  z-index: -1;

  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
