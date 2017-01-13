import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {

    editQuestion() {
      this.set('showEditForm', true);
    },

    cancelEdit() {
      this.set('questionText', '');
      this.set('questionNotes', '');
      this.set('showEditForm', false);
    },

    updateQuestion(question) {
      var params = {
        question: this.get('questionText'),
        notes: this.get('qustionNotes')
      };
      this.set('questionText', '');
      this.set('questionNotes', '');
      this.set('showEditForm', false);
      this.sendAction('updateQuestion', params, question);
    }

  }
});
