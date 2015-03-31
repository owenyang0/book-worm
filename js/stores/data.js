'use strict';

var moment = require('moment');

var regionsData = [
  {
    title: '目标',
    list: [{
      preText: '年度目标',
      unit: null,
      sufText: '本',
      isSafe: true
    }, {
      preText: '已完成',
      unit: 11,
      sufText: '本'
    }]
  }, {
    title: '计划',
    list: [{
      preText: '每',
      unit: null,
      sufText: '天，就得完成一本',
      isSafe: true
    }, {
      preText: '当前速度',
      unit: null,
      sufText: '天/本'
    }]
  }, {
    title: '统计',
    list: [{
      preText: '已花费',
      unit: null,
      sufText: '天',
      isSafe: true
    }, {
      preText: '距离计划结束，只有',
      unit: null,
      sufText: '天',
      isSafe: true
    }, {
      preText: '还剩下',
      unit: null,
      sufText: '本，未完成',
      isSafe: true
    }, {
      preText: '需要',
      unit: null,
      sufText: '天/本，才能完成年度目标'
    }]
  }
];

function getFirstMoment () {
  return moment([moment().year()]).format();
}

var wormData = {
  regionsData: regionsData,
  username: 'owenyang0',
  fromDate: getFirstMoment()
};

module.exports = wormData;