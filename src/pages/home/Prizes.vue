<template>
  <HomePageBase name="prizes" :title="{en: 'Prizes', zh:'活动奖品'}">
    <div class="prize-list">
      <div v-if="prizes?.length > 0" v-for="(prize, index) in prizes" class="prize-item">
        <ItemCard
            :number="(index + 1).toString(10).padStart(2, '0')"
            :name="prize.name ?? 'Prize'"
            :theme="index % 2 === 0 ? 'red' : 'blue'"
            :help-text="prize.helpText"
        >
          {{ prize.content }}
        </ItemCard>
        <ImageView class="prize-image" :src="prize.image" />
      </div>
      <div class="prize-empty" v-else>待更新。</div>
    </div>
  </HomePageBase>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import HomePageBase from "../../components/HomePageBase.vue"
import ItemCard from "../../components/ItemCard.vue"
import ImageView from "../../components/ImageView.vue"

// import image from "../../assets/header/logo.png"
const image = ""

interface Prize {
  name?: string
  content: string
  helpText: string
  image: string
}

const prizes: Prize[] = []
// [
//   {
//     content: "奖品1",
//     helpText: "说明文字1",
//     image
//   },
//   {
//     content: "奖品2",
//     helpText: "说明文字2",
//     image
//   }, {
//     content: "奖品3",
//     helpText: "说明文字3",
//     image
//   },
//   {
//     content: "奖品4",
//     helpText: "说明文字4",
//     image
//   }
// ]

export default defineComponent({
  name: "Prizes",
  components: {
    ImageView,
    HomePageBase,
    ItemCard
  },
  data() {
    return {
      prizes
    }
  }
})
</script>

<style scoped>
.prize-list {
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  /* 509 * 2 + 40 * 2 + 605 */
  width: 1703px;
}

.prize-empty {
  margin: auto;
  font-size: 2rem;
}

.prize-item {
  display: flex;
  margin-bottom: 64px;
}

.prize-item:nth-child(odd) {
  margin-left: 0;
  margin-right: auto;
  flex-direction: row-reverse;
}

.prize-item:nth-child(even) {
  margin-left: auto;
  margin-right: 0;
  flex-direction: row;
}

.prize-item:nth-child(odd) > .item-card {
  margin-left: 40px;
  margin-right: 0;
}

.prize-item:nth-child(even) > .item-card {
  margin-left: 0;
  margin-right: 40px;
}

.prize-image {
  display: flex;
  width: 509px;
  height: 318px;
}

@media only screen and (max-width: 1720px) {
  .prize-list {
    width: 90%;
    min-width: 1280px;
  }

  .prize-image {
    width: 424px;
    height: 265px;
  }
}

@media only screen and (max-width: 1280px) {
  .prize-list {
    width: 90%;
    min-width: unset;
  }

  .prize-image {
    width: 255px;
    height: 159px;
  }
}

@media only screen and (max-width: 1000px) {
  .prize-list {
    flex-direction: column;
    align-items: center;
  }

  .prize-item:nth-child(odd),
  .prize-item:nth-child(even) {
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
  }

  .prize-item:nth-child(odd) > .item-card,
  .prize-item:nth-child(even) > .item-card {
    margin-left: 0;
    margin-right: 40px;
  }
}

@media only screen and (max-width: 600px) {
  .prize-image {
    flex: 1 1 auto;
    width: 180px;
    height: 112px;
  }
}
</style>
<style>
.prize-item > .item-card > div {
  width: 100%;
}
</style>