
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
  var value = action.value;

  switch(action.actionType) {
    case WormConstants.GOAL_UPDATE:
      if (+value > 0 ) {
        utils.updateGoal(value);
      }

      WormStore.emitChange();
      break;
    case WormConstants.VELOCITY_UPDATE:
      utils.updateCurrentVelocity(value);

      WormStore.emitChange();
      break;
    case WormConstants.UNFINISHED_COUNT_UPDATE:
      utils.updateUnfinishedCount(value);

      WormStore.emitChange();
      break;
    case WormConstants.REQUIRED_VELOCITY_UPDATE:
      utils.updateRequiredVelocity(value);

      WormStore.emitChange();
      break;

    case WormConstants.USERNAME_UPDATE:
      utils.userUsername(value);

      WormStore.emitChange();
      break;

    case WormConstants.META_GET:
      utils.getMeta(value);

      WormStore.emitChange();
      break;

    default:
    // no op
  }
});

module.exports = WormStore;
