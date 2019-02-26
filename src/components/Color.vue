<template>
  <li class="color-box">
    <RemoveColor :index="index"/>
    <h2>{{ color.title }}</h2>
    <Time :timestamp="color.timestamp"/>
    <div
      :style="{'backgroundColor': color.color}"
      class="color-bg"/>
    <Rating
      :rating="color.rating"
      :position="index"/>
  </li>
</template>

<script lang="ts">
/* eslint-disable no-console */

import { Component, Prop, Vue } from 'vue-property-decorator';
import Time from './Time.vue';
import Rating from './Rating';
import RemoveColor from './RemoveColor';

@Component({
  components: {
    RemoveColor,
    Rating,
    Time
  }
})
export default class Color extends Vue {
  @Prop({required: true})
  color!: ColorStructure;
  @Prop({required: true})
  index!: number;

}
</script>

<style lang="scss" scoped>
  .color-box {
    list-style-type: none;
    min-height: 300px;
    width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 2px 2px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;
    margin: 20px;
    padding: 10px 0;

    .color-bg {
      min-height: 40%;
    }

  }

</style>