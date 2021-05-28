<template>
  <!-- <router-link :to="{ name: 'Login' }">登入</router-link> -->
  <div class="wrap">
    <Header />

    <section class="intro" ref="intro">
      <h2 class="intro__title">我們的咖啡</h2>
      <p class="intro__description">
        我們認真對待每一杯咖啡，精挑細選來自不同產區的咖啡豆，從生豆到烘培層層把關，結合來自台灣高大牧場的牛奶，打造出完美的比例。
      </p>
      <ul class="intro__section">
        <li ref="intro__section1" class="intro__section-1 hidden-1">
          <div class="intro__pic">
            <img src="../assets/image/intro-1.jpg" alt="coffeBean" />
          </div>
          <p class="intro__in">來自咖啡發源地的中南美洲以及非洲的咖啡豆</p>
        </li>
        <li class="intro__section-2">
          <div class="intro__pic">
            <img src="../assets/image/intro-2.jpg" alt="coffeBean" />
          </div>
          <p class="intro__in">
            使用品質最好的鮮乳，在高溫加熱下呈現出最完美的奶泡
          </p>
        </li>
        <li ref="intro__section3" class="intro__section-3 hidden-3">
          <div class="intro__pic">
            <img src="../assets/image/intro-3.jpg" alt="coffeBean" />
          </div>
          <p class="intro__in">專業的義式咖啡機萃取出迷人香氣的 Espresso</p>
        </li>
      </ul>
    </section>

    <main class="main">
      <div class="main__section main__section-1">
        <div class="main__box--left-1">
          <h3 class="main__topic main__topic-1">
            選豆
            <span>Beans</span>
          </h3>
          <p class="main__description main__description-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            ratione nemo quod incidunt, facilis exercitationem minima eveniet
            veritatis voluptates mollitia magnam accusantium qui esse
            consequatur officia cumque itaque ducimus, necessitatibus culpa
            veniam? Itaque debitis ut esse doloribus. Repellat, veniam est
            voluptates numquam vero quis accusantium dolor ratione officia.
            Voluptates, assumenda!
          </p>
        </div>
        <div class="main__box--right-1"></div>
      </div>
      <div class="main__section main__section-2">
        <div class="main__box--left-2"></div>
        <div class="main__box--right-2">
          <h3 class="main__topic main__topic-2">
            烘培
            <span>Roast</span>
          </h3>
          <p class="main__description main__description-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            ratione nemo quod incidunt, facilis exercitationem minima eveniet
            veritatis voluptates mollitia magnam accusantium qui esse
            consequatur officia cumque itaque ducimus, necessitatibus culpa
            veniam? Itaque debitis ut esse doloribus. Repellat, veniam est
            voluptates numquam vero quis accusantium dolor ratione officia.
            Voluptates, assumenda!
          </p>
        </div>
      </div>
      <div class="main__section main__section-3">
        <div class="main__box--left-3">
          <h3 class="main__topic main__topic-3">
            研磨
            <span>Grind</span>
          </h3>
          <p class="main__description main__description-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            ratione nemo quod incidunt, facilis exercitationem minima eveniet
            veritatis voluptates mollitia magnam accusantium qui esse
            consequatur officia cumque itaque ducimus, necessitatibus culpa
            veniam? Itaque debitis ut esse doloribus. Repellat, veniam est
            voluptates numquam vero quis accusantium dolor ratione officia.
            Voluptates, assumenda!
          </p>
        </div>
        <div class="main__box--right-3"></div>
      </div>
      <div class="main__section main__section-4">
        <div class="main__box--left-4"></div>
        <div class="main__box--right-4">
          <h3 class="main__topic main__topic-4">
            萃取
            <span>Extraction</span>
          </h3>
          <p class="main__description main__description-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            ratione nemo quod incidunt, facilis exercitationem minima eveniet
            veritatis voluptates mollitia magnam accusantium qui esse
            consequatur officia cumque itaque ducimus, necessitatibus culpa
            veniam? Itaque debitis ut esse doloribus. Repellat, veniam est
            voluptates numquam vero quis accusantium dolor ratione officia.
            Voluptates, assumenda!
          </p>
        </div>
      </div>

      <div class="main__flex">
        <router-link
          to="/shop"
          class="myBtn main__myBtn--primary hvr-icon-forward"
          >來去看看<i class="main__icon fa fa-chevron-circle-right hvr-icon"></i
        ></router-link>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      bgActive: false,
      introSectionCouter: 0,
    };
  },
  methods: {
    ...mapMutations('moduleFrontPage', ['setBgActive']),
    handleScroll() {
      this.bgActive = window.scrollY > 0 ? true : false;
      this.setBgActive(this.bgActive);
    },
    handleIntro(entry, observer) {
      this.introSectionCouter++;
      if (this.introSectionCouter === 2) {
        this.$refs.intro__section1.classList.remove('hidden-1');
        this.$refs.intro__section3.classList.remove('hidden-3');
        observer.unobserve(entry[0].target);
      }
    },
  },
  mounted() {
    const introOption = {
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.5,
    };
    const introObserve = new IntersectionObserver(
      this.handleIntro,
      introOption
    );
    introObserve.observe(this.$refs.intro);
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss" scoped></style>
