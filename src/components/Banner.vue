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
            <h5>國際咖啡日</h5>
            <p>
              現在輸入 <span>COFFEE50</span> 即享有
              <span class="text-danger">50%off</span> 優惠
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
            <h5>滿額贈活動</h5>
            <p>全館只要消費滿 <span>$5000</span> 即可成為 VIP</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/image/shop-3.jpeg"
            class="d-block w-100"
            alt="coffeeBean"
          />
          <div class="carousel-caption carousel-caption-3">
            <h5>情人節小物</h5>
            <p>
              傳說中 . . . 在白色情人節期間，送心儀對象<span
                class="carousel-caption-text"
                >對杯</span
              >就能告白成功喔
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

    &-3 {
      padding: 1rem !important;
    }

    h5 {
      font-size: $font-xl;
      margin-bottom: 3rem;
      letter-spacing: 5px;
    }

    p {
      font-size: $font-m;
    }

    span {
      color: $color-green;
      font-weight: bold;
      padding: 0 3px;
    }

    &-text {
      color: $color-primary !important;
    }
  }
}
</style>
