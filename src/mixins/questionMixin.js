import { EventBus } from './../main.js';

export const questionMixin = {
  methods: {
    questionCalc() {
      let numberOne = this.genQuestionNumber(100);
      let numberTwo = this.genQuestionNumber(100);
      this.sum = numberOne + numberTwo;
      this.title = 'What\'s ' + numberOne + ' + ' + numberTwo + '?';
      EventBus.$emit('generatedSum', this.sum);
      this.won = false;
    },
    genQuestionNumber(max) {
      return Math.floor(Math.random() * max) + 1;
    }
  }
}