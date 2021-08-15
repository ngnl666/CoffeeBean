<template>
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
          <p class="intro__in">來自咖啡發源地的咖啡豆</p>
        </li>
        <li class="intro__section-2">
          <div class="intro__pic">
            <img src="../assets/image/intro-2.jpg" alt="coffeBean" />
          </div>
          <p class="intro__in">品質最好的鮮乳，呈現出最完美的奶泡</p>
        </li>
        <li ref="intro__section3" class="intro__section-3 hidden-3">
          <div class="intro__pic">
            <img src="../assets/image/intro-3.jpg" alt="coffeBean" />
          </div>
          <p class="intro__in">專業級義式咖啡機</p>
        </li>
      </ul>
    </section>

    <main class="main">
      <div class="main__section main__section-1">
        <div class="main__box--left-1">
          <h3 class="main__topic main__topic-1 fst-italic">
            選豆
            <span>Beans</span>
          </h3>
          <p class="main__description main__description-1">
            堅持進口咖啡原產地的豆子，嚴格把關每批生豆的含水率、顏色及密度，採用標準化
            SCAA 杯測方式，將其<span class="main__text"
              >香氣、餘韻、酸值、乾淨度 . . .</span
            >
            等十大指標列為評測分級標準，為的就是能讓每一位客人品嘗到最完美的咖啡
          </p>
        </div>
        <div class="main__box--right-1"></div>
      </div>
      <div class="main__section main__section-2">
        <div class="main__box--left-2"></div>
        <div class="main__box--right-2">
          <h3 class="main__topic main__topic-2 fst-italic">
            烘培
            <span>Roast</span>
          </h3>
          <p class="main__description main__description-2">
            使用『 淺培、中培、深培
            』三種烘培方式，帶出每種豆子最迷人的味道，<span class="main__text"
              >淺培</span
            >
            能保留豆子最原始的香氣，酸中帶點花果香，<span class="main__text"
              >中培</span
            >在酸苦平衡中有著堅果可可風味，在喉中順口回甘，而<span
              class="main__text"
              >深培</span
            >擁有最濃厚的口感，焦苦中帶甜，呈現出多層次的風味
          </p>
        </div>
      </div>
      <div class="main__section main__section-3">
        <div class="main__box--left-3">
          <h3 class="main__topic main__topic-3 fst-italic">
            研磨
            <span>Grind</span>
          </h3>
          <p class="main__description main__description-3">
            <span class="main__text"
              >『 好的磨豆機，比好的沖泡器具更重要 』</span
            >咖啡粉粒的大小和研磨時間是決定一杯咖啡好壞的關鍵，
            徑度一致的咖啡粉粒在高溫沖泡下能有最平均的口感，而在研磨時與空氣接觸的時間也會影響咖啡的純度，
            兩者之間缺一不可
          </p>
        </div>
        <div class="main__box--right-3"></div>
      </div>
      <div class="main__section main__section-4">
        <div class="main__box--left-4"></div>
        <div class="main__box--right-4">
          <h3 class="main__topic main__topic-4 fst-italic">
            萃取
            <span>Extraction</span>
          </h3>
          <p class="main__description main__description-4">
            義式咖啡機和手沖咖啡皆有特色，使用咖啡機加壓萃取的 Espresso
            搭配牛奶，廣受大眾的喜愛，手沖咖啡的滴濾手法最能發揮豆子本身的風味，
            <span class="main__text">水流速度</span
            >控制著咖啡的酸甜濃淡，對於重視風味的人來說是種味覺大饗宴
          </p>
        </div>
      </div>

      <div class="main__flex">
        <router-link
          to="/shop/all"
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
      this.bgActive = window.scrollY > 0;
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
