<template>
  <section>
    <div class="bg-transparent">
      <div class="section-heading p-4">
        <h2>{{ $t("location") }}</h2>
      </div>
      <iframe width="100%" height="300px" style="border:0; display: flex"
              :src="'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJYYCdyCg4k0YRYGD8GG2zAAM&key=AIzaSyB682Q1mLjWfdfWFbuGr_2qV1pn4meJMZA&language=' + this.$i18n.locale"
              allowfullscreen></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheWorkArea"
}
</script>

<style scoped>

h2 {
  font-size: 35px;
  font-weight: inherit;
  border: none;
  text-decoration: none;
}
</style>
