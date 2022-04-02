<template>
  <div>
    <section class="apply-now">
      <div class="container">
        <div class="card bg-transparent border-0 p-5">
          <img class="card-img align-self-center" :src="require(`@/assets/img/logo-image-speq-agri.png`)" alt="">
          <TheTextScrollerGadget class="card-body"></TheTextScrollerGadget>
        </div>
      </div>
    </section>
    <TheServices></TheServices>
    <TheMachines></TheMachines>
    <TheWorkArea></TheWorkArea>
    <TheSponsorSection></TheSponsorSection>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      img_link: "img/fb_share_pics/pealeht_reklaam.png",
      title: "SPEQ Agri",
      description: "Teostame Järvamaal lumetõrjet, tõstetöid, kaevetöid, haljastustöid ning pakume ka transporditeenust, purgimisteenust põllumajandusteenuseid ja erinevaid renditeenuseid. Võta ühendust: +372 452 2002, agri@speq.ee",
      url: "www.speqagri.ee",
      quote: "",
      finalImgLink: ''
    }
  },
  transition: "default",
  head() {
    return {
      title: this.title,
      meta: [
        {hid: 'fb:app_id', property: 'fb:app_id', content: '2298596397103477'},
        {hid: 'og:title', property: 'og:title', content: this.title},
        {hid: 'og:type', property: 'og:type', content: 'article'},
        {hid: 'og:url', property: 'og:url', content: this.url},
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {hid: 'og:image', property: 'og:image', content: 'https://speqagri.ee/_nuxt' + this.finalImgLink},
      ]
    }
  },
  created() {
    this.finalImgLink = require(`~/assets/${this.img_link}`).slice(6)
  },

}
</script>
<style scoped>

img {
  width: min-content;
  height: min-content;
  padding-top: 7rem;
  padding-bottom: 3rem;
}
</style>
<style>
.default-enter-active,
.default-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 200ms;
}

.default-enter,
.default-leave-to {
  opacity: 0;
}

</style>

