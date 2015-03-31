'use strict';

var React = require('react');
var R = require('ramda');

var Region = React.createClass({

  render: function () {
    var regionData = this.props.regionData;

    var regionList = R.mapIndexed(function (_, idx) {
      var cName = [].concat('number', _.isSafe ? ' number-safe' : '').join('');

      return <li key={idx} className="region__list-unit">{_.preText}
        <span className={cName}>{_.unit}</span>{_.sufText}
        </li>
    }, regionData.list);

    return (
      <section className="region">
        <h2 className="region__title">{regionData.title}</h2>
        <ul className="region__list">
          {regionList}
        </ul>
      </section>
    )
  }
});

var Regions = React.createClass({
  render: function () {
    var regions = R.mapIndexed(function (data, idx) {
      return <Region key={idx} regionData={data} />
    }, this.props.regionsData);

    return (
      <section className="regions">
            {regions}
      </section>
    )
  }
});

module.exports = Regions;
