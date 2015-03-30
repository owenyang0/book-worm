var React = require('react');
var WormActions = require('../actions/WormActions');

var Header = React.createClass({

  getInitialState: function () {
    return { value: 50 };
  },

  render: function() {
    return (
      <header id="header">
        <label for="goal__input">年度目标</label>
        <input
          type="text"
          name="goal__input"
          onBlur={this._save}
          onChange={this._onChange}
          value={this.state.value}
          autoFocus={true}
          />
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
