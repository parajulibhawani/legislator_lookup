import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('about');
  this.route('contact');
  this.route('committee', {path:'/committee/:legislator.bioguide_id'});
  this.route('bills', {path:'/bills/:legislator.party'});
});

export default Router;
