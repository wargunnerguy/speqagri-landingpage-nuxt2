<template>
  <section class="position-relative bottom-0 end-0 bg-dark" id="contact">
    <div class="container pb-4">
      <div class="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 justify-content-center">
        <div class="col ">
          <div class="card bg-transparent border-0">
            <div class="card-body bg-transparent border-bottom border-1 text-nowrap">
              <h3><a href="tel:+372 452 2002">+372 452 2002</a></h3>
            </div>
            <div class="card-header bg-transparent border-0">
              <span><i class="fa fa-phone"></i></span>
            </div>
          </div>
        </div>
        <div class="col ">
          <div class="card bg-transparent border-0">
            <div class="card-body bg-transparent border-bottom border-1 text-nowrap">
              <h3><a href="mailto:agri@speq.ee">agri@speq.ee</a></h3>
            </div>
            <div class="card-header bg-transparent border-0">
              <span><i class="fa fa-at"></i></span>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-transparent border-0">
            <div class="card-body bg-transparent border-bottom border-1 text-nowrap">
              <h3>EE101739021</h3>
            </div>
            <div class="card-header bg-transparent border-0 fw-bold">
              <span>KMK nr</span>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-transparent border-0">
            <div class="card-body bg-transparent border-bottom border-1 text-nowrap">
              <h3>12599060</h3>
            </div>
            <div class="card-header bg-transparent border-0 fw-bold">
              <span>Registrikood</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer -->
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>
h3 {
  color: #b0b0b0;
  font-weight: bold;
}

span, h3 > a {
  text-decoration: none;
  color: lightgrey;
}

.border-darker {
  border-color: #575757;
}
</style>