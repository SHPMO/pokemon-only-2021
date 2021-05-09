<template>
  <BoothPageBase type="items" :page="page" :max-page="maxPage" :update-page="updatePage">
    <ItemList :update-states="updateStates" />
  </BoothPageBase>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import BoothPageBase from "./BoothPageBase.vue"
import ItemList from "./ItemList.vue"
import { getQueryPage } from "../../utils/view"

export default defineComponent({
  name: "AllItems",
  components: {
    ItemList,
    BoothPageBase
  },
  methods: {
    updatePage(page: number) {
      if (isNaN(page) || page < 1 || page > this.maxPage) {
        page = 1
      }
      this.page = page
      if (this.updatePageState !== undefined) {
        this.updatePageState(page)
      }
    },
    updateStates(maxPage: number, updatePage: (page: number) => void) {
      this.maxPage = maxPage
      this.updatePageState = updatePage
      const page = getQueryPage(this.$route, this.maxPage)
      this.updatePage(page)
    }
  },
  data() {
    return {
      page: 0,
      maxPage: 0,
      updatePageState: undefined as undefined | ((page: number) => void)
    }
  }
})
</script>

<style scoped>
</style>