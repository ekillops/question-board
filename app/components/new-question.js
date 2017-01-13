import Ember from 'ember';

export default Ember.Component.extend({
  askNewQuestion: false,
  actions: {

    newQuestion() {
      this.set('askNewQuestion', true);
    },

    noQuestion() {
      this.set('author', '');
      this.set('notes', '');
      this.set('question', '');
      this.set('askNewQuestion', false);
    },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        notes: this.get('notes'),
        question: this.get('question')
      };
      this.set('author', '');
      this.set('notes', '');
      this.set('question', '');
      this.sendAction('saveQuestion', params);
      this.set('askNewQuestion', false);
    }
  }
});
