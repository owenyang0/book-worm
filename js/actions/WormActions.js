
var AppDispatcher = require('../dispatcher/AppDispatcher');
var WormConstants = require('../constants/WormConstants');

var WormActions = {

  updateGoal: function (num) {
    console.log('a', num, WormConstants);
    AppDispatcher.dispatch({
      actionType: WormConstants.GOAL_UPDATE,
      num: num
    });
  },
  updateVelocity: function (vel) {
    console.log('v', vel);
    AppDispatcher.dispatch({
      actionType: WormConstants.VELOCITY_UPDATE,
      num: vel
    });
  }
};

module.exports = WormActions;
