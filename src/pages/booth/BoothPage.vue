<template>
  <BoothPageBase type="booth" :page="page" :max-page="maxPage" :update-page="updatePage">
    <div v-if="booth === null" class="booth-null">
      无此摊位。
    </div>
    <div v-else class="booth-page">
      <div class="booth-info">
        <ImageView class="booth-image" :src="booth.circle_image" />
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
      <ItemList :update-states="updateStates" :sellerID="booth.id" />
    </div>
  </BoothPageBase>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import BoothPageBase from "./BoothPageBase.vue"
import ItemCard from "../../components/ItemCard.vue"
import ItemList from "./ItemList.vue"

import { getSeller, Seller } from "../../utils/models"
import { getQueryPage, setTitle } from "../../utils/view"
import ImageView from "../../components/ImageView.vue"

export default defineComponent({
  name: "BoothPage",
  components: {
    ImageView,
    BoothPageBase,
    ItemCard,
    ItemList
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
      booth: null as Seller | null,
      page: 0,
      maxPage: 0,
      updatePageState: undefined as undefined | ((page: number) => void)
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
  width: 100%;
}

.items-header {
  font-weight: bold;
  font-size: 2.5rem;
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
  margin: 0 40px 32px;
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