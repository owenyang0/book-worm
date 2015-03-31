var React = require('react');
var WormActions = require('../../actions/WormActions');

var ENTER_KEY_CODE = 13;

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

module.exports = UserName;