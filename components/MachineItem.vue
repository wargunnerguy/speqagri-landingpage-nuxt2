<template>
  <div class="overlay-container g-4">
    <div class="card bg-transparent border-0">
<!--      <img v-if="isImage" class="img-fluid image" v-lazy="{
        src: require(`~/static/img/masinad/${mediaName}`),
        loading: require(`~/static/img/masinad/${mediaTinyName}`),
        error: ''}" alt="Pilt kadunud sri :("/>-->
      <div v-if="isImage"  v-lazy-container="{ selector: 'img' }">
        <img class="img-fluid image" :data-src="require(`@/static/img/masinad/${mediaName}`)" :data-loading="require(`@/static/img/masinad/${mediaTinyName}`)" data-error="xxx.jpg">
      </div>
      <video v-else autoplay loop muted>
        <source :src="require(`@/static/video/${mediaName}`)" type="video/mp4">
        <source :src="require(`@/static/video/${mediaName}`)" type="video/ogg">
        Ups, su brauser ei toeta embedded-videosid..
      </video>
      <div class="overlay">
        <slot>MASINA NIMI PUUDU</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MachineItem",
  props: ['title', 'mediaName', 'mediaTinyName', 'type'],
  computed: {
    isImage() {
      return this.type === 'image';
    }
  }
}
</script>

<style scoped>
.overlay-container {
  position: relative;
}

/* The overlay effect - lays on top of the container and over the image */
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.7); /* Black see-through */
  width: 100%;
  padding: 15px;
  transition: .5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  text-align: center;
  box-sizing: border-box;
}


.overlay-container:hover .overlay {
  opacity: 1;
}

.image {
  border-radius: 15px;
  display: block;
  width: 100%;
  height: auto;
  box-shadow: 5px 5px 10px rgba(34, 34, 34, 0.85);
}

.overlay {
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

video {
  border-radius: 15px;
  display: block;
  width: 100%;
  height: auto;
  box-shadow: 5px 5px 10px rgba(34, 34, 34, 0.85);
}

</style>
