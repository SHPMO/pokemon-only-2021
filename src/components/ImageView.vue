<template>
  <div>
    <div class="image-thumbnail"
         :style="{backgroundImage: `url(${imageURL})`}"
         @click="onClick" />
    <div v-if="showing" class="image-view" @click="onClick">
      <img :src="imageURL" alt="image">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import DefaultImage from "../assets/footer/logo.png"

export default defineComponent({
  name: "ImageView",
  props: {
    src: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageURL(): string {
      let image = this.src === null ? "" : this.src.trim()
      if (image === "") {
        image = DefaultImage
        this.enabled = false
      }
      return image
    }
  },
  data() {
    let enabled = !this.disabled
    return {
      enabled,
      showing: false
    }
  },
  methods: {
    async onClick() {
      if (!this.enabled) {
        return
      }
      this.showing = !this.showing
    }
  }
})
</script>

<style>
.image-thumbnail {
  width: 100%;
  height: 100%;
  min-width: 5px;
  min-height: 5px;
  background-color: #cbcbcb;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.image-view {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #282828;
  z-index: 4;
}

.image-view > img {
  object-fit: scale-down;
  width: 100%;
  height: 100%;
}

</style>
