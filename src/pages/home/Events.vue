<template>
  <HomePageBase :class="{'page-events-home': inHome}" class="page-events" name="events" :title="{en: 'events', zh:'活动安排'}">
    <div class="event-list">
      <div v-if="events?.length > 0" v-for="(event, index) in events" class="event-item">
        <ItemCard
            :number="(index + 1).toString(10).padStart(2, '0')"
            :name="event.name ?? 'Event'"
            :theme="index % 2 === 0 ? 'red' : 'blue'"
            :help-text="event.helpText"
            :time="event.time"
        />
        <div class="event-description">
          {{ event.description }}
        </div>
      </div>
      <div class="event-empty" v-else>待更新。</div>
    </div>
  </HomePageBase>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import HomePageBase from "../../components/HomePageBase.vue"
import ItemCard from "../../components/ItemCard.vue"
import { inHome } from "../../utils/view"

interface PMOEvent {
  name?: string
  description: string
  helpText: string
  time: string
}

const events: PMOEvent[] = []

export default defineComponent({
  name: "Events",
  components: {
    HomePageBase,
    ItemCard
  },
  data() {
    return {
      events,
      inHome: inHome()
    }
  }
})
</script>

<style scoped>
.page-events-home {
  background: #000000;
  color: #ffffff;
}

.page-events {
}

.event-list {
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  width: 1356px;
}

.event-empty {
  margin: auto;
  font-size: 2rem;
}

.event-item {
  display: flex;
  margin-bottom: 64px;
  flex-direction: column;
  /* (1356 - 605) / 2 + 190 */
  width: 565px;
}

.event-item:nth-child(odd) {
  margin-left: 0;
  margin-right: auto;
  align-items: flex-end;
}

.event-item:nth-child(even) {
  margin-left: auto;
  margin-right: 0;
  align-items: flex-start;
}

.event-item > .item-card {
  width: 190px;
}

.event-description {
  margin-top: 12px;
  font-size: 20px;
  line-height: 30px;
  height: 90px;
  overflow-y: hidden;
}

.event-item:nth-child(odd) > .event-description {
  text-align: right;
}

@media only screen and (max-width: 1400px) {
  .event-list {
    width: 90%;
    min-width: 1080px;
  }

  .event-item {
    width: 45%;
  }
}

@media only screen and (max-width: 1280px) {
  .event-list {
    width: 90%;
    min-width: unset;
  }
}

@media only screen and (max-width: 1000px) {
  .event-list {
    width: 400px;
    flex-direction: column;
    align-items: center;
  }

  .event-item {
    width: 100%;
  }

  .event-item:nth-child(odd),
  .event-item:nth-child(even) {
    margin-left: auto;
    margin-right: auto;
    align-items: flex-start;
    /*align-items: flex-end;*/
  }

  .event-item:nth-child(odd) > .event-description {
    text-align: left;
  }

  .event-item > .item-card {
    width: 100%;
  }
}

@media only screen and (max-width: 768px) {
  .event-list {
    width: 60%;
  }

  .event-description {
    font-size: 16px;
    line-height: 22px;
    height: auto;
    overflow-y: unset;
  }

}

@media only screen and (max-width: 600px) {
  .event-list {
    width: 80%;
  }
}
</style>

<style>
.page-events-home > .title > h2,
.page-events-home > .title > .zeros {
  color: #ffffff;
}

.event-item > .item-card > div {
  width: 100%;
}

.event-item > .item-card .time {
  background: #ffffff;
  color: #000000;
}

.event-item > .item-card .content {
  height: 16px;
}
</style>