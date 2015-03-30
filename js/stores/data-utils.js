'use strict';

var moment = require('moment');
var api = require('./douban-api');


var inited = false;

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

function getDaysDiff () {
  var thisYear = moment().year();
  var nextYear = thisYear + 1;

  var next = moment([nextYear]);
  var current = moment([thisYear]);

  return next.diff(current, 'days');
}

function calcVelocity (num) {
  return (getDaysDiff() / num).toFixed(2);
}

function calcCurrentVelocity (finishedNum) {
  return (moment().dayOfYear() / finishedNum).toFixed(2);
}

var utils = {
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

    this.updateVelocity(calcVelocity(num));
    this.updateCurrentVelocity(calcCurrentVelocity(10));

    api.getReadCount('owenyang0');
  },
  updateVelocity: function (vel) {
    _regionsData[1]['list'][0]['unit'] = vel;
  },
  updateCurrentVelocity: function (vel) {
    _regionsData[1]['list'][1]['unit'] = vel;
  }
};

module.exports = utils;