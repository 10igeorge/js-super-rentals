import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteEntry(post){
      if(confirm('Delete this entry?')){
        this.sendAction('destroyEntry', post);
      }
    }
  }
});
