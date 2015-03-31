'use strict';

var request = require('superagent');
var Q = require('q');

require('superagent-jsonp')(request);

var cachedData = {};

var api = {
  getReadCount: function (userName, fromDate) {
    var deferred = Q.defer();

    if (!userName) {
      deferred.reject('error: username cannot be null');

      return deferred.promise;
    }

    var data = cachedData[userName];

    console.log('cached', cachedData);

    var api = 'https://api.douban.com/v2/book/user/'
      + userName
      + '/collections';

    data
      ? deferred.resolve(data)
      : request
          .get(api)
          .query({status: 'read'})
          .query({from: fromDate})
          .jsonp()
          .end(function(data){
            cachedData[userName] = data;
            deferred.resolve(data);
          });

    return deferred.promise;
  }
};

module.exports = api;