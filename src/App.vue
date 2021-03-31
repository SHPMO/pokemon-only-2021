<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer
  }
})
</script>

<style>
html, body, #app-pmo2021 {
  box-sizing: border-box;
  margin: 0;
}
</style>
