<template>
  <HomePageBase class="page-location" name="location" :title="{en: 'Location', zh:'场地信息'}">
    <div class="map-container">
      <a class="map" href="https://j.map.baidu.com/4e/gek" target="_blank">
        <img src="../../assets/location/map.png" alt="">
      </a>
      <div class="helpText">*来源于百度地图</div>
    </div>
    <div class="info">
      <ItemCard number="09" name="Metro" time="上海市闵行区漕宝路 1688 号诺宝中心">
        地铁<span class="blue">九号线</span>星中路站<span class="blue">2号出口</span>
      </ItemCard>
    </div>
  </HomePageBase>
</template>

<script>
import HomePageBase from "../../components/HomePageBase.vue"
import ItemCard from "../../components/ItemCard.vue"

export default {
  name: "Location",
  components: {
    ItemCard, HomePageBase
  }
}
</script>

<style scoped>
.page-location {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../../assets/location/background.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: bottom;
}

.map-container {
  background-image: url("../../assets/location/map-background.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 48px;
  width: 90.104%;
  padding-top: 38.75%;
  position: relative;
}

.map {
  display: block;
  position: absolute;
  top: 10.618%;
  left: 19.884%;
  width: 59.364%;
}

.map > img {
  width: 100%;
  height: auto;
}

.helpText {
  display: block;
  position: absolute;
  left: 19.884%;
  bottom: 6.452%;
  width: 59.133%;
  color: #ffffff;
  text-align: right;
  font-size: 12px;
  user-select: none;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  width: 100%;
  max-width: 605px;
  overflow-x: hidden;
}

.info > .item-card {
  flex-direction: column;
  align-items: center;
}

/*@media only screen and (max-width: 1280px) {*/
/*  .info > .item-card {*/
/*    flex-direction: column;*/
/*    align-items: center;*/
/*  }*/
/*}*/

/*@media only screen and (max-width: 768px) {*/
/*  .info {*/
/*    align-items: center;*/
/*  }*/
/*}*/

@media only screen and (max-width: 600px) {
  .map-container {
    background: none;
    width: 90%;
    padding-top: 0;
  }

  .map {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }

  .helpText {
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    color: #040000;
  }
}
</style>
<style>
@media only screen and (max-width: 768px) {
  .info > .item-card > div {
    width: 354px;
  }
}
</style>
