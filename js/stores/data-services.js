'use strict';

var moment = require('moment');
var api = require('./../libs/douban-api');

var WormAction = require('../actions/WormActions');
var _regionsData = require('./data.tpl');

var inited = false;

function getDaysDiff () {
  var thisYear = moment().year();
  var nextYear = thisYear + 1;

  var next = moment([nextYear]);
  var current = moment([thisYear]);

  return next.diff(current, 'days');
}

function getResidualDays () {
  return getDaysDiff() - moment().dayOfYear();
}

function getRequiredVelocity(residualCount) {
  return (residualCount / getResidualDays).toFixed(2);
}

function getFirstMoment () {
  return moment([moment().year()]).format();
}

function calcVelocity(num) {
  return (getDaysDiff() / num).toFixed(2);
}

function calcCurrentVelocity(finishedNum) {
  return (moment().dayOfYear() / finishedNum).toFixed(2);
}

var services = {
  init: function (initGoal) {
    initGoal = initGoal || 50;
    this.updateGoal(initGoal);

    inited = true;
  },
  all: function () {
    inited || this.init();

    return _regionsData;
  },
  updateGoal: function (num) {
    _regionsData[0]['list'][0]['unit'] = num;
    var self = this;
    var fromDate = getFirstMoment();

    self.updateVelocity(calcVelocity(num));
    self.updatePastDays(moment().dayOfYear());
    self.updateResidualDays(getResidualDays());

    api.getReadCount('owenyang0', fromDate)
      .then(function(data) {
        var residualCount = num - data.total;
        WormAction.updateVelocity(calcCurrentVelocity(data.total));
        WormAction.updateUnfinishedCount(residualCount);
        WormAction.updateRequiredVelocity(getRequiredVelocity(residualCount));
      });
  },
  updateVelocity: function (vel) {
    _regionsData[1]['list'][0]['unit'] = vel;
  },
  updateCurrentVelocity: function (vel) {
    _regionsData[1]['list'][1]['unit'] = vel;
  },
  updatePastDays: function (days) {
    _regionsData[2]['list'][0]['unit'] = days;
  },
  updateResidualDays: function (days) {
    _regionsData[2]['list'][1]['unit'] = days;
  },
  updateUnfinishedCount: function (count) {
    _regionsData[2]['list'][2]['unit'] = count;
  },
  updateRequiredVelocity: function (vel) {
    _regionsData[2]['list'][3]['unit'] = vel;
  }
};

module.exports = services;