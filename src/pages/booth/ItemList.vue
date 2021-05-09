<template>
  <div v-if="itemIDs.length === 0" class="item-list-empty">暂无商品。</div>
  <div v-else class="item-list">
    <ItemItem :id="itemID" v-for="itemID in itemIDs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

import BoothPageBase from "./BoothPageBase.vue"
import ItemItem from "./ItemItem.vue"

import { getItems, getSeller, Items } from "../../utils/models"

const ItemsPerPage = 12

export default defineComponent({
  name: "ItemList",
  components: {
    ItemItem,
    BoothPageBase
  },
  props: {
    sellerID: {
      type: Number,
      default: -1
    },
    updateStates: {
      type: Function as PropType<(
        maxPage: number,
        updatePage: (page: number) => void
      ) => void>,
      default: () => void 0
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
    updatePage(page: number) {
      this.page = page
      this.itemIDs = this.allItemIDs.slice(
        (page - 1) * ItemsPerPage,
        page * ItemsPerPage
      )
    }
  },
  async mounted() {
    const seller = this.sellerID < 0 ? null : await getSeller(this.sellerID)
    this.allItemIDs = (seller == null ? Object.values(
      await getItems()
    ).map((x) => x.item_id) : seller.items).sort((a, b) => a - b)
    this.maxPage = Math.ceil(this.allItemIDs.length / ItemsPerPage)
    this.updateStates(this.maxPage, this.updatePage)
  }
})
</script>

<style scoped>
.item-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.item-list-empty {
  margin: auto;
  font-size: 2rem;
}
</style>