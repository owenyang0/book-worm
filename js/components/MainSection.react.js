var React = require('react');
var R = require('ramda');

var WormStore = require('../stores/WormStore');

var Region = React.createClass({

  render: function () {
    var regionData = this.props.regionData;

    var regionList = R.map(function (_) {
      return <li className="region__list-unit"> {_.preText}
        <span className="number"> {_.unit} </span>
                        {_.sufText}
      </li>
    }, regionData.list);

    return (
      <section className="region">
        <h1 className="region__title"> {regionData.title} </h1>
        <ul className="region__list">
                    {regionList}
        </ul>
      </section>
    )
  }
});

var Regions = React.createClass({
  render: function () {
    var regions = R.map(function (data) {
      return <Region regionData={data} />
    }, this.props.regionsData);

    return (
      <section className="regions">
            {regions}
      </section>
    )
  }
});

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
    console.log('change');
    console.log(regionsData)
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
