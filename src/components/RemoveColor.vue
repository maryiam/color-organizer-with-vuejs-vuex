<template>
  <button
    class="button-close"
    @click="removeColor(index)">X
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { modulesNamespace } from '../store/constants/module.namespace';

@Component({})
export default class RemoveColor extends Vue {
  @Prop({required: true})
  index!: number;
  @modulesNamespace.COLORS.Mutation removeColor: any;
}
</script>

<style lang="scss" scoped>
  .button-close {
    position: absolute;
    top: 0;
    right: 0;
    height: 25px;
    margin: 2px;
    cursor: pointer;
  }
</style>