import DS from 'ember-data';

export default DS.Model.extend({

    base_currency: DS.attr('string'),
    quote_currency: DS.attr('string'),
    base_min_size: DS.attr('number'),
    base_max_size: DS.attr('number'),
    quote_increment: DS.attr('number'),
});
