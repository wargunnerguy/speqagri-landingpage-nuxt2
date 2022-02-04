<template>
  <main>
    <h1>{{ $t('active') }}</h1>

    <nuxt-link
      v-if="$i18n.locale !== 'et'"
      :to="switchLocalePath('et')"
    >
      English
    </nuxt-link>

    <nuxt-link
      v-if="$i18n.locale !== 'en'"
      :to="switchLocalePath('en')"
    >
      Eesti
    </nuxt-link>
  </main>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
