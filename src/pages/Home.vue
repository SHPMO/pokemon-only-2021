<template>
  <div id="page-home">
    <Title />
    <!--
    <Schedule />
    <Location />
    <Tickets />
    <Prizes />
    <Events />
    <Booths />
    -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Title from "./home/Title.vue"

export default defineComponent({
  name: "Home",
  components: {
    Title
  }
})
</script>

<style scoped>
#page-home {
  position: relative;
  width: 100%;
}
</style>
