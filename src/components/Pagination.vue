<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pagination.has_pre }">
        <a
          @click.prevent="updatePage(pagination.current_page - 1)"
          class="page-link"
          href="#"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in pagination.total_pages"
        :key="page"
        :class="{ active: pagination.current_page === page }"
        class="page-item"
      >
        <a @click.prevent="updatePage(page)" class="page-link" href="#">{{
          page
        }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pagination.has_next }">
        <a
          @click.prevent="updatePage(pagination.current_page + 1)"
          class="page-link"
          href="#"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Pagination',
  computed: {
    pagination() {
      return this.$store.state.pagination;
    },
  },
  methods: {
    ...mapActions(['getProducts', 'getCoupons']),
    updatePage(page) {
      if (this.$route.name === 'ProductList') this.getProducts(page);
      if (this.$route.name === 'Coupon') this.getCoupons(page);
    },
  },
};
</script>

<style lang="scss"></style>
