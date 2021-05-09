<template>
  <HomePageBase
      :name="isSeller ? 'booths' : 'items'"
      :title="{
          en: isSeller ? 'booths' : 'goods',
          zh: isSeller ? '现场摊位' : '商品一览'
      }">
    <div class="action-links">
      <div>
        <router-link to="/booths">摊位一览</router-link>
        <router-link to="/items">商品一览</router-link>
      </div>
      <div v-if="type === 'booths'">
        <a class="register"
           href="https://www.getdaze.org/dashboard/register/signupin/"
           target="_blank">
          申请入口
        </a>
      </div>
    </div>
    <div class="booth-container">
      <slot />
    </div>
    <div v-if="page > 0" class="pages">
      <a
          :class="{disabled: page <= 1}"
          :href="page <= 1 ? undefined : `?page=${page-1}`"
          @click.prevent="updatePageState(page - 1)"
      >上一页</a>
      <div>
        <span class="page">{{ page }}</span> / <span class="page-max">{{ maxPage }}</span>
      </div>
      <a
          :class="{disabled: page >= maxPage}"
          :href="page >= maxPage ? undefined : `?page=${page + 1}`"
          @click.prevent="updatePageState(page + 1)"
      >下一页</a>
    </div>
  </HomePageBase>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

import HomePageBase from "../../components/HomePageBase.vue"
import { getQueryPage, scrollIntoView } from "../../utils/view"

const PageTypes = [ "booths", "booth", "items", "item" ] as const
type PageType = typeof PageTypes[number]

export default defineComponent({
  name: "BoothPageBase",
  components: {
    HomePageBase
  },
  props: {
    updatePage: {
      type: Function as PropType<(page: number) => void>,
      default: () => void 0
    },
    page: {
      type: Number,
      default: 0
    },
    maxPage: {
      type: Number,
      default: 0
    },
    type: {
      type: String as PropType<PageType>,
      default: "booths"
    }
  },
  methods: {
    updatePageState(page: number, updateState = true) {
      if (page < 1 || page > this.maxPage) {
        return
      }
      if (updateState && history.pushState) {
        history.pushState(history.state, document.title, `?page=${ page }`)
      }
      this.updatePage(page)
      if (updateState) {
        scrollIntoView(this.isSeller ? "booths" : "items")
      }
    },
    onPopState() {
      const page = getQueryPage(this.$route, this.maxPage)
      this.updatePageState(page, false)
    },
  },
  data() {
    const type = PageTypes.includes(this.type) ? this.type : "booths"
    return {
      isSeller: type === "booths" || type === "booth"
    }
  },
  mounted() {
    window.addEventListener("popstate", this.onPopState)
  },
  unmounted() {
    window.removeEventListener("popstate", this.onPopState)
  }
})
</script>

<style scoped>
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

.register:hover {
  color: #3999d6;
}

.disabled {
  color: #707070;
  cursor: default;
}

.booth-container {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 248px;
  width: 1200px;
}

@media only screen and (max-width: 1240px) {
  .booth-container {
    width: 1000px;
  }
}

@media only screen and (max-width: 1024px) {
  .booth-container {
    width: 744px;
  }
}


@media only screen and (max-width: 768px) {
  .booth-container {
    width: 600px;
  }
}

@media only screen and (max-width: 600px) {
  .booth-container, .pages, .action-links {
    width: 80%;
    min-width: 350px;
  }
}
</style>
