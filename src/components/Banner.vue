<template>
  <div class="banner">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/image/shop-1.jpeg"
            class="d-block w-100"
            alt="coffeeBean"
          />
          <div class="carousel-caption">
            <h5>First slide label</h5>
            <p>
              Some representative placeholder <span>ABC123</span> for the first
              slide.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/image/intro-1.jpg"
            class="d-block w-100"
            alt="coffeeBean"
          />
          <div class="carousel-caption">
            <h5>Second slide label</h5>
            <p>
              Some representative placeholder <span>ABC123</span> for the first
              slide.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/image/shop-3.jpeg"
            class="d-block w-100"
            alt="coffeeBean"
          />
          <div class="carousel-caption">
            <h5>Third slide label</h5>
            <p>
              Some representative placeholder <span>ABC123</span> for the first
              slide.
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../assets/abstracts/variables';
@import '../assets/abstracts/mixins';

.carousel {
  &-item {
    position: relative;
    max-height: 480px;
  }

  &-caption {
    position: absolute;
    @include absCenter;
    background-color: rgba($color-black, 0.5);

    h5 {
      font-size: $font-xl;
      margin-bottom: 3rem;
    }

    p {
      font-size: $font-m;
    }

    span {
      color: $color-green;
      font-weight: bold;
      padding: 0 3px;
    }
  }
}
</style>
