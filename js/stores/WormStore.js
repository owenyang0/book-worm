
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;

var WormConstants = require('../constants/WormConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var goal = {
  title: '目标',
  list: [{
    preText: '年度目标',
    unit: 50,
    sufText: '本'
  }, {
    preText: '已完成',
    unit: 11,
    sufText: '本'
  }]
};

var plan = {
  title: '计划',
  list: [{
    preText: '每',
    unit: 7,
    sufText: '天，就得完成一本'
  }, {
    preText: '当前速度',
    unit: 5.5,
    sufText: '本/天'
  }]
};

var _regionsData = [].concat(goal, plan);

function updateGoal(num) {
  _regionsData[0]['list'][0]['unit'] = num;

  // TODO: hard code
  console.log('store', _regionsData);
}

var WormStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _regionsData;
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

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var num = +action.num;

  switch(action.actionType) {
    case WormConstants.GOAL_UPDATE:
      if (num > 0 ) {
        updateGoal(num);
      }

      WormStore.emitChange();
      break;

    default:
    // no op
  }
});

module.exports = WormStore;
