<template>
  <base-poster
    :img_link=img_link
    :mediaTinyName=mediaTinyName
    :title=title
    :description=description
    :quote=quote
  >
    <header><h3>Täpsem info</h3>
    </header>
    <article>
      <ul>
        <li>
          <a href="/biopuhastite_dokid/QuickOnePlus_Flyer.pdf" download>QuickOne+ flaier - <u>LAE ALLA</u></a>
        </li>
        <li>
          <a href="/biopuhastite_dokid/QuickOnePlus_kasutusjuhend.pdf" download>QuickOne+ kasutusjuhend - <u>LAE
            ALLA</u></a>
        </li>
        <li>
          <a href="/biopuhastite_dokid/QuickOne-hooldusjuhendi-lyhikirjeldus.pdf" download>QuickOne+ hooldusjuhend - <u>LAE
            ALLA</u></a>
        </li>
        <li>
          <a href="/biopuhastite_dokid/ZE_20161011_CF-SBR-QuickONE_6p.e.pdf" download>QuickOne+ (6 inimesele)
            spetsifikatsioon - <u>LAE ALLA</u></a>
        </li>
        <li>
          <a href="/biopuhastite_dokid/ZE_20210819_CF-SBR QuickONE+_4_p.e.pdf" download>QuickOne+ (4 inimesele)
            spetsifikatsioon - <u>LAE ALLA</u></a>
        </li>
        <li>
          <a href="/biopuhastite_dokid/sertifikaat.pdf" download>QuickOne+ sertifikaat - <u>LAE ALLA</u></a>
        </li>
      </ul>
    </article>
  </base-poster>
</template>

<script>

export default {
  name: "biopuhastid",
  data() {
    return {
      img_link: "img/fb_share_pics/biopuhastid.png",
      mediaTinyName: "img/fb_share_pics/biopuhastid_tiny.png",
      title: "Biopuhastite ning septikute müük ja paigaldus",
      description: "Väga madalate kuludega ning lihtsasti hooldatavad. Võta ühendust",
      url: "www.speqagri.ee/teenused/biopuhastid",
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
<style scoped>
a {
  color: #171717;
}

a:hover {
  background-color: #9a573a;
  font-weight: bold;
}
</style>
