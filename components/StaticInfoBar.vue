<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a id="scroll-text" :href="link" target="_blank"><span class="navbar-brand mb-0 h1">{{ this.info }}</span></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "StaticInfoBar",
  props: ['info', 'link'],
}
</script>

<style scoped>
/* Place the navbar at the bottom of the page, and make it stick */
.navbar {
  background-color: #333;
  overflow: hidden;
  position: fixed;
  top: 4rem;
  width: 100%;
}

#scroll-text {
  /* animation properties */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);

  -moz-animation: my-animation 50s linear infinite;
  -webkit-animation: my-animation 50s linear infinite;
  animation: my-animation 50s linear infinite;
  color: antiquewhite;
  text-transform: uppercase;
  font-weight: bold;
}

/* for Firefox */
@-moz-keyframes my-animation {
  from { -moz-transform: translateX(100%); }
  to { -moz-transform: translateX(-100%); }
}

/* for Chrome */
@-webkit-keyframes my-animation {
  from { -webkit-transform: translateX(100%); }
  to { -webkit-transform: translateX(-100%); }
}

@keyframes my-animation {
  from {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

</style>
