<template>
  <div id="page-home">
    <Title />
    <Schedule />
    <!--
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

import Schedule from "./home/Schedule.vue"
import Title from "./home/Title.vue"
import { scrollIntoView } from "../utils/view"

export default defineComponent({
  name: "Home",
  components: {
    Schedule,
    Title
  },
  mounted() {
    const target = location.hash.slice(1)
    scrollIntoView(target)
  }
})
</script>

<style scoped>
#page-home {
  position: relative;
  width: 100%;
}
</style>
