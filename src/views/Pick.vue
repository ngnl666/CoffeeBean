<template>
  <Navbar />
  <Banner />
  <div class="pick">
    <div class="pick__group">
      <div
        ref="card1"
        class="pick__card pick__card-1"
        :class="{
          pickNone: pickCard !== 'card1' && pickCard !== '',
        }"
        @click="handleModal('card1')"
      >
        <h3 class="pick__title">CoffeeBean</h3>
        <i class="pick__icon fas fa-mug-hot"></i>
      </div>
      <div
        ref="card2"
        class="pick__card pick__card-1"
        :class="{
          pickNone: pickCard !== 'card2' && pickCard !== '',
        }"
        @click="handleModal('card2')"
      >
        <h3 class="pick__title">CoffeeBean</h3>
        <i class="pick__icon fas fa-mug-hot"></i>
      </div>
      <div
        ref="card3"
        class="pick__card pick__card-3"
        :class="{
          pickNone: pickCard !== 'card3' && pickCard !== '',
        }"
        @click="handleModal('card3')"
      >
        <h3 class="pick__title">CoffeeBean</h3>
        <i class="pick__icon fas fa-mug-hot"></i>
      </div>
    </div>

    <div class="modal pickCard__modal" tabindex="-1" ref="pickCardModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { Modal } from 'bootstrap';
import Navbar from '../components/Navbar.vue';
import Banner from '../components/Banner.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Banner,
    Footer,
  },
  data() {
    return {
      pickCard: '',
      pickCardModal: null,
    };
  },
  methods: {
    handleModal(pickCard) {
      this.pickCard = pickCard;
      setTimeout(() => this.pickCardModal.show(), 1500);
    },
  },
  mounted() {
    this.pickCardModal = new Modal(this.$refs.pickCardModal);
  },
};
</script>

<style lang="scss"></style>
