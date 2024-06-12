<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter,
  },
  data() {
    return {
      store,
    }
  }
}

</script>

<template>

  <div id="app">
    <AppHeader />
    <AppContent />
    <AppFooter />

  </div>

</template>

<style lang="scss">
@use './assets/style/general.scss';
</style>
