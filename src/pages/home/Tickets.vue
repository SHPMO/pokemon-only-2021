<template>
  <HomePageBase name="tickets" :title="{en: 'tickets', zh:'票务信息'}">
    <!-- TODO: Update time and ticket images -->
    <div class="sale-time hide">
      <ItemCard number="00.00" name="00.00">
        售票开始时间
      </ItemCard>
      <ItemCard number="00.00" name="00.00" theme="red">
        售票结束时间
      </ItemCard>
    </div>
    <div class="ticket-list">
      <div class="ticket-item ticket-normal">
        <div class="ticket-item-main">
          <div class="ticket-image">
            <img src="../../assets/tickets/ticket-sample.png" alt="" />
            <div class="ticket-content">含入场票*1 + 入场特典*1</div>
          </div>
          <div class="ticket-info">
            <div class="ticket-cards">
              <ItemCard number="50" name="RMB" help-text="预售价格">普通入场票</ItemCard>
              <ItemCard number="70" name="RMB" help-text="现场价格">普通入场票</ItemCard>
            </div>
            <div class="ticket-link">
              <a href="." target="_blank">
                <img src="../../assets/tickets/cart.png" alt="" />
                <span>点击购入</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="ticket-item ticket-stage">
        <div class="ticket-item-main">
          <div class="ticket-image">
            <img src="../../assets/tickets/ticket-sample.png" alt="" />
            <div class="ticket-content">含入场票*1 + 入场特典*1 + 舞台区座位整理券*1</div>
          </div>
          <div class="ticket-info">
            <div class="ticket-cards">
              <ItemCard number="50" name="RMB" help-text="仅网络贩售 / 每个 ID 最多可拍付 3 份">舞台区入场票</ItemCard>
            </div>
            <div class="ticket-link">
              <a href="." target="_blank">
                <img src="../../assets/tickets/cart.png" alt="" />
                <span>点击购入</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="ticket-item ticket-stage">
        <div class="ticket-item-main">
          <div class="ticket-image">
            <img src="../../assets/tickets/ticket-sample.png" alt="" />
            <div class="ticket-content">含入场票*1 + 提前入场资格 + VIP入场特典 + 舞台区前两排固定座位整理券*1</div>
          </div>
          <div class="ticket-info">
            <div class="ticket-cards">
              <ItemCard
                  number="120" name="RMB" theme="red"
                  help-text="仅网络贩售 / 限量 40 份 / 每个 ID 最多可拍付 2 份"
              >VIP 入场票
              </ItemCard>
            </div>
            <div class="ticket-link">
              <a href="." target="_blank">
                <img src="../../assets/tickets/cart.png" alt="" />
                <span>点击购入</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="ticket-item ticket-stage">
        <div class="ticket-item-main">
          <div class="ticket-image">
            <img src="../../assets/tickets/ticket-sample.png" alt="" />
            <div class="ticket-content">现场对战区比赛资格*1</div>
          </div>
          <div class="ticket-info">
            <div class="ticket-cards">
              <ItemCard
                  number="5" name="RMB"
                  help-text="单拍不发货 / 同笔订单内对战券数量多于门票数不发货"
              >VIP 入场票
              </ItemCard>
            </div>
            <div class="ticket-link">
              <a href="." target="_blank">
                <img src="../../assets/tickets/cart.png" alt="" />
                <span>点击购入</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="notes">
      <li>需要参加对战区比赛的游客，请在购买门票的同时，将“<span class="red">加购对战券</span>”加入购物车并一起支付。</li>
      <li>在收到票后，以《<span class="red">魔都 PMO2021 报名 + 昵称</span>》为邮件名，发送邮件到 <span class="red">nebby@getdaze.org</span>。
      </li>
      <li>邮件中需要包含：门票 ID 号 | 对战券 ID 号 | 门票 + 对战券照片 | 个人昵称 | 个人 QQ 号，以作为报名的验证和方便进行后期通知。</li>
      <li>另外有少量普通入场票的实体店寄卖<span class="gray">（不设置舞台区入场票和 VIP 入场票）</span></li>
    </ul>
    <div class="place">
      <ItemCard number="01" name="Metro" theme="red"
                time="上海市黄浦区浙江中路 229 号">
        地铁<span class="red">一号线</span>人民广场站<span><br v-if="width <= 768"></span>百米香榭 212 室 JE 卡牌
      </ItemCard>
    </div>
  </HomePageBase>
</template>

<script>
import HomePageBase from "../../components/HomePageBase.vue"
import ItemCard from "../../components/ItemCard.vue"

export default {
  name: "Tickets",
  components: {
    ItemCard, HomePageBase
  },
  data() {
    return { width: window.innerWidth }
  },
  methods: {
    onResize() {
      this.width = window.innerWidth
    }
  },
  created() {
    window.addEventListener("resize", this.onResize)
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize)
  }
}
</script>

<style scoped>
.sale-time {
  margin: 90px auto 0;
  width: 50%;
  max-width: 930px;
  min-width: 600px;
  display: flex;
  justify-content: space-between;
}

.ticket-list {
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  width: 1200px;
}

.ticket-item {
  width: 100%;
  margin-top: 32px;
}

.ticket-item:nth-child(1) {
  margin-top: 0;
}

.ticket-item-main {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.ticket-image {
  width: 672px;
}

.ticket-image > img {
  width: 100%;
  height: auto;
}

.ticket-info {
  margin-left: 88px;
  flex: 1 1 auto;
}

.ticket-cards {
  display: flex;
}

.ticket-link {
  margin-top: 20px;
  text-align: right;
  font-weight: bold;
}

.ticket-link > a {
  color: #020002;
}

.ticket-link > a > span {
  display: inline-block;
  transform: scale(0.8, 1);
  transform-origin: left;
  margin-right: -12px;
}

.ticket-cards > .item-card:nth-child(2) {
  flex-direction: row-reverse;
}

.ticket-content {
  font-family: "Noto Sans SC", sans-serif;
  font-size: 15px;
  color: #808080;
  font-weight: bold;
}

.notes {
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  width: 1200px;
  list-style: none;
  font-size: 15px;
  padding: 0;
}

.notes > li::before {
  display: inline-block;
  content: "■";
  transform: scale(0.4, 1);
  color: #d31751;
  padding-right: 6px;
}

.place {
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  /*width: 1200px;*/
  display: flex;
  flex-direction: column;
  align-items: center;
}

.place > .item-card {
  flex-direction: column;
  align-items: center;
}

@media only screen and (max-width: 1240px) {
  .ticket-list, .notes, .place {
    width: 672px;
  }

  .ticket-item-main {
    flex-direction: column;
    align-items: center;
  }

  .ticket-info {
    width: 100%;
    margin-left: 0;
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .ticket-link {
    margin-left: 16px;
  }

  .ticket-image {
    width: 100%;
  }
}

@media only screen and (max-width: 768px) {
  .sale-time {
    margin-top: 45px;
    margin-left: auto;
    min-width: 450px;
  }

  .ticket-list, .notes, .place {
    width: 80%;
    min-width: 360px;
  }
}

@media only screen and (max-width: 600px) {
  .sale-time {
    width: 80%;
    min-width: auto;
    flex-direction: column;
  }

  .sale-time .item-card {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 21px;
  }

  .ticket-cards > .item-card:nth-child(2) {
    margin-left: -60px;
  }
  /*.ticket-cards*/

  .ticket-info {
    /*flex-wrap: wrap;*/
  }
}
</style>

<style>
.sale-time .item-card > div {
  width: 241px;
}

.sale-time .zeros {
  opacity: 0;
}

.ticket-stage .item-card > div {
  width: 100%;
}

.ticket-cards > .item-card .help-text {
  transform: none;
  font-weight: bold;
  color: #808080;
}

@media only screen and (max-width: 768px) {
  .sale-time > .item-card > div {
    width: 196px;
  }

  .place > .item-card .content {
    height: 74px;
  }
}

@media only screen and (max-width: 600px) {
  .sale-time .item-card > div {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>