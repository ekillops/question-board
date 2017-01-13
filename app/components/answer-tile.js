import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    deleteAnswer(answer) {
      if (confirm('Are your sure you want to delete this answer?')) {
        var question = this.get('question');
        var params = {
          answer: answer,
          question: question
        };
        this.sendAction('deleteAnswer', params);
      }
    }

  }
});
