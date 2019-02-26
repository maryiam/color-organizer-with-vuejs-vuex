<template>
  <button
    class="button-sort"
    @click="changeOrder">
    <span v-show="orderBy === 'DESC'">Order by last created</span>
    <span v-show="orderBy === 'ASC'">Order by first created</span>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { modulesNamespace } from '../store/constants/module.namespace';

@Component({})
export default class Sort extends Vue {
  @State colors!: ColorsModuleState;
  @modulesNamespace.COLORS.Mutation changeOrder: any;

  get orderBy() {
    return this.colors.orderBy;
  }
}
</script>

<style lang="scss" scoped>
  .button-sort {
    border-radius: 4px;
    color: dimgrey;
  }
</style>