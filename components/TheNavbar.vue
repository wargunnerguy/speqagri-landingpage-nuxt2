<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" id="nav">
    <div class="container">
      <nuxt-link class="navbar-brand" to="/">
        SPEQ Agri</nuxt-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto text-uppercase fw-bolder">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
              {{ $t('Services') }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li v-for="service in services" :key="service.id"><a class="dropdown-item"
                                                                   href="/#services">{{ $t(service.translation_tag) }}</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" href="#" tabindex="-1" aria-disabled="true" to="/rakendused/hinnakalkulaator">
              {{ $t('calculator') }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" aria-current="page" to="/teenused/jobs">{{ $t('job_vacancies') }}
              <span
                class="badge bg-danger">0</span></nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" aria-current="page" to="/#contact">{{ $t('contact') }}</nuxt-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li>
            <TheLocaleChanger></TheLocaleChanger>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TheNavbar",
  computed: {
    ...mapGetters(['services'])
  },
  layout: 'default',
}
</script>
