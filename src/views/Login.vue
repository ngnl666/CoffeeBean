<template>
  <Alert v-if="isAlert" />
  <div class="text-center">e3e38888@gmail.com</div>
  <div class="text-center">asdf5678</div>

  <form @submit.prevent="signin">
    <div class="container">
      <div class="row justify-content-center mt-5 g-0">
        <div class="card text-white bg-light mb-3" style="max-width: 22rem">
          <div class="card-header bg-success fw-bolder fs-5">後台登入</div>
          <div class="card-body">
            <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="far fa-envelope"></i
              ></span>
              <input
                v-model="user.username"
                type="text"
                class="form-control"
                placeholder="使用者帳號"
                autocomplete="on"
              />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text" id="password"
                ><i class="fas fa-unlock-alt"></i
              ></span>
              <input
                v-model="user.password"
                type="text"
                class="form-control"
                placeholder="密碼"
              />
            </div>
          </div>

          <div class="row justify-content-center">
            <button
              type="submit"
              class="btn btn-success text-white fw-bolder col-9 mb-4"
            >
              登入
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Alert from '../components/Alert.vue';
export default {
  name: 'Login',
  components: {
    Alert,
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapMutations('moduleAdmin', ['setAlertMsg', 'setIsAlert']),
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      var vm = this;

      this.$http
        .post(api, vm.user)
        .then(res => {
          if (!res.data.success) {
            vm.setAlertMsg('登入失敗');
            return;
          }
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
          vm.$router.push('/admin/productlist');
        })
        .catch(error => console.log(error.message));
    },
  },
  computed: {
    ...mapState('moduleAdmin', ['isAlert']),
  },
};
</script>

<style scoped lang="scss"></style>
