<template>
  <footer id="footer">
    <img class="logo" src="../assets/footer/logo.png" alt="">
    <!-- TODO -->
    <ul class="links">
      <li class="link">
        <a href="https://www.weibo.com/SHPMO" target="_blank">
          <img class="weibo-logo" src="../assets/footer/weibo.png" alt="">
          <span>@魔都PMO_OMP</span>
        </a>
      </li>
      <li class="link">
        <a href="https://www.weibo.com/u/5863659719" target="_blank">
          <img class="weibo-logo" src="../assets/footer/weibo.png" alt="">
          <span>@魔都PMO组委会_没有用的情报部</span>
        </a>
      </li>
      <li class="link">
        <a href="https://www.weibo.com/u/7001510374" target="_blank">
          <img class="weibo-logo" src="../assets/footer/weibo.png" alt="">
          <span>@洛托姆是宇宙的中心俱乐部</span>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Footer",
  components: {}
})
</script>

<style scoped>
#footer {
  position: relative;
  width: 100%;
  height: 196px;
  background: #282828;
  display: flex;
  align-items: center;
}

.logo {
  max-width: 156px;
  height: auto;
  margin: auto;
}

.links {
  position: absolute;
  list-style: none;
  padding: 0;
  right: 10px;
  margin: 0;
}

.link {
  margin-bottom: 12px;
}

.link > a {
  display: flex;
  align-items: center;
  height: 18px;
  line-height: 18px;
  font-size: 14px;
  text-decoration: none;
  color: #ffffff;
}

.weibo-logo {
  margin-right: 5px;
}

@media only screen and (max-width: 768px) {
  .links {
    position: relative;
    right: 0;
    margin: auto;
  }
}
@media only screen and (max-width: 600px) {
  .link > a {
    font-size: 10px;
  }
}
</style>
