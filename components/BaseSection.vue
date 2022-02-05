<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "BaseSection"
}
</script>

<style scoped>
section {
  padding-top: 4rem;
  background-color: #f36f36;
}
</style>
