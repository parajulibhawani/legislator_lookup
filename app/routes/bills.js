import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = 'https://congress.api.sunlightfoundation.com/bills?apikey=574d4a17eab649a3ab73359ddf16a885&sponsor.party=' + params["legislator.party"];
    return Ember.$.getJSON(url).then(function(responseJSON){
      console.log(responseJSON.results);
      return responseJSON.results;
    })
  }
});
