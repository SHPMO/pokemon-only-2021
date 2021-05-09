<template>
  <BoothPageBase type="booths" :page="page" :max-page="maxPage" :update-page="updatePage">
    <div v-if="booths?.length > 0" class="booth-list">
      <div
          v-for="(booth, i) in booths"
          class="booth-item">
        <ItemCard
            :number="booth.seller_id ? booth.seller_id : '--'"
            name="Booth"
            :theme="getCardColor(booth, i)"
        >
          <router-link class="booth-name" :to="`/booths/${booth.id}`">
            {{ booth.circle_name }}
          </router-link>
        </ItemCard>
        <router-link :to="`/booths/${booth.id}`">
          <ImageView class="booth-image" :src="booth.circle_image" disabled />
        </router-link>
      </div>
    </div>
    <div class="booth-empty" v-else>暂无摊位。</div>
  </BoothPageBase>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import HomePageBase from "../../components/HomePageBase.vue"
import ItemCard from "../../components/ItemCard.vue"
import { getSellers, Seller } from "../../utils/models"
import { shuffle } from "../../utils/math"
import { getQueryPage, inHome as isInHome, scrollIntoView } from "../../utils/view"
import BoothPageBase from "./BoothPageBase.vue"
import ImageView from "../../components/ImageView.vue"

const ItemsPerPage = 10

const sortSellers = (sellers: Seller[]): Seller[] => {
  sellers.sort((a, b) => {
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
    return aid.localeCompare(bid)
  })
  const sorts: [ Seller[], Seller[], Seller[] ] = [ [], [], [] ]
  for (const x of sellers) {
    sorts[x.seller_id.startsWith("A") ?
      0 : x.seller_id.startsWith("B") ?
        1 : 2].push(x)
  }
  let ii = [ 0, 0, 0 ]
  let c = sorts.findIndex((x) => x.length > 0)
  return sellers.map(() => {
    const x = sorts[c][ii[c]++]
    if (c === 0) {
      c = ii[1] < sorts[1].length ? 1 : ii[0] < sorts[0].length ? 0 : 2
    } else if (c === 1) {
      c = ii[0] < sorts[0].length ? 0 : ii[1] < sorts[1].length ? 1 : 2
    }
    return x
  })
}

export default defineComponent({
  name: "Booths",
  components: {
    ImageView,
    BoothPageBase,
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
      public: false,
      allBooths: [] as Seller[]
    }
  },
  methods: {
    updatePage(page: number) {
      this.page = page
      this.booths = this.allBooths.slice(
        (page - 1) * ItemsPerPage,
        page * ItemsPerPage
      )
    },
    getCardColor(booth: Seller, i: number) {
      return booth.seller_id.startsWith("A")
        ? "red" : booth.seller_id.startsWith("B") ?
          "blue" : i % 2 === 0 ? "red" : "blue"
    }
  },
  async mounted() {
    const sellers = await getSellers()
    const allBooths = Array.from(Object.values(sellers))
    if (this.inHome) {
      this.allBooths = shuffle(allBooths)
      this.booths = allBooths.slice(0, 4)
    } else {
      this.allBooths = sortSellers(allBooths)
      this.maxPage = Math.ceil(allBooths.length / ItemsPerPage)
      const page = getQueryPage(this.$route, this.maxPage)
      this.updatePage(page)
      scrollIntoView()
    }
  },
})
</script>

<style scoped>

.booth-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.booth-empty {
  margin: 80px auto auto;
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

.booth-item > .item-card {
  width: 200px;
  flex-direction: row;
}

.booth-item:nth-child(odd) > .item-card {
  margin-left: 40px;
  margin-right: -50px;
}

.booth-item:nth-child(even) > .item-card {
  margin-left: 0;
  margin-right: -10px;
}

.booth-image {
  display: flex;
  width: 360px;
  height: 360px;
}

.booth-name {
  color: #020002;
}

@media only screen and (max-width: 1280px) {
  .booth-item {
    margin-top: 48px;
  }
}

@media only screen and (max-width: 1240px) {
  .booth-image {
    width: 280px;
    height: 280px;
  }

  .booth-item:nth-child(odd) > .item-card {
    margin-left: 20px;
  }

  .booth-item:nth-child(even) > .item-card {
    margin-right: -30px;
  }
}

@media only screen and (max-width: 1024px) {
  .booth-image {
    width: 180px;
    height: 180px;
  }

  .booth-item > .item-card {
    width: 160px;
  }

  .booth-item:nth-child(odd) > .item-card {
    margin-left: 16px;
    margin-right: -40px;
  }

  .booth-item:nth-child(even) > .item-card {
    margin-right: 16px;
  }
}

@media only screen and (max-width: 768px) {
  .booth-image {
    width: 128px;
    height: 128px;
  }

  .booth-item:nth-child(odd) > .item-card {
    margin-left: 12px;
  }

  .booth-item:nth-child(even) > .item-card {
    margin-right: -4px;
  }
}

@media only screen and (max-width: 600px) {
  .booth-image {
    width: 160px;
    height: 160px;
  }

  .booth-item > .item-card {
    width: 200px;
  }

  .booth-item:nth-child(odd),
  .booth-item:nth-child(even) {
    flex-direction: row;
    margin: 12px auto 12px;
  }

  .booth-item:nth-child(odd) > .item-card,
  .booth-item:nth-child(even) > .item-card {
    margin-left: 0;
    margin-right: 12px;
  }
}
</style>

<style>
.booth-item > .item-card > div > .content {
  height: unset;
  width: 250px;
  white-space: unset;
}

@media only screen and (max-width: 1024px) {
  .booth-item > .item-card > div > .content {
    width: 200px;
  }
}

@media only screen and (max-width: 600px) {
  .booth-item > .item-card > div > .content {
    width: 250px;
  }
}
</style>
