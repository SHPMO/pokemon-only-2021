<template>
  <HomePageBase name="booths" :title="{en: 'booths', zh:'现场摊位'}">
    <div class="action-links">
      <router-link to="/booths">摊位一览</router-link>
    </div>
    <div v-if="booth === null" class="booth-null">
      无此摊位。
    </div>
    <div v-else class="booth-page">
      <div class="booth-info">
        <div
            class="booth-image"
            :style="{backgroundImage: `url(${booth.circle_image})`}"
        />
        <div class="booth-info-right">
          <ItemCard
              :number="booth.seller_id ? booth.seller_id : '--'"
              name="Booth"
              :theme="booth.seller_id.startsWith('A') ? 'red' : 'blue'"
          >
            {{ booth.circle_name }}
          </ItemCard>
          <div class="booth-description">
            {{ booth.circle_description }}
          </div>
        </div>
      </div>
      <div class="items-header">商品列表</div>
      <ItemList :sellerID="booth.id" />
    </div>
  </HomePageBase>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import HomePageBase from "../../components/HomePageBase.vue"
import ItemCard from "../../components/ItemCard.vue"
import ItemList from "./ItemList.vue"

import { getSeller, Seller } from "../../utils/models"
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
      booth: null as Seller | null
    }
  },
  async mounted() {
    const id = parseInt(this.$route.params.id as string)
    this.booth = await getSeller(id)
    if (this.booth != null) {
      setTitle(`${ this.booth.circle_name } - 现场摊位`)
    }
  }
})
</script>

<style scoped>
.booth-page {
  width: 90%;
  max-width: 1200px;
}

.items-header {
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}

.booth-info {
  display: flex;
  margin: 16px auto auto;
  justify-content: center;
  flex-wrap: wrap;
}

.booth-image {
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

.booth-info-right {
  margin-bottom: 32px;
}

.booth-info-right > .item-card {
  max-width: 400px;
  align-items: center;
}

.booth-description {

}

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

  .booth-image {
    width: 300px;
    height: 300px;
  }
}
</style>