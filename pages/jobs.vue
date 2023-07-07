<template>
  <div>
    <section class="container pt-5"></section>
    <section class="container main pt-4 pb-2">

      <div class="card bg-green-custom">
        <div v-if="img_link" v-lazy-container="{ selector: 'img' }">
        <div class="card bg-green-light-custom">
          <img :data-src="require(`~/assets/${img_link}`)" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="card-group">
              <div class="card border-0 bg-green-light-custom">
                <div class="card-body">
                  <h5 class="card-title">{{ $t('requirements_for_candidate') }}</h5>
                  <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item bg-green-light-custom">{{ $t('cat_c_driving_license') }}</li>
                    <li class="list-group-item bg-green-light-custom">{{ $t('proficiency_est') }}</li>
                    <li class="list-group-item bg-green-light-custom">{{ $t('correctness_responsibility_accuracy') }}</li>
                    <li class="list-group-item bg-green-light-custom">{{ $t('vocational_training_certificate') }}</li>
                  </ul>
                </div>
              </div>
              <div class="card border-0 bg-green-light-custom">
                <div class="card-body">
                  <h5 class="card-title">{{ $t('we_offer') }}</h5>
                  <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item bg-green-light-custom">{{ $t('competitive_salary') }}</li>
                    <li class="list-group-item bg-green-light-custom">{{ $t('fun_team') }}</li>
                    <li class="list-group-item bg-green-light-custom">{{ $t('fuel_compensation') }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card bg-green-custom border-0">
              <div class="card-body">
                <h3>{{ $t('job_offer_info') }}</h3>
              </div>
            </div>
          </div>
          <div class="card-body">
            <button class="btn btn-fb mb-2 rounded">
              <ShareNetwork
                network="facebook"
                :url="'www.speqagri.ee' + this.$route.path"
                :media="'www.speqagri.ee' + require(`~/assets/${img_link}`)"
                :title="title"
                :description="description"
                :quote="quote"
              >
                {{$t('share_facebook_text') }}
              </ShareNetwork>
            </button>
            <slot></slot>
          </div>
        </div>
        <base-button link="/" class="bg-green-light-custom text-light">{{ $t('to_homepage') }}</base-button>
      </div>
      </div>
    </section>
    <TheWorkArea></TheWorkArea>
  </div>
</template>

<script>
export default {
  name: "jobs",
  data() {
    return {
      img_link: "img/fb_share_pics/fekaaliauto.png",
      mediaTinyName: "img/fb_share_pics/freesasfalt_tiny.png",
      title: this.$t('we_offer_work_to') + this.$t('to_truck_driver'),
      description: this.$t('we_offer_work_to') + this.$t('to_truck_driver'),
      url: "www.speqagri.ee/jobs",
      quote: "",
      finalImgLink: '',
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
</script>

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

.description {
  background-color: #f36f36
}

.card-body {

}

.btn-fb {
  text-transform: uppercase;
  background-color: #4267B2;
  color: #efefef;
  font-weight: bold;
}
</style>
