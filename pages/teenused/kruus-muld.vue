<template>
  <base-poster :img_link="img_link" :mediaTinyName="mediaTinyName"></base-poster>
</template>

<script>
export default {
  name: "KruusMuld",
  data() {
    return {
      img_link: "img/fb_share_pics/kruus-muld.png",
      mediaTinyName: "img/fb_share_pics/kruus-muld_tiny.png",
      title: this.$t('bulk_material_transport_service'),
      description: this.$t('bulk_material_transport_service_text'),
      url: "www.speqagri.ee/teenused/kruus-muld",
      quote: "",
      finalImgLink: ''
    }
  },
  created() {
    this.finalImgLink = require(`~/assets/${this.img_link}`).slice(6)
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
</script>
