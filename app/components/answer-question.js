import Ember from 'ember';

export default Ember.Component.extend({
  answerQuestion: false,
  actions: {

    answerThis() {
      this.set('answerQuestion', true);
    },

    noAnswer() {
      this.set('answerQuestion', false);
    },

    saveAnswer() {
      var params = {
        answer: this.get('answer'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.set('answer', '');
      this.set('author', '');
      this.sendAction('saveAnswer', params);
    }
  }
});
