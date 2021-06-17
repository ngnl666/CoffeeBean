<template>
  <Alert v-if="isAlert" />
  <div>456</div>
  <!--套用購物車模板-->
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Alert from '../components/Alert.vue';

export default {
  components: { Alert },
  data() {
    return {};
  },
  computed: {
    ...mapState('moduleFrontPage', ['orderId', 'order']),
    ...mapState(['isAlert']),
  },
  methods: {
    ...mapActions('moduleFrontPage', ['getOrder']),
  },
  mounted() {
    const vm = this;
    setTimeout(() => this.getOrder(vm.orderId), 1000);
  },
};
</script>

<style lang="scss"></style>
