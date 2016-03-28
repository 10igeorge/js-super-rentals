import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    submit(blogParams){
      var newEntry = this.store.createRecord('post', blogParams);
      newEntry.save();
      this.transitionTo('news');
    },
    destroyEntry(post){
      post.destroyRecord();
      this.transitionTo('news');
    }
  }
});
