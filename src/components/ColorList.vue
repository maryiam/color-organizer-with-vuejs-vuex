<template>
  <div class="container">
    <h3
      v-show="sortedColors.length === 0"
      class="no-colors">
      No colors were loaded ...</h3>
    <ul class="color-list">
      <Color
        v-for="(color, index) of sortedColors"
        :key="index"
        :index="index"
        :color="color"/>
    </ul>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Color from './Color.vue';
import { State } from 'vuex-class';
import { modulesNamespace } from '../store/constants/module.namespace';

@Component({
  components: {
    Color
  }
})
export default class ColorList extends Vue {
  @State colors!: ColorsModuleState;
  @modulesNamespace.COLORS.Getter sortedColors: any;
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    height: 100%;
    .no-colors {
      position: absolute;
      top: 45vh;
    }
    .color-list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

</style>