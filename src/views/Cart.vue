<template>
  <div v-for="item in carts" :key="item.id">{{ item }}</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState('moduleFrontPage', ['carts']),
  },
  methods: {
    ...mapActions('moduleFrontPage', ['getCart']),
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss"></style>
