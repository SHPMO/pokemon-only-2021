<template>
  <div id="page-home">
    <Title>
      <div class="back-to-top" :class="{ fixed: fixBackToTop }" @click="backToTop" />
    </Title>
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
import { isLandscapeOrientation, scrollIntoView, setHash, setTitle } from "../utils/view"

let anchors: HTMLAnchorElement[] | null = null
let previousTop = -1

export default defineComponent({
  name: "Home",
  components: {
    Schedule,
    Title
  },
  data() {
    return {
      fixBackToTop: false
    }
  },
  methods: {
    backToTop() {
      setHash("", true, false)
    },
    onScroll() {
      if (anchors === null || anchors.length < 1) {
        anchors = Array.from(document.querySelectorAll(".home-page > .anchor"))
        anchors = anchors.reverse()
      }
      const currentTop = window.pageYOffset || document.documentElement.scrollTop
      this.fixBackToTop = currentTop > 84 + window.innerHeight * 0.1
      const goingDown = currentTop > previousTop
      previousTop = currentTop
      let t = window.innerHeight / 3
      if (!goingDown && (isLandscapeOrientation() || currentTop > t)) {
        t *= 2
      }
      for (const anchor of anchors) {
        if (anchor.getBoundingClientRect().top <= t) {
          const name = anchor.getAttribute("name")
          setHash(name)
          setTitle(anchor.getAttribute("title"))
          return
        }
      }
      setHash("")
      setTitle("首页")
    }
  },
  mounted() {
    setHash(location.hash.slice(1), true, false)
    window.addEventListener("scroll", this.onScroll)
    this.onScroll()
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll)
  }
})
</script>

<style scoped>
#page-home {
  position: relative;
  width: 100%;
}

.back-to-top {
  position: absolute;
  right: 10%;
  bottom: -84px;
  cursor: pointer;
  background-image: url("../assets/home/top.png");
  width: 95px;
  height: 131px;
  background-repeat: no-repeat;
  z-index: 1;
}

.fixed {
  position: fixed;
  bottom: 10%;
}

@media only screen and (max-width: 600px) {
  #back-to-top {
    display: none;
  }
}
</style>
