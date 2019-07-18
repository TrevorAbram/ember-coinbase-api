import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  min_size: DS.attr('string'),

});
