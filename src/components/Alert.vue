<template>
  <transition>
    <div class="alert alert-success alert" role="alert">
      <strong>{{ alertMsg }}</strong>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Alert',
  computed: {
    alertMsg() {
      return this.$store.state.alertMsg;
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  padding: 8px 15px;
  z-index: 100000;
  position: fixed;
  animation: enter 0.5s ease-in;
  bottom: 7%;
  right: 2%;
}

@keyframes enter {
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
