<template>
  <HomePageBase name="items" :title="{en: 'Items', zh:'商品一览'}">
    <div class="action-links">
      <router-link to="/booths">摊位一览</router-link>
    </div>
    <ItemList />
  </HomePageBase>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { getItem, Item } from "../../utils/models"
import HomePageBase from "../../components/HomePageBase.vue"
import ItemList from "./ItemList.vue"

export default defineComponent({
  name: "AllItems",
  components: {
    ItemList,
    HomePageBase
  }
})
</script>

<style scoped>
.action-links {
  width: 100%;
  max-width: 605px;
  font-size: 24px;
  margin-top: 16px;
}

@media only screen and (max-width: 1280px) {
  .action-links {
    font-size: 20px;
    max-width: 400px;
  }
}

@media only screen and (max-width: 600px) {
  .action-links {
    width: 80%;
    min-width: 350px;
  }
}
</style>