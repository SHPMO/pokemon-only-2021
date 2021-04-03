<template>
  <div class="home-page">
    <a class="anchor" :name="name" :title="title.zh" />
    <div class="title">
      <h1>{{ title.en }}</h1>
      <h2>{{ title.zh }}</h2>
      <div class="zeros">#000</div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "HomePageBase",
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: Object,
      required: true,
    },
  }
})
</script>

<style scoped>
.home-page {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}

.home-page::after {
  content: "";
  margin-bottom: 100px;
}

.anchor {
  position: absolute;
  user-select: none;
  top: 0;
  opacity: 0;
}

.title {
  user-select: none;
  margin-top: 9.259vh;
  margin-left: auto;
  margin-right: auto;
  flex: 0 0 auto;
}

h1 {
  display: block;
  text-transform: uppercase;
  font-size: 100px;
  color: #d31751;
  font-weight: lighter;
  margin: 0;
}

h2 {
  font-size: 48px;
  color: #040000;
  font-weight: lighter;
  margin: 0;
  margin-top: -24px;
}

.zeros {
  font-size: 18px;
  color: #040000;
  letter-spacing: 4px;
  font-weight: lighter;
  margin: 0;
  margin-top: -8px;
}

.content {
  flex: 1 1 auto;
}

@media only screen and (max-width: 1280px) {
  h1 {
    font-size: 63px;
  }

  h2 {
    font-size: 30px;
    margin-top: -15px;
  }

  .zeros {
    font-size: 12px;
    margin-top: -5px;
  }
}

@media only screen and (max-width: 768px) {
  .title {
    margin-top: 5vh;
  }

  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 24px;
    margin-top: -12px;
  }

  .zeros {
    font-size: 9px;
    margin-top: -4px;
  }
}
</style>
