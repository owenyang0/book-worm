
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var WormConstants = require('../constants/WormConstants');
var utils = require('./data-services');

var CHANGE_EVENT = 'change';


var WormStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return utils.all();
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },


  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  var num = +action.num;

  switch(action.actionType) {
    case WormConstants.GOAL_UPDATE:
      if (num > 0 ) {
        utils.updateGoal(num);
      }

      WormStore.emitChange();
      break;
    case WormConstants.VELOCITY_UPDATE:
      utils.updateCurrentVelocity(num);

      WormStore.emitChange();
      break;

    default:
    // no op
  }
});

module.exports = WormStore;
