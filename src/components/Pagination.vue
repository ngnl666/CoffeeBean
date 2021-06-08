<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pagination.has_pre }">
        <a
          @click.prevent="updatePage(pagination.current_page - 1, '-')"
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
        <a @click.prevent="updatePage(page, '=')" class="page-link" href="#">{{
          page
        }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pagination.has_next }">
        <a
          @click.prevent="updatePage(pagination.current_page + 1, '+')"
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
import { mapActions, mapMutations } from 'vuex';
export default {
  name: 'Pagination',
  computed: {
    pagination() {
      if (this.$route.name === 'ProductList' || this.$route.name === 'Coupon') {
        return this.$store.state.pagination;
      } else {
        return this.$store.state.moduleFrontPage.pagination;
      }
    },
  },
  methods: {
    ...mapActions('moduleAdmin', ['getProducts', 'getCoupons']),
    ...mapMutations('moduleFrontPage', ['setPagination']),
    updatePage(page, state) {
      switch (this.$route.name) {
        case 'ProductList':
          this.getProducts(page);
          break;
        case 'Coupon':
          this.getCoupons(page);
          break;
        case 'Shop':
        case 'List':
        case 'Item':
          if (state === '-') this.pagination.current_page -= 1;
          if (state === '=') this.pagination.current_page = page;
          if (state === '+') this.pagination.current_page += 1;

          this.setPagination(this.pagination);
          break;
      }
    },
  },
};
</script>

<style lang="scss"></style>
