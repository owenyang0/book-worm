'use strict';

var request = require('superagent');
var Q = require('q');

require('superagent-jsonp')(request);

var api = {
  getReadCount: function (userName, fromDate) {
    var deferred = Q.defer();

    console.log(fromDate);

    var api = 'https://api.douban.com/v2/book/user/'
      + userName
      + '/collections';

    request
      .get(api)
      .query({status: 'read'})
      .query({from: fromDate})
      .jsonp()
      .end(function(data){
        console.log(data);
        deferred.resolve(data);
      });

    return deferred.promise;
  }
};

module.exports = api;