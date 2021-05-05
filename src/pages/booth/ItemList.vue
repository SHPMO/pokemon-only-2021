<template>
  <div class="item-list">
    <div v-if="itemIDs.length === 0" class="item-list-empty">暂无商品。</div>
    <ItemItem :id="itemID" v-for="itemID in itemIDs" />
  </div>
  <div v-if="itemIDs.length > 0" class="pages">
    <a
        :class="{disabled: page === 0}"
        :href="page === 0 ? undefined : `?page=${page}`"
        @click.prevent="updatePage(page - 1)"
    >上一页</a>
    <div>
      <span class="page">{{ page + 1 }}</span> / <span class="page-max">{{ maxPage }}</span>
    </div>
    <a
        :class="{disabled: page === maxPage - 1}"
        :href="page === maxPage - 1 ? undefined : `?page=${page + 2}`"
        @click.prevent="updatePage(page + 1)"
    >下一页</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import ItemItem from "./ItemItem.vue"

import { getItems, getSeller, Items } from "../../utils/models"
import { scrollIntoView } from "../../utils/view"

const ItemsPerPage = 12

export default defineComponent({
  name: "ItemList",
  components: {
    ItemItem
  },
  props: {
    sellerID: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      itemIDs: [] as number[],
      allItemIDs: [] as number[],
      page: 0,
      maxPage: 0,
    }
  },
  methods: {
    updatePage(page: number, updateState = true) {
      if (page < 0 || page >= this.maxPage) {
        return
      }
      if (updateState && history.pushState) {
        history.pushState(history.state, document.title, `?page=${ page + 1 }`)
      }
      this.page = page
      this.itemIDs = this.allItemIDs.slice(
        page * ItemsPerPage,
        (page + 1) * ItemsPerPage
      )
      if (updateState) {
        scrollIntoView("item-list")
      }
    },
    onPopState() {
      const params = new URL(location.href).searchParams
      const queryPage = params.get("page")
      let page = 0
      if (queryPage !== null) {
        page = parseInt(queryPage)
        if (isNaN(page) || page < 1 || page > this.maxPage) {
          page = 1
        }
        page -= 1
      }
      this.updatePage(page, false)
    }
  },
  async mounted() {
    const seller = this.sellerID < 0 ? null : await getSeller(this.sellerID)
    this.allItemIDs = (seller == null ? Object.values(
      await getItems()
    ).map((x) => x.item_id) : seller.items).sort((a, b) => a - b)
    this.maxPage = Math.ceil(this.allItemIDs.length / ItemsPerPage)
    this.onPopState()
  }
})
</script>

<style scoped>
.item-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.pages {
  width: 100%;
  max-width: 605px;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  margin: 16px auto auto;
}
</style>