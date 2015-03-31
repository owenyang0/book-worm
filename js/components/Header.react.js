var React = require('react');
var WormActions = require('../actions/WormActions');

var Goal = require('./header/Goal.react');
var UserName = require('./header/Username.react');

var Header = React.createClass({

  render: function() {
    return (
      <header className="header">
        <h1>豆瓣 • 阅读追踪</h1>
        <Goal />
        <UserName onGetMeta={this._onGetMeta}/>
      </header>
    );
  },

  _onGetMeta: function (username) {
    WormActions.getMeta(username);
  }
});

module.exports = Header;
