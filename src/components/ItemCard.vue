<template>
  <div class="item-card">
    <div>
      <div class="upper">
        <div class="number" :style="{ color: themeColor }">{{ number }}</div>
        <div class="upper-right">
          <div class="zeros">#000</div>
          <div class="name">{{ name }}</div>
        </div>
      </div>
      <div class="content">
        <slot />
      </div>
      <div class="middle">
        <div class="delimiter" :style="{ borderColor: themeColor }" />
        <div v-if="helpText" class="help-text">{{ helpText }}</div>
      </div>
      <div v-if="time" class="time">{{ time }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "ItemCard",
  props: {
    number: String,
    name: String,
    helpText: String,
    time: String,
    theme: String
  },
  data() {
    const theme = this.$props.theme
    const themeColor = theme === undefined || theme === "blue"
      ? "#3999d6" : theme === "red" ? "#d21651" : theme
    return { themeColor }
  }
})
</script>

<style scoped>
.item-card {
  display: flex;
}

.item-card > div {
  width: 80%;
}

.upper {
  display: flex;
  width: 100%;
}

.upper-right {
  margin-left: 10px;
}

.number {
  min-width: 90px;
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
  margin-top: 14px;
  height: 42px;
  line-height: 42px;
  font-size: 44px;
  font-weight: bold;
  color: #020002;
  transform: scale(0.80, 1);
  transform-origin: left;
  white-space: nowrap;
}

.middle {
  margin-top: 12px;
  height: 16px;
  width: 100%;
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

.help-text {
  flex: 0 1 auto;
  display: block;
  height: 15px;
  line-height: 15px;
  font-size: 15px;
  transform: scale(0.85, 1);
  transform-origin: top right;
  margin-top: -2px;
  margin-left: 12px;
  color: #b7b7b7;
}

.time {
  display: block;
  width: 100%;
  height: 25px;
  line-height: 25px;
  font-size: 22px;
  margin-top: 12px;
  background: #000000;
  text-align: center;
  color: #ffffff;
}

@media only screen and (max-width: 768px) {
  /* and (min-width: 601px) { */
  .number {
    min-width: 80px;
    height: 46px;
    line-height: 46px;
    font-size: 48px;
  }

  .zeros {
    margin-top: 7px;
    height: 6px;
    line-height: 6px;
    font-size: 8px;
    letter-spacing: 3px;
  }

  .name {
    margin-top: 19px;
    height: 12px;
    line-height: 12px;
    font-size: 16px;
  }

  .content {
    margin-top: 11px;
    height: 37px;
    line-height: 37px;
    font-size: 35px;
  }

  .middle {
    height: 16px;
  }

  .help-text {
    height: 12px;
    line-height: 12px;
    font-size: 12px;
    margin-top: -4px;
  }

  .time {
    height: 20px;
    line-height: 20px;
    font-size: 17px;
    width: 100%;
    margin-top: 12px;
  }
}
</style>
