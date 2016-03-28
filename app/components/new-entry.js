import Ember from 'ember';

export default Ember.Component.extend({
  newBlogPost: false,
  actions: {
    showEntryForm(){
      this.set('newBlogPost', true);
    },
    submit(){
      var blogParams = {
        user: this.get('user'),
        date: this.get('date'),
        title: this.get('title'),
        body: this.get('body')
      };
      this.set('newBlogPost', false).
      this.sendAction('submit', blogParams);
    }
  }
});
