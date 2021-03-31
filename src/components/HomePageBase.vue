<template>
  <h1>{{ this.$props.title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "HomePageBase",
  props: {
    title: {
      type: String,
      required: false
    }
  },
})
</script>

<style scoped>

</style>
