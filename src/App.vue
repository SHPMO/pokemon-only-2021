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

@font-face {
  font-family: "Alata";
  src: local("Alata"), url("./assets/fonts/Alata-Regular.ttf");
  font-weight: normal;
}

@font-face {
  font-family: "Noto Sans SC";
  src: local("Noto Sans SC"), url("./assets/fonts/NotoSansHans-Regular.otf");
  font-weight: normal;
}

@font-face {
  font-family: "Noto Sans SC";
  src: local("Noto Sans SC"), url("./assets/fonts/NotoSansHans-DemiLight.otf");
  font-weight: lighter;
}

html, body {
  margin: 0;
  width: 100%;
  color: #030000;
  background-image: url("./assets/background.png");
  background-repeat: repeat;
  font-family: "Alata", "Noto Sans SC", sans-serif;
}

#app-pmo2021 {
  position: relative;
  width: 100%;
}
</style>
