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
*, ::before, ::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  width: 100%;
  color: #030000;
  background-image: url("./assets/background.png");
  background-repeat: repeat;
}

#app-pmo2021 {
  position: relative;
  width: 100%;
}
</style>
