<template>
  <div id="page-home">
    <div class="back-to-top" :class="{ fullHeight: inFooter }">
      <div :class="{ inTitle, inFooter }" @click="backToTop" />
    </div>
    <Title />
    <Schedule />
    <Location />
    <Tickets />
    <!--
    <Prizes />
    <Events />
    <Booths />
    -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Title from "./home/Title.vue"
import Schedule from "./home/Schedule.vue"
import Location from "./home/Location.vue"
import Tickets from "./home/Tickets.vue"

import { isLandscapeOrientation, scrollIntoView, setHash, setTitle } from "../utils/view"

let anchors: HTMLAnchorElement[] | null = null
let previousTop = -1

export default defineComponent({
  name: "Home",
  components: {
    Title,
    Schedule,
    Location,
    Tickets
  },
  data() {
    return {
      inTitle: false,
      inFooter: false
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
      this.inTitle = currentTop <= (isLandscapeOrientation() ? 84 : 131) + window.innerHeight * 0.1
      this.inFooter = document.documentElement.scrollHeight - currentTop - window.innerHeight * 0.9 + 42 < 196

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
  width: 100%;
  height: 100vh;
}

.fullHeight {
  height: 100%;
}

.back-to-top > div {
  position: fixed;
  right: 10%;
  bottom: 10%;
  cursor: pointer;
  background-image: url("../assets/home/top.png");
  width: 131px;
  height: 131px;
  background-repeat: no-repeat;
  z-index: 2;
}

.back-to-top > div.inTitle {
  position: absolute;
  bottom: -84px;
}

.back-to-top > div.inFooter {
  position: absolute;
  bottom: -42px;
}

@media only screen and (orientation: portrait) {
  .back-to-top > div.inTitle {
    position: absolute;
    bottom: -131px;
  }
}

@media only screen and (max-width: 600px) {
  .back-to-top {
    display: none;
  }
}
</style>
