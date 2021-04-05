<template>
  <div id="home-title">
    <div class="background" />
    <div class="content">
      <img class="slogan" src="../../assets/title/slogan.png" alt="">
      <img class="address" src="../../assets/title/address.png" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Title",
  components: {}
})
</script>

<style scoped>
#home-title {
  width: 100%;
  user-select: none;
  position: relative;
}

.background {
  width: 100%;
  padding-top: 56.25%;
  background-image: url("../../assets/title/background.png");
  background-position: top right;
  background-size: 100% auto;
  background-repeat: no-repeat;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.slogan {
  position: absolute;
  width: 28.385%;
  min-width: 363px;
  height: auto;
  top: 47.778%;
  left: 7.552%
}

.address {
  position: absolute;
  width: 29.479%;
  min-width: 377px;
  height: auto;
  bottom: 10.5%;
  left: 7.031%
}

@media only screen and (orientation: landscape) and (min-width: 601px) {
  .background {
    height: 100vh;
    padding-top: 0;
    background-size: auto 100%;
  }

  @media (max-width: 1280px) {
  }
}

@media only screen and (orientation: portrait), only screen and (max-width: 600px) {
  .background {
    position: relative;
    background-size: 105% auto;
    background-image: linear-gradient(
      to bottom,
      rgba(248, 248, 248, 0) 72.1%, rgba(248, 248, 248, 1)
    ),
    url("../../assets/title/background.png");
  }

  .content {
    position: relative;
    width: 80%;
    padding-top: 22.794%;
    margin-top: -5%;
    margin-left: auto;
    margin-right: auto;
  }

  .slogan {
    width: 50%;
    min-width: 50%;
    top: 30%;
    left: 51.5%;
  }

  .address {
    width: 100%;
    min-width: 100%;
    top: 0;
    left: 0;
  }
}

/* @media only screen and (max-width: 600px) {
} */

</style>
