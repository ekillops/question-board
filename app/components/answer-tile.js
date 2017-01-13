import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    deleteAnswer(answer) {
      var params = {
        answer: answer,
        question: this.get('question')
      };
      this.sendAction('deleteAnswer', params);
    }

  }
});
