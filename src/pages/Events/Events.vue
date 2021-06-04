<template>
  <HomePageBase class="page-events" name="events"
                :title="{en: 'events', zh:'活动安排'}">
    <div class="event-list">
      <div v-if="events?.length > 0" v-for="(event, index) in events" class="event-item">
        <ItemCard
            :number="(index + 1).toString(10).padStart(2, '0')"
            name="Event"
            :theme="index % 2 === 0 ? 'red' : 'blue'"
            :help-text="event.helpText"
            :href="event.href"
            :new-tab="false"
            :no-referrer="false"
            :time="event.time"
            :time-in-middle="true"
        >
          {{ event.name }}
        </ItemCard>
        <div class="event-description" v-html="event.description" />
      </div>
      <div class="event-empty" v-else>待更新。</div>
    </div>
  </HomePageBase>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import HomePageBase from "../../components/HomePageBase.vue"
import ItemCard from "../../components/ItemCard.vue"
import { router } from "../../router"
import { Router } from "vue-router"

interface PMOEvent {
  name: string
  description: string
  href?: string
  helpText?: string
  time?: string
}

const getEvents = (router: Router): PMOEvent[] => [
  {
    name: "不在露营也可以做的事！",
    time: "09:31 - 16:00",
    description: `
<p>训练家收到门票时，会同时获得一份随赠的“咖喱素材包”（主食材*1+树果*1）。
<br/>
通过积极参与各类现场活动可以得到更多树果素材，用于在官摊换取奖品一份。</p>
<ul><li>· 树果的获取方式：
<ol>
<li><span class="list-marker red">①</span> 参加礼物交换（1枚）</li>
<li><span class="list-marker red">②</span> 提供大礼包奖品（2枚）</li>
<li><span class="list-marker red">③</span> 参加舞台游戏（2枚）</li>
<li><span class="list-marker red">④</span> 寻找特定NPC（每位NPC1枚）</li>
<li><span class="list-marker red">⑤</span> 在摊位上消费（视不同摊位而定）</li>
</ol>
</li>
<li>· 特定NPC将在活动前一天由官方微博公布</li>
<li>· 收集到的树果数量不同，兑换奖品也不同</li>
<li>· 奖品数量有限，兑完即止</li>
</ul>
`
  },
  {
    name: "Oh！传递吧！My Passion！",
    time: "09:31 - 16:00",
    description: `
<p>想要将激情通过精美的礼物传递给其他人的训练家们，
<br/>
可以用自己的礼物换取 STAFF 和别人的礼物！</p>
<ul><li>· 参与方式：
<br />
将礼物交给特定摊位的 STAFF，便能通过抽奖的方式获得一份其他人的礼物。
*每张门票限参与一次
<br />
</li>
<br />
<li>· 注意事项：
<ol>
<li><span class="list-marker blue">①</span> 若送出的礼物是多个，请自行包装整合成一份交给 STAFF</li>
<li><span class="list-marker blue">②</span> 出于安全按考虑，送出的礼物不得为食物、护肤品或化妆品</li>
<li><span class="list-marker blue">③</span> 送出的礼物不得为盗版商品，但可以为自制的同人周边（该同人周边不得涉及抄袭官方）</li>
<li><span class="list-marker blue">④</span> 如果收到的礼物含有上述规则中禁止的内容，请不要食用或使用，请立即联系 STAFF，STAFF 将送出一份魔都 PMO 官方纪念品并处理后续事宜</li>
</ol>
</li>
</ul>
`
  },
  {
    name: "舞台活动",
    description: `
<p>舞台活动开始后会穿插各种舞台游戏，欢迎训练家们积极参与！
<br />
联机对战赛的最终决战赛也会在舞台表演环节中一决胜负！</p>
`
  },
  {
    name: "幸运抽奖",
    time: "09:31 - 14:00",
    description: `
<p>本届抽奖礼品一部分由机擎市竞技馆委员会提供，其余全部向广大训练家们征集；
<br />
训练家们可以在特定的staff处提交奖品并登记。
<br />
提供奖品的训练师可以获得纪念品贴纸一份！
</p>
<ul><li>· 注意事项：
<ol>
<li><span class="list-marker blue">①</span> 奖品提交可以以个人名义，也可以以社团或多人名义</li>
<li><span class="list-marker blue">②</span> 奖品征集的要求与礼物交换相同，若不符合限制，staff将不会接收并登记</li>
</ol>
</li></ul>
`
  },
  {
    name: "联机对战",
    href: router.resolve("/battle").href,
    description: `<p>详情请见<a href="${ router.resolve("/battle").href }">此页</a></p>`
  }
]

export default defineComponent({
  name: "Events",
  components: {
    HomePageBase,
    ItemCard
  },
  data() {
    return {
      events: getEvents(router)
    }
  }
})
</script>

<style scoped>
.page-events {
  background: #000000;
  color: #ffffff;
}

.event-list {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 605px;
}

.event-item:nth-child(even) {
  margin-left: auto;
  margin-right: auto;
}

.event-description {
  margin-top: 12px;
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;
}

@media only screen and (max-width: 1400px) {
  .event-list {
    width: 90%;
    min-width: 1080px;
  }
}

@media only screen and (max-width: 1280px) {
  .event-list {
    width: 90%;
    min-width: unset;
  }
}

@media only screen and (max-width: 768px) {
  .event-description {
    font-size: 16px;
    line-height: 22px;
    height: auto;
    overflow-y: unset;
  }
}
@media only screen and (max-width: 620px) {
  .event-item {
    width: 100%;
  }
}

</style>

<style>
.page-events > .title > h2,
.page-events > .title > .zeros {
  color: #ffffff;
}

.event-item > .item-card {
  width: 100%;
}

.event-item > .item-card > a {
  width: 100%;
}

.event-item > .item-card .time {
  background: #ffffff;
  color: #000000;
}

.event-item > .item-card .content {
  color: #ffffff;
}

.event-description a {
  color: #d31751;
}

.event-description ul {
  list-style-type: none;
  padding-inline-start: 0;
}

.event-description ol {
  list-style-type: none;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-inline-start: 0;
}

.list-marker {
  margin-right: 4px;
}
</style>