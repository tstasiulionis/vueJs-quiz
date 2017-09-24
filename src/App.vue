<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-8 col-md-offset-2">
        <h1 class="text-center">The Super Quiz</h1>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-6 col-md-offset-3">
        <transition 
          enter-active-class="animated flipInY"
          leave-active-class="animated flipOutY"
          mode="out-in"
          >
          <div class="panel panel-default" v-if="!won" key="question">
            <app-panel-heading></app-panel-heading>
            <app-panel-body @wonTrue="won = $event"></app-panel-body>
          </div>
          <div class="panel panel-default bg-success" v-else key="question-success">
            <div class="panel-body bg-success">
              <h1 class="text-success text-center">That's Correct!</h1>
              <hr>
              <button class="btn btn-primary center-block" @click="questionCalc">Next Question</button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
  
</template>

<script>
  import PanelHeading from './components/PanelHeading.vue';
  import PanelBody from './components/PanelBody.vue';
  import { questionMixin } from './mixins/questionMixin.js';

  export default {
    mixins: [questionMixin],
    data () {
      return {
        won: null,
        checkAnimation: true
      }
    },
    components: {
      appPanelHeading: PanelHeading,
      appPanelBody: PanelBody
    }
  }
</script>

<style>

</style>
