<template>
  <HomePageBase name="booths" :title="{en: 'booths', zh:'现场摊位'}">
    <div class="action-links">
      <div>
        <router-link to="/booths">摊位一览</router-link>
        <router-link to="/items">商品一览</router-link>
      </div>
      <div>
        <a class="register" href="https://www.getdaze.org/dashboard/register/signupin/" target="_blank">申请入口</a>
      </div>
    </div>
    <div class="booth-list">
      <router-link
          v-if="booths?.length > 0"
          v-for="(booth, i) in booths"
          class="booth-item"
          :to="`/booths/${booth.id}`"
      >
        <ItemCard
            :number="booth.seller_id ? booth.seller_id : '--'"
            name="Booth"
            :theme="getCardColor(booth, i)"
        >
          {{ booth.circle_name }}
        </ItemCard>
        <div
            class="booth-image"
            :style="{backgroundImage: `url(${booth.circle_image})`}"
        />
      </router-link>
      <div class="booth-empty" v-else>暂无摊位。</div>
    </div>
    <div v-if="!inHome && booths?.length > 0" class="pages">
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
  </HomePageBase>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import HomePageBase from "../../components/HomePageBase.vue"
import ItemCard from "../../components/ItemCard.vue"
import { getSellers, Seller } from "../../utils/models"
import { shuffle } from "../../utils/math"
import { inHome as isInHome, scrollIntoView } from "../../utils/view"

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
    updatePage(page: number, updateState = true) {
      if (page < 0 || page >= this.maxPage) {
        return
      }
      if (updateState && history.pushState) {
        history.pushState(history.state, document.title, `?page=${ page + 1 }`)
      }
      this.page = page
      this.booths = this.allBooths.slice(
        page * ItemsPerPage,
        (page + 1) * ItemsPerPage
      )
      if (updateState) {
        scrollIntoView()
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
      window.addEventListener("popstate", this.onPopState)
      this.allBooths = sortSellers(allBooths)
      this.maxPage = Math.ceil(allBooths.length / ItemsPerPage)
      this.onPopState()
    }
  },
  unmounted() {
    if (!this.inHome) {
      window.removeEventListener("popstate", this.onPopState)
    }
  }
})
</script>

<style scoped>
.booth-list {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  min-height: 248px;
  width: 1200px;
  margin-bottom: -48px;
}

.booth-empty {
  margin: 16px auto auto;
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
  background-color: #cbcbcb;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.pages, .action-links {
  width: 100%;
  max-width: 605px;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  margin-top: 16px;
}

.action-links > div:nth-child(1) > a {
  margin-right: 20px;
}

.register {
  color: #d31751;
}

.disabled {
  color: #707070;
  cursor: default;
}

@media only screen and (max-width: 1280px) {
  .pages, .action-links {
    font-size: 20px;
    max-width: 400px;
  }

  .booth-item {
    margin-top: 48px;
  }
}

@media only screen and (max-width: 1240px) {
  .booth-list {
    width: 1000px;
  }

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
  .booth-list {
    width: 744px;
  }

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
  .booth-list {
    width: 600px;
  }

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
  .booth-list, .pages, .action-links {
    width: 80%;
    min-width: 350px;
  }

  .booth-image {
    width: 160px;
    height: 160px;
  }

  .booth-item > .item-card {
    width: 200px;
  }

  .booth-item:nth-child(odd),
  .booth-item:nth-child(even) {
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
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

/*@media only screen and (max-width: 768px) {*/
/*  .booth-item > .item-card > div > .content {*/
/*    width: 150px;*/
/*  }*/
/*}*/
@media only screen and (max-width: 600px) {
  .booth-item > .item-card > div > .content {
    width: 250px;
  }
}
</style>
