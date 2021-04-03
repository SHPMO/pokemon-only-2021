<template>
  <div class="home-page">
    <a class="anchor" :name="name" :title="title.zh" />
    <div class="title">
      <h1>
        <span v-for="c in title.en">{{ c }}</span>
      </h1>
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
  align-items: center;
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
  flex: 0 0 auto;
  width: 100%;
  max-width: 605px;
}

h1 {
  text-transform: uppercase;
  font-size: 100px;
  color: #d31751;
  font-weight: lighter;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

h2 {
  font-size: 48px;
  color: #040000;
  font-weight: lighter;
  margin: -24px 0 0;
}

.zeros {
  font-size: 18px;
  color: #040000;
  letter-spacing: 8px;
  font-weight: lighter;
  margin: -8px 0 0;
}

.content {
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media only screen and (max-width: 1280px) {
  .title {
    max-width: 400px;
  }

  h1 {
    font-size: 63px;
  }

  h2 {
    font-size: 30px;
    margin-top: -15px;
  }

  .zeros {
    letter-spacing: 6px;
    font-size: 12px;
    margin-top: -5px;
  }
}

@media only screen and (max-width: 768px) {
  .home-page {
    min-height: unset;
  }

  .title {
    width: auto;
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
    letter-spacing: 4px;
    font-size: 9px;
    margin-top: -4px;
  }

  .home-page::after {
    margin-bottom: 64px;
  }
}
</style>
