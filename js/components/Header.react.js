var React = require('react');
var WormActions = require('../actions/WormActions');

var Header = React.createClass({

  getInitialState: function () {
    return { value: 50 };
  },

  render: function() {
    return (
      <header className="header">
        <h1>豆瓣 • 阅读追踪</h1>
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
        <div className="header__input">
          <label for="header__input--username">用户名</label>
          <input
            type="text"
            name="header__input--username"
            className="header__input--username"
            onChange={this._onChange}
            />
        </div>
      </header>
    );
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

module.exports = Header;
