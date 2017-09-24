<template>
  <div class="panel-heading">
    <h3 class="panel-title text-center">{{ title }}</h3>
  </div>
</template>

<script>
import { EventBus } from './../main.js';
import { questionMixin } from './../mixins/questionMixin.js';

export default {
  mixins: [questionMixin],
  data() {
    return {
      title: '',
      sum: null
    }
  },
  mounted() {
    this.questionCalc();
  }
}
</script>

<style>

</style>
