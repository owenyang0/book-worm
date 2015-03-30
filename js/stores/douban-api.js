'use strict';

var request = require('superagent');
require('superagent-jsonp')(request);

var api = {
  getReadCount: function (userName) {
    var api = 'https://api.douban.com/v2/book/user/'
      + userName
      + '/collections';

    request
      .get(api)
      .query({status: 'read'})
      .jsonp()
      .end(function(err, res){
        if (!err) {
          console.log(res);
        }
      });
  }
};

module.exports = api;