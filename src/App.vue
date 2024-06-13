<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
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
    <RouterView />
    <AppFooter />

  </div>

</template>

<style lang="scss">
@use './assets/style/general.scss';
</style>
