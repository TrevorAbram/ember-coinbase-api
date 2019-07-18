import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.pro.coinbase.com',

  pathForType(){
    return 'currencies';

  }
});
