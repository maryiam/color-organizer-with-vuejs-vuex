<template>
  <div class="rating-wrapper">
    <div
      v-for="(star, index) of stars"
      :key="index"
      :class="[index < rating ? 'star selected' : 'star']"
      @click="rate(index + 1)"/>
  </div>

</template>

<script lang="ts">
/* eslint-disable no-console */

import { Component, Prop, Vue } from 'vue-property-decorator';
import { modulesNamespace } from '../store/constants/module.namespace';

@Component({})
export default class Rating extends Vue {
  private maxStars = 5;
  private stars = [ ...Array(this.maxStars) ];

  @Prop()
  rating!: number;
  @Prop()
  position!: number;

  @modulesNamespace.COLORS.Mutation rateColor: any;

  rate(rating: number) {
    this.rateColor({
      index: this.position,
      rating
    });
  }

}
</script>

<style lang="scss" scoped>
  .rating-wrapper {
    display: flex;
    justify-content: center;
    .star {
      clip-path: polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%);
      height: 30px;
      width: 30px;
      background-color: gray;
      cursor: pointer;
      margin: 5px 0;
      &.selected {
        background-color: red;
      }
    }
  }
</style>