<template>
  <a :href="`#${target}`" @click="click">
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { scrollIntoView } from "../utils/view"

export default defineComponent({
  name: "Anchor",
  props: {
    target: String
  },
  methods: {
    click(e: MouseEvent) {
      e.preventDefault()
      const { target } = this.$props
      scrollIntoView(target)
    }
  }
})
</script>

<style scoped>
.anchor {
  user-select: none;
}
</style>
