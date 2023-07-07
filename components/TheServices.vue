<template>
  <section class="our-services" id="services">
    <div class="container p-sm-4">
      <div class="section-heading">
        <h2>{{ $t('Services') }}</h2>
      </div>
      <div class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1 justify-content-center">
        <service-item v-for="service in this.$store.state.services"
                      :key="service.id"
                      :img="require(`@/assets/img/icons/${service.img}.png`)"
                      :name=$t(service.translation_tag)
                      :description=$t(service.desc)
                      :link="service.link"
                      :uri="service.uri"
        ></service-item>
      </div>
    </div>
  </section>
</template>
<script>
import ServiceItem from "@/components/ServiceItem";

export default {
  name: "TheServices",
  components: {
    ServiceItem
  },
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
