<template>
  <section id="sponsor" class="section pb-5 pt-0 mt-0">
    <div class="container">
      <figure class="flag">
        <img src="@/assets/img/EL-flag.jpg" alt="" class="flag__img" />
        <figcaption class="flag__caption">
          {{ $t("sponsor_EU_text") }}
        </figcaption>
      </figure>
      <h2>{{ $t("sponsor_heading_4") }}</h2>
      <p>{{ $t("sponsor_message_4") }}</p>
      <img src="@/assets/img/leader.gif" alt=""/>
      <h2>{{ $t("sponsor_heading_3") }}</h2>
      <p>{{ $t("sponsor_message_3") }}</p>
      <h2>{{ $t("sponsor_heading_2") }}</h2>
      <p>{{ $t("sponsor_message_2") }}</p>
      <h2>{{ $t("sponsor_heading_1") }}</h2>
      <p>{{ $t("sponsor_message_1") }}</p>

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

.flag {
  max-width: 400px;   /* same limit as before */
  text-align: center; /* center caption under image */
  padding: 10px;
  margin: 0;          /* reset default figure margins if needed */
}

.flag__img {
  width: 100%;
  height: auto;
  display: block;
}

.flag__caption {
  font-size: 0.85rem;
  margin-top: 4px;
  color: #666;
}
</style>
