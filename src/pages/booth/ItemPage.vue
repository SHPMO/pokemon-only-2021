<template>
  <BoothPageBase type="item">
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
        <div class="item-from">
          <span>来自：</span>
          <router-link :to="`/booths/${item.seller_id}`">
            {{ sellerName }}
          </router-link>
        </div>
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
      <div>
        <div
            class="item-image"
            v-for="image in item.item_pictures"
            :style="{backgroundImage: `url(${image})`}"
        />
      </div>
    </div>
  </BoothPageBase>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import HomePageBase from "../../components/HomePageBase.vue"
import ItemCard from "../../components/ItemCard.vue"
import ItemList from "./ItemList.vue"

import { getItem, getSeller, Item, Seller } from "../../utils/models"
import { setTitle } from "../../utils/view"
import BoothPageBase from "./BoothPageBase.vue"

export default defineComponent({
  name: "BoothPage",
  components: {
    BoothPageBase,
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

.item-info {
  width: 100%;
  display: flex;
  margin: 16px auto auto;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.5rem;
}

.item-images {
  width: 100%;
}

.item-images > h2 {
  font-size: 2.5rem;
}

.item-images > div {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

/*.item-info, .item-images {*/
/*  width: 90%;*/
/*  max-width: 1200px;*/
/*  display: flex;*/
/*  margin: 16px auto auto;*/
/*  justify-content: center;*/
/*  flex-wrap: wrap;*/
/*  font-size: 1.5rem;*/
/*}*/

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
  margin: 16px;
  width: 268px;
  height: 268px;
  background-color: #cbcbcb;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.item-details {
  width: 100%;
  max-width: 605px;
  font-size: 1.5rem;
  margin: 16px auto auto;
}

.action-links > a {
  margin-right: 20px;
}

@media only screen and (max-width: 1240px) {
  .item-image {
    width: 218px;
    height: 218px;
  }
}

@media only screen and (max-width: 1024px) {
  .item-image {
    width: 216px;
    height: 216px;
  }
}

@media only screen and (max-width: 768px) {
  .item-image {
    margin: 8px;
    width: 184px;
    height: 184px;
  }
}

@media only screen and (max-width: 600px) {
  .item-cover {
    width: 300px;
    height: 300px;
  }

  .item-image {
    width: 159px;
    height: 159px;
  }
}
</style>