<template>
  <div v-if="item !== null" class="item-item">
    <router-link
        class="item-image"
        :style="{backgroundImage:`url(${item.cover_image})`}"
        :to="`/items/${item.item_id}`" />
    <div class="item-info">
      <router-link class="item-name" :to="`/items/${item.item_id}`">{{ item.name }}</router-link>
      <div class="item-price">价格：{{ item.price }} 元</div>
      <div class="item-circle">出品社团：{{ item.circle }}</div>
      <div class="item-intro">简介：{{ item.introduction }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { getItem, Item } from "../../utils/models"

export default defineComponent({
  name: "ItemItem",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      item: null as Item | null
    }
  },
  methods: {
    async updateItem(id: number) {
      this.item = await getItem(id)
    }
  },
  async mounted() {
    this.$watch(() => this.id, async (v: number, pv: number) => {
      await this.updateItem(v)
    })
    await this.updateItem(this.id)
  }
})
</script>

<style scoped>
.item-item {
  display: flex;
  flex-direction: row;
  margin: 32px auto auto;
}

.item-image {
  display: flex;
  width: 300px;
  height: 300px;
  background-color: #cbcbcb;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.item-name {
  font-weight: bold;
  font-size: 1.5rem;
}

.item-info {
  margin-left: 40px;
}

@media only screen and (max-width: 600px) {
  .item-image {
    width: 180px;
    height: 180px;
  }
}
</style>