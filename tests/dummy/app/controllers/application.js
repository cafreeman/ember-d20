import Ember from 'ember';
import d20 from 'd20';

export default Ember.Controller.extend({
  actions: {
    roll() {
      console.log(d20.roll(20));
    }
  }
});
