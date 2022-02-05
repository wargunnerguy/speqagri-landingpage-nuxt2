<template>
  <ul class="list-group list-group-flush border-0 pb-2">
    <li class="list-group-item bg-transparent">
      <div href="#" class="btn">
        <slot></slot>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TheServiceItemButton"
}
</script>

<style scoped>
.btn {
  text-transform: uppercase;
  background-color: #9d4823;
  color: #ec9070;
  font-weight: bold;
}
</style>
