<template>
  <div id="map">
    <form>
      <div id="floating-panel">
        <b>Start: </b>
        <select id="start" @change="searchAddressHandler" v-model="start">
          <option value="chicago, il">Chicago</option>
          <option value="st louis, mo">St Louis</option>
          <option value="joplin, mo">Joplin, MO</option>
          <option value="oklahoma city, ok">Oklahoma City</option>
          <option value="amarillo, tx">Amarillo</option>
          <option value="gallup, nm">Gallup, NM</option>
          <option value="flagstaff, az">Flagstaff, AZ</option>
          <option value="winona, az">Winona</option>
          <option value="kingman, az">Kingman</option>
          <option value="barstow, ca">Barstow</option>
          <option value="san bernardino, ca">San Bernardino</option>
          <option value="los angeles, ca">Los Angeles</option>
        </select>
        <b>End: </b>
        <select id="end" @change="searchAddressHandler" v-model="end">
          <option value="chicago, il">Chicago</option>
          <option value="st louis, mo">St Louis</option>
          <option value="joplin, mo">Joplin, MO</option>
          <option value="oklahoma city, ok">Oklahoma City</option>
          <option value="amarillo, tx">Amarillo</option>
          <option value="gallup, nm">Gallup, NM</option>
          <option value="flagstaff, az">Flagstaff, AZ</option>
          <option value="winona, az">Winona</option>
          <option value="kingman, az">Kingman</option>
          <option value="barstow, ca">Barstow</option>
          <option value="san bernardino, ca">San Bernardino</option>
          <option value="los angeles, ca">Los Angeles</option>
        </select>
      </div>
      <button type="submit" @click.prevent="searchAddressHandler">OTSI AADRESS</button>
    </form>
  </div>
</template>

<script>
import {Loader} from '@googlemaps/js-api-loader';


export default {
  name: "CalcMap",
  data() {
    return {
      GOOGLE_API_KEY: 'AIzaSyBhYGREcNa8CKluHvZHNUvVUcrd-dpHupo',
      enteredAddress: '',
      start: 'chicago, il',
      end: 'kingman, az'
    }
  },
  methods: {
    searchAddressHandler() {
      const loader = new Loader({
        apiKey: this.GOOGLE_API_KEY,
        version: "weekly",
        libraries: ["places"]
      });

      loader
        .load()
        .then((google) => {
          const directionsService = new google.maps.DirectionsService();
          const directionsRenderer = new google.maps.DirectionsRenderer();
          const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: {lat: 41.85, lng: -87.65},
          });

          directionsRenderer.setMap(map);
          directionsService
            .route({
              origin: {
                query: this.start,
              },
              destination: {
                query: this.end,
              },
              travelMode: 'DRIVING',
            })
            .then((response) => {
              directionsRenderer.setDirections(response);
            })
            .catch((e) => window.alert("Directions request failed due to " + status));
        })
        .catch(e => {
          // do something
        });
    }
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 300px;
  border: 1px solid red;
}
</style>
