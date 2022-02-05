<template>
  <div>
    <TheNavbar></TheNavbar>
    <section class="apply-now">
      <div class="container">
        <div class="card bg-transparent border-0 p-5">
          <img class="card-img align-self-center" :src="require(`@/static/img/logo-image-speq-agri.png`)" alt="">
          <TheTextScrollerGadget class="card-body"></TheTextScrollerGadget>
        </div>
      </div>
    </section>
    <TheServices></TheServices>
    <TheMachines></TheMachines>
    <TheWorkArea></TheWorkArea>
    <TheSponsorSection></TheSponsorSection>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
export default {
  name: "MainPage",
}
</script>
<style scoped>

img {
  width: min-content;
  height: min-content;
  padding-top: 7rem;
  padding-bottom: 3rem;
}


</style>

