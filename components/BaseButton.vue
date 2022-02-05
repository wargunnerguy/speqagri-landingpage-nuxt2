<template>
  <button @click="$router.push(link)" class="btn">
      <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['link'],
  name: "TheServiceItemButton"
}
</script>

<style scoped>
.btn {
  text-transform: uppercase;
  font-weight: bold;
}

.btn:hover {
  filter: brightness(80%);
}
</style>
