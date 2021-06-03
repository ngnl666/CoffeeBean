<template>
  <Alert v-if="isAlert" />
  <header
    class="navbar navbar-dark sticky-top bg-success flex-md-nowrap p-0 shadow"
  >
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fw-bolder fs-5" href="#"
      >後台管理</a
    >

    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="btn btn-outline-light" @click.prevent="signout">登出</a>
      </li>
    </ul>
  </header>

  <div class="container-fluid">
    <div class="row">
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link
                to="/admin/productlist"
                class="nav-link fs-5"
                :class="{ active: this.$route.name === 'ProductList' }"
              >
                產品列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/admin/coupon"
                class="nav-link fs-5"
                :class="{ active: this.$route.name === 'Coupon' }"
              >
                優惠券
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/admin/order"
                class="nav-link fs-5"
                :class="{ active: this.$route.name === 'Order' }"
              >
                訂單列表
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Alert from '../components/Alert.vue';

export default {
  components: {
    Alert,
  },
  name: 'Dashboard',
  methods: {
    ...mapMutations('moduleAdmin', ['setAlertMsg', 'setIsAlert']),
    signout() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/logout`;

      this.$http
        .post(api)
        .then(res => {
          if (!res.data.success) {
            vm.setAlertMsg('登出失敗');
            return;
          }
          this.$router.push('/login');
        })
        .catch(error => console.log(error.message));
    },
    setAlertMsg(msg) {
      this.setAlertMsg(msg);
      this.setIsAlert();
    },
  },
  computed: {
    ...mapState('moduleAdmin', ['isAlert']),
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    this.$http.defaults.headers.common.Authorization = token;
  },
};
</script>

<style lang="scss"></style>
