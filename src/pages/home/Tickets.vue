<template>
  <HomePageBase name="tickets" :title="{en: 'Tickets', zh:'票务信息'}">
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
          <div class="ticket-image-container">
            <a :href="purchasingLink" target="_blank" rel="noreferrer" />
            <img class="ticket-image" :src="images.normal" alt="">
          </div>
          <div class="ticket-info">
            <div class="ticket-cards">
              <ItemCard :href="purchasingLink" number="55" name="RMB" help-text="预售价格">普通入场票</ItemCard>
              <ItemCard :href="purchasingLink" number="75" name="RMB" help-text="现场价格">普通入场票</ItemCard>
            </div>
            <div class="ticket-content">含入场票*1 + 入场特典*1（颜色随机）</div>
          </div>
        </div>
      </div>
      <div class="ticket-item ticket-stage">
        <div class="ticket-item-main">
          <div class="ticket-image-container">
            <a :href="purchasingLink" target="_blank" rel="noreferrer" />
            <img class="ticket-image" :src="images.normal" alt="">
          </div>
          <div class="ticket-info">
            <div class="ticket-cards">
              <ItemCard :href="purchasingLink" number="55" name="RMB" help-text="仅网络贩售 / 每个 ID 最多可拍付 3 份">舞台区入场票
              </ItemCard>
            </div>
            <div class="ticket-content">含入场票*1 + 入场特典*1 + 舞台区座位整理券*1</div>
          </div>
        </div>
      </div>
      <div class="ticket-item ticket-vip">
        <div class="ticket-item-main">
          <div class="ticket-image-container">
            <a :href="purchasingLink" target="_blank" rel="noreferrer" />
            <img class="ticket-image" :src="images.vip" alt="">
          </div>
          <div class="ticket-info">
            <div class="ticket-cards">
              <ItemCard
                  :href="purchasingLink"
                  number="125" name="RMB" theme="red"
                  help-text="仅网络贩售 / 限量 40 份 / 每个 ID 最多可拍付 2 份"
              >VIP 入场票
              </ItemCard>
            </div>
            <div class="ticket-content">含入场票*1 + 提前入场资格 + VIP入场特典 + 舞台区前两排固定座位整理券*1</div>
          </div>
        </div>
      </div>
      <div class="ticket-item ticket-battle">
        <div class="ticket-item-main">
          <div class="ticket-image-container">
            <!--            <img class="ticket-image" src="" alt="">-->
          </div>
          <div class="ticket-info">
            <div class="ticket-cards">
              <ItemCard
                  number="5" name="RMB"
                  help-text="单拍不发货 / 同笔订单内对战券数量多于门票数不发货"
              >对战券
              </ItemCard>
            </div>
            <div class="ticket-content">现场对战区比赛资格*1</div>
          </div>
        </div>
      </div>
    </div>
    <ul class="notes">
      <li>图片仅为门票示意，并非门票实物，具体门票样式以实物为准。</li>
      <li>需要参加对战区比赛的游客，请在购买门票的同时，将“<span class="red">加购对战券</span>”加入购物车并一起支付。</li>
      <li>在收到票后，以《<span class="red">魔都 PMO2021 报名 + 昵称</span>》为邮件名，发送邮件到 <span class="red">nebby@getdaze.org</span>。
      </li>
      <li>邮件中需要包含：门票 ID 号 | 对战券 ID 号 | 门票 + 对战券照片 | 个人昵称 | 个人 QQ 号，以作为报名的验证和方便进行后期通知。</li>
      <li><span class="notes-strike">如果网络预售票已售罄，现场将不再售票。</span>实体票贩售完毕后，<span class="red">增加不限量单次出入凭证（40 RMB）</span>。</li>
      <li>因疫情防控等原因，<span class="red">未持有实体票</span>的补票游客，仅限 11:30 后入场，请合理安排到场时间。</li>
    </ul>
  </HomePageBase>
</template>

<script>
import HomePageBase from "../../components/HomePageBase.vue"
import ItemCard from "../../components/ItemCard.vue"
import ImageView from "../../components/ImageView.vue"

import TicketNormalImage from "../../assets/tickets/ticket-normal.png"
import TicketVIPImage from "../../assets/tickets/ticket-vip.png"

const PurchasingLink = "https://item.taobao.com/item.htm?id=619811759484"

export default {
  name: "Tickets",
  components: {
    ImageView,
    ItemCard, HomePageBase
  },
  data() {
    return {
      width: window.innerWidth,
      purchasingLink: PurchasingLink,
      images: {
        normal: TicketNormalImage,
        vip: TicketVIPImage
      }
    }
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
  margin-top: 128px;
}

.ticket-item:nth-child(1) {
  margin-top: 0;
}

.ticket-item-main {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.ticket-image-container {
  width: 586px;
  height: 204px;
  position: relative;
}

.ticket-image-container > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.ticket-image {
  position: absolute;
  background-color: transparent;
  background-size: unset;
  left: -9px;
  top: -34px;
  height: 452px;
  width: auto;
}

.ticket-vip .ticket-image {
  left: -15px;
}

.ticket-battle .ticket-image-container {
  display: none;
}

.ticket-battle .ticket-info {
  margin-top: 0;
}

.ticket-content {
  font-family: "Noto Sans SC", sans-serif;
  font-size: 21px;
  font-weight: bold;
  color: #808080;
  margin-top: 24px;
}

.ticket-info {
  margin-left: auto;
  margin-right: 0;
  width: 450px;
  flex: 0 1 auto;
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

.notes-strike {
  text-decoration: line-through;
}

.place {
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
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

  .ticket-item {
    margin-top: 32px;
  }

  .ticket-item-main {
    flex-direction: column;
    align-items: center;
  }

  .ticket-info {
    width: 586px;
    margin: 112px 0 0;
  }

  .ticket-cards {
    justify-content: space-between;
  }

  .ticket-link {
    margin-left: 16px;
  }

  .ticket-image-container {
    /*width: 100%;*/
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
    min-width: 350px;
  }
}

@media only screen and (max-width: 680px) {
  .ticket-list {
    margin-top: 0;
  }

  .ticket-info {
    width: 100%;
    margin-top: -56px;
  }

  .ticket-image-container {
    min-width: 350px;
    width: 100%;
    height: 0;
    padding-top: 77%;
  }

  .ticket-image {
    height: auto;
    width: 100%;
    transform: scale(1.08);
    transform-origin: 11% 0;
    left: 0;
    top: 0;
  }

  .ticket-vip .ticket-image {
    left: 0;
    transform: scale(1.06);
  }

  .ticket-content {
    font-size: 18px;
  }
}

@media only screen and (max-width: 600px) {
  .sale-time {
    width: 80%;
    min-width: auto;
    flex-direction: column;
  }

  .sale-time > .item-card {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 21px;
  }

  .ticket-cards > .item-card:nth-child(2) {
    margin-left: -60px;
  }

  .ticket-link {
    margin-left: auto;
  }
}

@media only screen and (max-width: 420px) {
  .ticket-image-container {
    overflow-x: hidden;
  }
}

@media only screen and (max-width: 400px) {
  .place > .item-card {
    width: 100%;
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

.ticket-stage .item-card > a {
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

  .sale-time .item-card > a {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>