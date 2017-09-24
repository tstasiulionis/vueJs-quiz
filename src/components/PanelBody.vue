<template>
  <div class="panel-body">
    <div class="row">
      <div class="col-xs-6 text-center">
        <button class="btn btn-primary btn-lg" @click="checkWin(correct[0])">{{ correct[0] }}</button>
      </div>
      <div class="col-xs-6 text-center">
        <button class="btn btn-primary btn-lg" @click="checkWin(correct[1])">{{ correct[1] }}</button>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-xs-6 text-center">
        <button class="btn btn-primary btn-lg" @click="checkWin(correct[2])">{{ correct[2] }}</button>
      </div>
      <div class="col-xs-6 text-center">
        <button class="btn btn-primary btn-lg" @click="checkWin(correct[3])">{{ correct[3] }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from './../main.js';

export default {
  data() {
    return {
      answer: null,
      correct: [],
      showNum: null,
      won: false
    }
  },
  methods: {
    randInterval(min, max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    },
    selectPosition() {
      var result;
      var position = this.randInterval(0, this.correct.length-1);
      this.showNum = this.correct[position];
      return this.showNum;
    },
    shuffleArr(arr) {
      var theArr = arr
      for(var i = 0; i< theArr.length; i++) {
        var item = theArr[i];
        theArr.splice(i,1);
        var randPos = this.randInterval(0, theArr.length - 1);
        theArr.splice(randPos, 0, item);
      }
      return theArr;
    },
    checkWin(number) {
      if(number === this.answer) {
        this.won = true;
        this.$emit('wonTrue', this.won);
      } else {
        alert('Try different!');
      }
    }
  },
  created() {
    console.log('created body');
    EventBus.$on('generatedSum', (sum) => {
      this.correct.push(sum);
      this.answer = sum;
      for (var i = 1; i <= 3; i++) {
        let randNum = this.randInterval(1,100);
        this.correct.push(randNum);
      }
      this.shuffleArr(this.correct);
    });
  },
  mounted() {
    console.log('mounted');
    EventBus.$on('generatedSum', (sum) => {
      this.correct.push(sum);
      this.answer = sum;
      for (var i = 1; i <= 3; i++) {
        let randNum = this.randInterval(1,100);
        this.correct.push(randNum);
      }
      this.shuffleArr(this.correct);
    });
  }
}
</script>

<style>

</style>
