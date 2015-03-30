var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var React = require('react');

var TodoApp = React.createClass({

  render: function() {
  	return (
      <div>
        <Header />
        <MainSection />
      </div>
  	);
  }
});

module.exports = TodoApp;
