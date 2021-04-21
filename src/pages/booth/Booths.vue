<template>
  <HomePageBase name="booths" :title="{en: 'booths', zh:'现场摊位'}">
    <div class="booth-list">
      <div v-if="booths?.length > 0" v-for="booth in booths" class="booth-item">
        <ItemCard
            :number="booth.seller_id ? booth.seller_id : '未定`'"
            name="Booth"
            :theme="booth.seller_id.startsWith('A') ? 'red' : 'blue'"
        >
          {{ booth.circle_name }}
        </ItemCard>
        <div class="booth-image" :style="{backgroundImage: `url(${booth.circle_image})`}" />
      </div>
      <div class="booth-empty" v-else>暂无摊位</div>
    </div>
    <div v-if="booths?.length > 0" class="actions">
      <div v-if="inHome" class="more">
        <router-link to="/booths">摊位一览</router-link>
        <router-link to="/items">商品一览</router-link>
      </div>
      <div v-else class="pages">
        <span class="page">{{ page }}</span> / <span class="page-max">{{ maxPage }}</span>
      </div>
    </div>
  </HomePageBase>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import HomePageBase from "../../components/HomePageBase.vue"
import ItemCard from "../../components/ItemCard.vue"
import { getSellers, Seller } from "../../utils/models"
import { shuffle } from "../../utils/math"
import { inHome as isInHome } from "../../utils/view"

const perPage = 4  // 8
let booths: Seller[] = []
export default defineComponent({
  name: "Booths",
  components: {
    HomePageBase,
    ItemCard
  },
  data() {
    const inHome = isInHome()
    return {
      inHome,
      page: 0,
      maxPage: 0,
      booths: [] as Seller[],
      public: false
    }
  },
  methods: {
    updatePage(page: number) {
      this.page = page
      this.booths = booths.slice(
        page * perPage,
        (page + 1) * perPage
      )
    }
  },
  async mounted() {
    return
    const sellers = await getSellers()
    booths = Array.from(Object.values(sellers))
    if (this.inHome) {
      shuffle(booths)
      this.booths = booths.slice(0, 4)
    } else {
      booths.sort((a, b) => {
        const aid = a.seller_id
        const bid = b.seller_id
        if (aid.length === 0) {
          if (bid.length === 0) {
            return a.id - b.id
          }
          return 1
        } else if (bid.length === 0) {
          return -1
        }
        const cmp = aid.substr(1).localeCompare(bid.substr(1))
        return cmp === 0 ? aid[0].localeCompare(bid[0]) : cmp
      })
      const params = new URL(location.href).searchParams
      const queryPage = params.get("page")
      if (queryPage !== null) {
        // TODO
      }
      this.maxPage = Math.ceil(booths.length / perPage)
      this.updatePage(0)
    }
  }
})
</script>

<style scoped>
/* Similar to Prizes.vue */
.booth-list {
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  width: 1703px;
}

.booth-empty {
  margin: auto;
  font-size: 2rem;
}

.booth-item {
  display: flex;
  margin-bottom: 64px;
}

.booth-item:nth-child(odd) {
  margin-left: 0;
  margin-right: auto;
  flex-direction: row-reverse;
}

.booth-item:nth-child(even) {
  margin-left: auto;
  margin-right: 0;
  flex-direction: row;
}

.booth-item:nth-child(odd) > .item-card {
  margin-left: 40px;
  margin-right: 0;
}

.booth-item:nth-child(even) > .item-card {
  margin-left: 0;
  margin-right: 40px;
}

.booth-image {
  display: flex;
  width: 509px;
  height: 509px;
  background-color: #cbcbcb;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
