var React = require('react');
var WormActions = require('../actions/WormActions');

var ENTER_KEY_CODE = 13;

var Goal = React.createClass({
  getInitialState: function () {
    return {
      value: this.props.val || 30
    };
  },

  componentDidMount: function () {
    WormActions.updateGoal(this.state.value);
  },

  render: function () {
    return (
      <div className="header__input">
        <label for="header__input--goal">年度目标</label>
        <input
          type="number"
          name="header__input--goal"
          className="header__input--goal"
          onChange={this._onChange}
          value={this.state.value}
          autoFocus={true}
        />
      </div>
    )
  },

  _onChange: function(event) {
    var num = event.target.value;
    if (num && !/^\d+$/.test(num)) return;

    this.setState({
      value: num
    });

    WormActions.updateGoal(num);
  }
});

var UserName = React.createClass({
  getInitialState: function () {
    return {
      value: this.props.val || 'owenyang0'
    };
  },

  componentDidMount: function () {
    WormActions.updateUsername(this.state.value);
  },

  render: function () {
    return (
      <div className="header__input">
        <label for="header__input--username">用户名</label>
        <input
          type="text"
          name="header__input--username"
          className="header__input--username"
          value={this.state.value}
          onChange={this._onChange}
          onBlur={this._getMeta}
          onKeyDown={this._onKeyDown}
        />
      </div>
    );
  },

  _getMeta: function() {
    var userName = this.state.value;

    this.props.onGetMeta(userName);
    this.setState({
      value: userName
    });
  },

  _onChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._getMeta();
    }
  }
});


var Header = React.createClass({

  render: function() {
    return (
      <header className="header">
        <h1>豆瓣 • 阅读追踪</h1>
        <Goal val={31} />
        <UserName onGetMeta={this._onGetMeta}/>
      </header>
    );
  },

  _onGetMeta: function (username) {
    console.log('update', username);

    WormActions.getMeta(username);
  }
});

module.exports = Header;
