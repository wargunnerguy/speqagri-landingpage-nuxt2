<template>
  <section id="sponsor" class="section pb-5 pt-0 mt-0">
    <div class="container">
      <img src="@/static/img/leader.gif" alt=""/>
      <h2>{{ $t("sponsor_heading_1") }}</h2>
      <p>{{ $t("sponsor_message_1") }}</p>
      <h2>{{ $t("sponsor_heading_2") }}</h2>
      <p>{{ $t("sponsor_message_2") }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheSponsorSection"
}
</script>

<style scoped>
section {
  background-color: #dfd4be;
}

p {
  font-weight: bold;
}

h2, p {
  text-align: left;
  color: #868686;
}
h2 {
  color: #525252;
}
</style>
