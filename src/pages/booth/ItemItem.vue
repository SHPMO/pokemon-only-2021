<template>
  <div v-if="item !== null" class="item-item">
    <router-link :to="`/items/${item.item_id}`">
      <ImageView class="item-image" :src="item.cover_image" disabled />
    </router-link>

    <div class="item-info">
      <router-link class="item-name" :to="`/items/${item.item_id}`">{{ item.name }}</router-link>
      <div class="item-price">价格：{{ item.price }} 元</div>
      <div class="item-circle">出品社团：{{ item.circle }}</div>
      <div class="item-intro">简介：{{ item.introduction.slice(0, 20) }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { getItem, Item } from "../../utils/models"
import ImageView from "../../components/ImageView.vue"

export default defineComponent({
  name: "ItemItem",
  components: { ImageView },
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
  margin: 16px;
  width: 368px;
  height: 215px;
  overflow-y: hidden;
}

.item-image {
  display: flex;
  width: 215px;
  height: 215px;
}

.item-name {
  font-weight: bold;
  font-size: 1.5rem;
}

.item-info {
  margin-left: 16px;
  width: 137px;
}

@media only screen and (max-width: 1240px) {
  .item-item {
    width: 468px;
  }
}

@media only screen and (max-width: 1024px) {
  .item-item {
    width: 340px;
  }
}

@media only screen and (max-width: 768px) {
  .item-info {
    margin-left: 8px;
    width: 148px;
  }

  .item-image {
    width: 128px;
    height: 128px;
  }

  .item-item {
    margin: 8px;
    width: 284px;
    height: 128px;
  }
}

@media only screen and (max-width: 600px) {
  .item-info {
    width: 134px;
  }

  .item-image {
    width: 184px;
    height: 184px;
  }

  .item-item {
    margin: 12px auto;
    width: 326px;
    height: 184px;
  }
}
</style>