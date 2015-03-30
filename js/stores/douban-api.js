'use strict';

var request = require('superagent');
var Q = require('q');

require('superagent-jsonp')(request);

var api = {
  getReadCount: function (userName) {
    var deferred = Q.defer();

    var api = 'https://api.douban.com/v2/book/user/'
      + userName
      + '/collections';

    request
      .get(api)
      .query({status: 'read'})
      .query({from: '2015-01-30T13:22:53.108Z'})

      .jsonp()
      .end(function(data){
        deferred.resolve(data);
      });

    return deferred.promise;
  }
};

module.exports = api;