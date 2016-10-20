import Ember from 'ember';
const { inject } = Ember;

export default Ember.Controller.extend({
  ajax: inject.service(),

  photosList: Ember.A(),
  hasElements: Ember.computed.gt('photosList.length', 0),
  loading: false,
  actions: {
    loadData() {
      this.set('loading', true);
      this.get('ajax').request('photos').then((data) => {
        this.set('photosList', data);
      }).finally(() => this.set('loading', false));
    }
  }

});
