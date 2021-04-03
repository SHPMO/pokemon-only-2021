<template>
  <header id="header">
    <div class="header-content">
      <div class="logo-container">
        <img class="logo-background" src="../assets/header/logo-background.png" alt="" />
        <router-link to="/#">
          <img class="logo" src="../assets/logo.png" alt="">
        </router-link>
      </div>
      <nav class="navs">
        <ul>
          <li class="nav">
            <Anchor target="schedule">
              <span class="nav-en">Schedule</span>
              <span class="nav-zh">当日行程</span>
            </Anchor>
          </li>
          <li class="nav">
            <Anchor target="location">
              <span class="nav-en">Location</span>
              <span class="nav-zh">场地信息</span>
            </Anchor>
          </li>
          <li class="nav">
            <Anchor target="tickets">
              <span class="nav-en">Tickets</span>
              <span class="nav-zh">票务信息</span>
            </Anchor>
          </li>
          <li class="nav">
            <Anchor target="prizes">
              <span class="nav-en">Prizes</span>
              <span class="nav-zh">活动奖品</span>
            </Anchor>
          </li>
          <li class="nav">
            <Anchor target="events">
              <span class="nav-en">Events</span>
              <span class="nav-zh">活动安排</span>
            </Anchor>
          </li>
          <li class="nav">
            <Anchor target="booths">
              <span class="nav-en">Booths</span>
              <span class="nav-zh">现场摊位</span>
            </Anchor>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<!--<Tickets />-->
<!--<Prizes />-->
<!--<Events />-->
<!--<Booths />-->

<script lang="ts">
import { defineComponent } from "vue"

import Anchor from "./Anchor.vue"

export default defineComponent({
  name: "Header",
  components: {
    Anchor
  },
})
</script>

<style scoped>
#header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 57px;
  background: #f5f5f5;
  z-index: 1;
}

.header-content {
  margin-left: auto;
  margin-right: auto;
  max-width: 1816px;
  width: 100%;
  height: 100%;
  display: flex;
}

.logo-container {
  position: relative;
  width: 285px;
  height: 100%;
  /*margin-left: 85px;*/
  margin-left: 4.681%;
  margin-right: -4px;
  flex: 0 0 auto;
}

.logo-background {
  width: 100%;
  height: auto;
}

.logo {
  position: absolute;
  top: 8.242%;
  left: 22.456%;
  width: 54.737%;
  height: auto;
}

.navs {
  flex: 1 1 auto;
}

.navs > ul {
  display: flex;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav {
  position: relative;
  display: flex;
  max-width: 212px;
  height: 100%;
  flex: 1 1 auto;
  background-image: url("../assets/header/nav-background.png");
  background-repeat: no-repeat;
  background-size: 115.789% 115.789%;
  background-position: center;
}


.nav > a {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6px;
  text-decoration: none;
}

.nav > a > span {
  display: block;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.2rem;
}

.nav-en {
  color: #d31751;
  font-size: 10px;
  letter-spacing: 1px;
}

.nav-zh {
  color: #030000;
  font-size: 20px;
}

@media only screen and (max-width: 1280px) {
  #header {
    height: 40px;
  }

  .logo-container {
    width: 200px;
  }

  .nav > a > span {
    line-height: 0.8rem;
  }

  .nav-en {
    font-size: 7px;
  }

  .nav-zh {
    font-size: 16px;
  }
}

@media only screen and (max-width: 768px) {
  .logo-container {
    width: 120px;
  }

  .nav > a > span {
    line-height: 0.8rem;
  }

  .nav-en {
    font-size: 5px;
  }

  .nav-zh {
    font-size: 14px;
  }
}

@media only screen and (max-width: 600px) {
  #header {
    height: 12px;
  }

  .logo-container {
    margin-left: 3%;
  }

  .navs {
    display: none;
  }
}
</style>
