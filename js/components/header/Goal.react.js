var React = require('react');
var WormActions = require('../../actions/WormActions');

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

module.exports = Goal;