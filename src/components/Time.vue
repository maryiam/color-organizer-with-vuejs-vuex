<template>
  <p className="date capitalize">{{ formatted }}</p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Time extends Vue {
  @Prop({required: true, default: new Date})
  timestamp!: Date;

  get formatted() {
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      weekday: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(this.timestamp));
  }
}
</script>

<style lang="scss" scoped>
  .date {
    color: dimgrey;
    font-style: italic;
  }

</style>