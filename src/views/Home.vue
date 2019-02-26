<template>
  <div class="wrapper">
    <div class="header">
      <Create/>
      <Sort/>
    </div>
    <ColorList/>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import ColorList from '@components/ColorList.vue';
import Create from '@components/Create.vue';
import Sort from '../components/Sort';

@Component({
  components: {
    Sort,
    Create,
    ColorList
  }
})
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
    margin: 20px;
  }

</style>