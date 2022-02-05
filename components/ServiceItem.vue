<template>
    <div class="card m-2" :class="{'selectedServiceBg': showDetails}">
      <img :src="img" class="card-img-top pt-2" alt="">
      <div class="card-body text-light">
        <h5 v-if="!showDetails" class="card-subtitle">{{ name }}</h5>
        <div v-if="showDetails" class="card-text">{{ description }}</div>
      </div>
      <TheServiceItemButton v-on:click="toggleDetails">{{ moreInfo }}</TheServiceItemButton>
      <a class="service-item-link mb-2 rounded" v-if="link.trim() !== ''" :key="link" :href="link">Link</a>
      <nuxt-link class="service-item-link mb-2 rounded" v-if="uri.trim() !== ''" :key="uri" :to="'/teenused/' + uri">Link</nuxt-link>
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
      console.log("TOGGLE CALLED")
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

a {
  padding: 0;
  margin: 0;
}

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

.service-item-link {
  text-transform: uppercase;
  background-color: #9d4823;
  color: #ec9070;
  font-weight: bold;
}
</style>
