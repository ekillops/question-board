import Ember from 'ember';

export default Ember.Component.extend({
  askNewQuestion: false,
  actions: {

    newQuestion() {
      this.set('askNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        notes: this.get('notes'),
        question: this.get('question')
      };
      this.sendAction('saveQuestion', params);
      this.set('askNewQuestion', false);
    }
  }
});
