<template>
  <form class="color-form">
    <input
      ref="title"
      v-model="title"
      class="title"
      type="text"
      required>
    <input
      v-model="color"
      type="color"
      class="color"
      required>
    <button
      type="submit"
      class="button-add"
      @click.prevent="add">Add
    </button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { modulesNamespace } from '../store/constants/module.namespace';

@Component({})
export default class Create extends Vue {
  private color = '#000000';
  private title = '';
  @modulesNamespace.COLORS.Mutation addColor: any;

  add() {
    this.addColor({title: this.title, color: this.color});
    (this.$refs.title as HTMLElement).focus();
    this.color = '#000000';
    this.title = '';
  }
}
</script>

<style lang="scss" scoped>
  .color-form {
    height: 100%;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    input {
      min-height: 30px;
      margin: 0 10px;
      border-radius: 5px;
    }
    .title {
      width: 40vw;
    }
    .color {
      background-color: lightgray;
      padding: 0;
      height: 34px;
    }
    .button-add {
      border-radius: 3px;
      background-color: green;
      color: white;
      border: 0;
      width: 70px;
    }
  }
</style>