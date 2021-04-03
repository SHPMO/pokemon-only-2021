<template>
  <div class="item-card">
    <div class="upper">
      <div class="number">{{ number }}</div>
      <div>
        <div class="zeros">#000</div>
        <div class="name">{{ name }}</div>
      </div>
    </div>
    <div class="content"><slot /></div>
    <div class="middle">
      <div class="delimiter" />
      <div :v-if="helptext" class="helptext">{{ helptext }}</div>
    </div>
    <div :v-if="time" class="time">{{ time }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "ItemCard",
  props: {
    number: String,
    name: String,
    helptext: String,
    time: String,
  }
})
</script>

<style scoped>
.item-card {
  display: block;
  min-width: 211px;
  width: 80%;
}

.upper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.number {
  width: 100px;
  height: 58px;
  font-size: 60px;
  line-height: 58px;
  color: #3999d6;
  flex: 0 0 auto;
}

.zeros {
  margin-top: 9px;
  height: 7px;
  line-height: 7px;
  font-size: 10px;
  letter-spacing: 4px;
  color: #808080;
  flex: 1 1 100%;
}

.name {
  margin-top: 24px;
  height: 15px;
  line-height: 15px;
  font-size: 20px;
  color: #808080;
  text-transform: uppercase;
}

.content {
  height: 42px;
  line-height: 42px;
  font-size: 44px;
  font-weight: bold;
  color: #020002;
  transform: scale(0.80,1);
  transform-origin: left;
  white-space: nowrap;
}

.middle {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.delimiter {
  width: 22px;
  height: 3px;
  border: #3999d6 solid 2px;
  flex: 0 1 auto;
}

.helptext {
  flex: 0 1 auto;
  display: block;
  height: 15px;
  line-height: 15px;
  font-size: 15px;
  transform: scale(0.85,1);
  transform-origin: top right;
  margin-top: -4px;
  color: #b7b7b7;
}

.time {
  display: block;
  width: 100%;
  height: 25px;
  line-height: 25px;
  font-size: 22px;
  background: #000000;
  text-align: center;
  color: #ffffff;
}
</style>
