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
import { isLandscapeOrientation, scrollIntoView, setHash, setTitle } from "../utils/view"

const onScroll = (() => {
  let anchors: HTMLAnchorElement[] | null = null
  let previousTop = -1
  const onScrollHandler = () => {
    if (anchors === null || anchors.length < 1) {
      anchors = Array.from(document.querySelectorAll(".home-page > .anchor"))
      anchors = anchors.reverse()
    }
    const currentTop = window.pageYOffset || document.documentElement.scrollTop
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
  return (listen: boolean) => {
    if (listen) {
      window.addEventListener("scroll", onScrollHandler)
      onScrollHandler()
    } else {
      window.removeEventListener("scroll", onScrollHandler)
    }
  }
})()

export default defineComponent({
  name: "Home",
  components: {
    Schedule,
    Title
  },
  mounted() {
    setHash(location.hash.slice(1), true)
    onScroll(true)
  },
  unmounted() {
    onScroll(false)
  }
})
</script>

<style scoped>
#page-home {
  position: relative;
  width: 100%;
}
</style>
