<template>
  <ol class="breadcrumb">
    <router-link to="/shop/all" class="breadcrumb-item">SHOP</router-link>
    <li
      v-for="(item, key) in breadcrumbList"
      :key="item"
      class="breadcrumb-item"
    >
      <router-link
        :to="`/shop/${item}`"
        v-if="key === 0"
        class="breadcrumb__link"
        >{{ item }}</router-link
      >
      <span v-else>{{ item }}</span>
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbList: [],
    };
  },
  computed: {
    breadcrumbPair() {
      return [this.activeList, this.activeItem];
    },
    activeList() {
      return this.$route.params.list;
    },
    activeItem() {
      return this.$route.params.item;
    },
  },
  watch: {
    breadcrumbPair(val, oldVal) {
      val[0] !== oldVal[0]
        ? (this.breadcrumbList = [val[0]])
        : (this.breadcrumbList = this.breadcrumbPair);
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.breadcrumb__link {
  display: inline-block !important;
}
</style>
