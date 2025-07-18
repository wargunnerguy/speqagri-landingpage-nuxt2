<template>
  <div class="card">
    <div id="map">
    </div>
  </div>
</template>

<script>
import {Loader} from '@googlemaps/js-api-loader';

export default {
  name: "CalcMap",
  props: ['quarryLocation', 'startingLocation', 'destinationLocation', 'timeToCalculate'],
  emits: ['calculated-distance', 'calculated-user-distance'],
  data() {
    return {
      GOOGLE_API_KEY: '', /* api key siia */
      enteredAddress: '',
      totalDistance: 0,
      totalUserDistance: 0,
    }
  },
  methods: {
    searchAddressHandler() {
      this.totalDistance = 0;
      this.totalUserDistance = 0;
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
            center: 'Järvamaa',
          });

          directionsRenderer.setMap(map);
          directionsService
            .route({
              origin: this.startingLocation,
              destination: this.startingLocation,
              waypoints: [
                {
                  location: this.destinationLocation,
                  stopover: true,
                },
                {
                location: this.quarryLocation,
                stopover: true,
              }],
              travelMode: 'DRIVING',
            })
            .then((response) => {
              const legs = [...response.routes[0].legs];
              legs.forEach((leg) => {
                this.totalDistance += leg.distance.value / 1000; //meetrites
              })
              this.$emit('calculated-distance', this.totalDistance)
            })
            .catch((e) => window.alert("Asukohapäring ebaõnnestus: proovi uuesti"));
          directionsService /* Kasutajale kuvatud teekond */
            .route({
              origin: this.quarryLocation,
              destination: this.destinationLocation,
              travelMode: 'DRIVING',
            })
            .then((response) => {
              const legs = [...response.routes[0].legs];
              legs.forEach((leg) => {
                this.totalUserDistance += leg.distance.value / 1000; //meetrites
              })
              this.$emit('calculated-user-distance', this.totalUserDistance)
              directionsRenderer.setDirections(response);
            })
            .catch((e) => {console.log(e.message)})
        })
        .catch(e => {
          // do something
        });
    }
  },
  watch: {
    timeToCalculate: function () {
      this.searchAddressHandler();
    }
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 300px;
}
</style>
