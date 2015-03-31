
var AppDispatcher = require('../dispatcher/AppDispatcher');
var WormConstants = require('../constants/WormConstants');

var WormActions = {

  updateGoal: function (num) {
    console.log('a: update goal', num);
    AppDispatcher.dispatch({
      actionType: WormConstants.GOAL_UPDATE,
      value: num
    });
  },
  updateVelocity: function (vel) {
    console.log('a: update velocity', vel);
    AppDispatcher.dispatch({
      actionType: WormConstants.VELOCITY_UPDATE,
      value: vel
    });
  },
  updateUnfinishedCount: function (num) {
    AppDispatcher.dispatch({
      actionType: WormConstants.UNFINISHED_COUNT_UPDATE,
      value: num
    });
  },
  updateRequiredVelocity: function (vel) {
    console.log('rv', vel);
    AppDispatcher.dispatch({
      actionType: WormConstants.REQUIRED_VELOCITY_UPDATE,
      value: vel
    });
  },
  updateUsername: function (username) {
    console.log('a: update username', username);
    AppDispatcher.dispatch({
      actionType: WormConstants.USERNAME_UPDATE,
      value: username
    });
  },
  getMeta: function (username) {
    console.log('a: get meta', username);
    AppDispatcher.dispatch({
      actionType: WormConstants.META_GET,
      value: username
    });
  }
};

module.exports = WormActions;
