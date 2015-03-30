'use strict';

var React = require('react');
var R = require('ramda');

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



module.exports = Regions;
