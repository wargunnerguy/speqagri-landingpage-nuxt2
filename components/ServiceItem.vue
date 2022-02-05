<template>
  <div class="card m-2" :class="{'selectedServiceBg': showDetails}">
    <img :src="img" class="card-img-top pt-2" alt="">
    <div class="card-body text-light">
      <h5 v-if="!showDetails" class="card-subtitle">{{ name }}</h5>
      <div v-if="showDetails" class="card-text">{{ description }}</div>
    </div>
    <div class="btn-group-vertical">
      <button class="btn mb-2" @click="toggleDetails">{{ moreInfo }}</button>
      <a class="btn mb-2 rounded" v-if="link.trim() !== ''" :key="link" :href="link">Link</a>
      <nuxt-link class="btn mb-2 rounded" v-if="uri.trim() !== ''" :key="uri" :to="'/teenused/' + uri">
        Link
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceItem",
  props: ['img', 'description', 'name', 'link', 'uri'],
  data() {
    return {
      showDetails: false,
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  },
  computed: {
    moreInfo() {
      return this.showDetails ? this.$t('hide_info') : this.$t('more_info');
    }
  }

}
</script>

<style scoped>

.card {
  background-color: #f36f36;
  border-radius: 10px;
  border: dashed #bb562a 3px;
}

img {
  /*transform: scale(1.1);*/
}

p {
  font-size: 1.2rem;
}

.selectedServiceBg {
  background-color: #bb562a;
}

.btn {
  text-transform: uppercase;
  background-color: #9d4823;
  color: #ec9070;
  font-weight: bold;
}
</style>
