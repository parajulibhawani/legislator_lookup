import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params){
    var url = 'https://congress.api.sunlightfoundation.com/committees?apikey=574d4a17eab649a3ab73359ddf16a885&member_ids=' + params['legislator.bioguide_id'];
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
      console.log(responseJSON.results);
    })
  }
});
