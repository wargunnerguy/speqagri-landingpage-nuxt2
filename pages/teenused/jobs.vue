<template>
  <div>
    <section class="container pt-5"></section>
    <section class="container main pt-4 pb-2">
      <div class="card bg-green-custom">
        <div v-if="img_link" v-lazy-container="{ selector: 'img' }">
          <img class="card-img-top img-fluid p-3"
               :data-src="require(`~/assets/${img_link}`)"
               :data-loading="require(`~/assets/${mediaTinyName}`)"
               data-error="xxx.jpg">
        </div>
        <img v-else-if="img_link" class="card-img-top img-fluid p-3" :src="require(`~/assets/${img_link}`)" alt="">
        <div class="card-body">
          <header>
            <h1 class="p-5">Hetkel tööpakkumised puuduvad</h1>
            <h3 class="p-5">Kontrolli hiljem uuesti</h3>
          </header>
        </div>
        <base-button link="/" class="bg-green-light-custom text-light">{{ $t('to_homepage') }}</base-button>
      </div>
    </section>
    <TheWorkArea></TheWorkArea>
  </div>
</template>

<!--<script>
export default {
  name: "jobs",
  data() {
    return {
      img_link: "img/fb_share_pics/freesasfalt2.png",
      mediaTinyName: "img/fb_share_pics/freesasfalt_tiny.png",
      title: this.$t('recycled_asphalt_service'),
      description: this.$t('recycled_asphalt_service_text'),
      url: "www.speqagri.ee/teenused/freesasfalt",
      quote: "",
      finalImgLink: ''
    }
  },
  created() {
    this.finalImgLink = require(`~/assets/${this.img_link}`).slice(6)
    console.log('www.speqagri.ee/_nuxt' + this.finalImgLink)
  },
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
  }

}
</script>-->

<style scoped>

h2 {
  font-size: 35px;
  font-weight: inherit;
  border: none;
}

.bg-green-custom {
  background-color: #1bac91
}

.bg-green-light-custom {
  background-color: #26c8aa
}
</style>
