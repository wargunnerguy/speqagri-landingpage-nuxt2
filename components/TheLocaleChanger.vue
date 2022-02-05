<template>
  <div>
    <button v-for="locale of $i18n.availableLocales" :key="locale"
            @click="changeLocale(locale)"
            type="button"
            class="btn btn-lg">
      <img :src="getLocaleImg(locale)" width="50"/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TheLocaleChanger',
  data() {
    return {
      langs: [
        {
          id: 'et',
          name: 'Eesti',
        },
        {
          id: 'en',
          name: 'English',
        },
        {
          id: 'ru',
          name: 'Vene',
        },
      ]
    }
  },
  methods: {
    changeLocale(localeString) {
      this.$i18n.locale = localeString;
    },
    getLocaleImg(locale) {
      return require(`@/assets/img/flags/${locale}.png`)
    },
  },
  created: function () {
    if (process.client && localStorage.getItem("locale") !== null) {
      this.$i18n.locale = localStorage.getItem("locale");
    }
  },
}
</script>

<style scoped>

</style>
