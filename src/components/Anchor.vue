<template>
  <a :href="`#${target}`" @click="click">
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { scrollIntoView, setHash } from "../utils/view"

export default defineComponent({
  name: "Anchor",
  props: {
    target: String
  },
  methods: {
    click(e: MouseEvent) {
      e.preventDefault()
      const { target } = this.$props
      setHash(target, true)
    }
  }
})
</script>

<style scoped>
.anchor {
  user-select: none;
}
</style>
