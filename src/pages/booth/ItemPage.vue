<template>
  <HomePageBase name="item" :title="{en: 'item', zh:'商品信息'}">
    <div class="action-links">
      <router-link to="/booths">摊位一览</router-link>
      <router-link to="/items">商品一览</router-link>
    </div>
    <div v-if="item === null" class="item-null">
      无此商品。
    </div>
    <div v-if="item !== null" class="item-info">
      <div
          class="item-cover"
          :style="{backgroundImage: `url(${item.cover_image})`}"
      />
      <div class="item-info-right">
        <div class="item-name">{{ item.name }}</div>
        <div class="item-type">种类：{{ item.item_type }}</div>
        <div class="item-content">内容：{{ item.content }}</div>
        <div class="item-price">价格：{{ item.price }} 元</div>
        <div class="item-url">链接：{{ item.url }}</div>
        <router-link :to="`/booths/${item.seller_id}`" class="item-from">
          来自：{{ sellerName }}
        </router-link>
      </div>
    </div>
    <div v-if="item !== null" class="item-details">
      <div class="item-circle">出品社团：{{ item.circle }}</div>
      <div class="item-intro">简介：<br>{{ item.introduction }}</div>
      <div class="item-authors">作者名单：<br>{{ item.authors }}</div>
      <div class="item-forto">面向人群：{{ item.forto }}</div>
      <div class="item-restricted">是否限制级：{{ item.is_restricted }}</div>
      <div class="item-started">是否首发：{{ item.is_started_with ? "是" : "否" }}</div>
    </div>
    <div v-if="item !== null" class="item-images">
      <h2>相关图像</h2>
      <div
          class="item-image"
          v-for="image in item.item_pictures"
          :style="{backgroundImage: `url(${image})`}"
      />
    </div>
  </HomePageBase>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import HomePageBase from "../../components/HomePageBase.vue"
import ItemCard from "../../components/ItemCard.vue"
import ItemList from "./ItemList.vue"

import { getItem, getSeller, Item, Seller } from "../../utils/models"
import { setTitle } from "../../utils/view"

export default defineComponent({
  name: "BoothPage",
  components: {
    HomePageBase,
    ItemCard,
    ItemList
  },
  data() {
    return {
      item: null as Item | null,
      sellerName: ""
    }
  },
  methods: {
    defaultImage(): string {
      return this.item === null ? "" : this.item.item_pictures[0]
    }
  },
  async mounted() {
    const id = parseInt(this.$route.params.id as string)
    this.item = await getItem(id)
    if (this.item != null) {
      setTitle(`${ this.item.name } - 商品信息`)
      const seller = await getSeller(this.item.seller_id)
      this.sellerName = seller === null ? "" : seller.circle_name
    }
  }
})
</script>

<style scoped>
.item-name {
  font-weight: bold;
  font-size: 2rem;
}

.item-info, .item-images {
  width: 90%;
  max-width: 1200px;
  display: flex;
  margin: 16px auto auto;
  justify-content: center;
  flex-wrap: wrap;
}

.item-cover {
  display: flex;
  width: 360px;
  height: 360px;
  background-color: #cbcbcb;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 40px;
  margin-bottom: 32px;
}

.item-info-right {
  margin-bottom: 32px;
}

.item-info-right > .item-card {
  max-width: 400px;
  align-items: center;
}

.item-image {
  width: 300px;
  height: 300px;
}

.action-links, .item-details {
  width: 100%;
  max-width: 605px;
  font-size: 24px;
  margin-top: 16px;
}

.action-links > a {
  margin-right: 20px;
}

@media only screen and (max-width: 1280px) {
  .action-links, .item-details {
    font-size: 20px;
    max-width: 400px;
  }
}

@media only screen and (max-width: 600px) {
  .action-links, .item-details {
    width: 80%;
    min-width: 350px;
  }

  .item-cover {
    width: 300px;
    height: 300px;
  }

  .item-image {
    width: 240px;
    height: 240px;
  }
}
</style>