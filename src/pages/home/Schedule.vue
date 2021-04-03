<template>
  <HomePageBase name="schedule" :title="{en: 'Schedule', zh: '行程安排'}">
    <ul class="schedule-list">
      <li class="schedule-item">
        <ItemCard number="01" name="Admission" time="08:00">
          摊主开始入场
        </ItemCard>
      </li>
      <li class="schedule-item">
        <ItemCard
            number="02" name="Admission" time="09:31" theme="red"
            helpText="10:30 之前不可离开会场">
          游客开始入场
        </ItemCard>
      </li>
      <li class="schedule-item">
        <ItemCard number="03" name="Battle" time="10:00">
          对战活动开始
        </ItemCard>
      </li>
      <li class="schedule-item">
        <ItemCard number="04" name="Stage" time="11:30" theme="red">
          舞台活动开始
        </ItemCard>
      </li>
      <li class="schedule-item">
        <ItemCard number="05" name="Raffle" time="15:30">
          抽奖活动
        </ItemCard>
      </li>
      <li class="schedule-item">
        <ItemCard number="06" name="Finish" time="16:30" theme="red">
          活动结束
        </ItemCard>
      </li>
    </ul>
  </HomePageBase>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import HomePageBase from "../../components/HomePageBase.vue"
import ItemCard from "../../components/ItemCard.vue"

export default defineComponent({
  name: "Schedule",
  components: {
    HomePageBase,
    ItemCard
  },
})
</script>

<style scoped>
.schedule-list {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: auto;
  margin-top: 0;
  width: 100%;
  max-width: 605px;
}

.schedule-item {
  flex: 0 1 auto;
  display: flex;
  user-select: none;
}

.schedule-item:nth-child(odd) {
  margin-bottom: 96px;
  flex-direction: row-reverse;
}

.schedule-item:nth-child(even) {
  margin-top: 96px;
  flex-direction: row;
}

@media only screen and (max-width: 600px) {
  .schedule-list {
    width: 80%;
    flex-direction: column;
  }

  .schedule-item {
    margin-left: auto;
    margin-right: auto;
  }

  .schedule-item:nth-child(odd), .schedule-item:nth-child(even) {
    flex-direction: row;
    margin-top: 36px;
    margin-bottom: 0;
  }

  .schedule-item > div {
    margin: auto;
  }
}


</style>
