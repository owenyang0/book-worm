var React = require('react');

var WormStore = require('../stores/WormStore');
var Regions = require('./regions/Regions.react');

var regionsData = WormStore.getAll();
function getWormState() {
  return {
    regions: regionsData
  }
}

var MainSection = React.createClass({
  getInitialState: function () {
    return getWormState();
  },

  componentDidMount: function () {
    WormStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    WormStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    regionsData = WormStore.getAll();
    this.setState({
      regions: regionsData
    });
  },

  render: function () {
    return (
      <section id="main">
        <Regions regionsData={this.state.regions}/>
      </section>
    );
  }
});

module.exports = MainSection;
