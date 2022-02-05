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
          <ShareNetwork
            network="facebook"
            :url="'www.speqagri.ee' + this.$route.path"
            :media="'www.speqagri.ee' + require(`~/assets/${img_link}`)"
            :title="title"
            :description="description"
            :quote="quote"
            :hashtags="hashtags"
          >
            {{$t('share_facebook_text') }}
          </ShareNetwork>
          <slot></slot>
        </div>
        <base-button link="/" class="bg-green-light-custom text-light">{{ $t('to_homepage') }}</base-button>
      </div>
    </section>
    <TheWorkArea></TheWorkArea>
  </div>
</template>

<script>

export default {
  props: ['img_link', 'mediaTinyName', 'title', 'description', 'hashtags', 'quote', 'url'],
  name: "BasePoster",
  layout: 'default',

}
</script>
<style lang="scss" scoped>

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
