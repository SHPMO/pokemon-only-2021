<template>
  <div id="home-title">
    <div class="background">
      <div class="background-gradient" />
    </div>
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
  height: auto;
  top: 47.778%;
  left: 7.552%
}

.address {
  position: absolute;
  width: 29.479%;
  height: auto;
  top: 75.648%;
  left: 7.031%
}

@media only screen and (max-width: 600px) {
  .background {
    position: relative;
    background-size: 105% auto;
    background-image: linear-gradient(
      to bottom,
      rgba(248, 248, 248, 0) 72.1%, rgba(248, 248, 248, 1)
    ),
    url("../../assets/title/background.png");
  }

  /*.background::after {*/
  /*  content: "";*/
  /*  position: absolute;*/
  /*  bottom: 0;*/
  /*  width: 100%;*/
  /*  height: 27.9%;*/
  /*  background: linear-gradient(*/
  /*    to bottom,*/
  /*    rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)*/
  /*  ),*/
  /*  url("../../assets/background.png") repeat;*/
  /*}*/
  .background-gradient {
  }

  .content {
    position: relative;
    width: 70.5%;
    padding-top: 22.794%;
    margin-top: -5%;
    margin-left: auto;
    margin-right: auto;
  }

  .slogan {
    width: 50%;
    top: 30%;
    left: 51.5%;
  }

  .address {
    width: 100%;
    top: 0;
    left: 0;
  }
}

</style>
