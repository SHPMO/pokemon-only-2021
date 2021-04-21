<template>
  <router-link class="anchor" :to="`/${target}`" @click.prevent="click(target, $event)">
    <slot />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { inHome, setHash } from "../utils/view"

export default defineComponent({
  name: "Anchor",
  props: {
    target: {
      type: String,
      required: true
    }
  },
  methods: {
    click(target: string, e: MouseEvent) {
      e.preventDefault()
      if (inHome()) {
        setHash(target, true)
      } else {
        let x = e.target as (HTMLElement | null)
        while (x !== null) {
          if (x.tagName.toLowerCase() === "a") {
            location.href = (x as HTMLAnchorElement).href
            break
          }
          x = x.parentElement
        }
      }
    }
  }
})
</script>

<style scoped>
.anchor {
  user-select: none;
}
</style>
