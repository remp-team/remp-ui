import React from 'react';

let Menu = React.createClass({
  handleClick: function() {
    console.log('menu click');
    return;
  },
  getInitialState: function() {
    console.log('getInitialState');
    return {data: []};
  },
  componentDidMount: function() {
    console.log('componentDidMount');
  },
  componentWillMount: function() {
    console.log('componentWillMount');
  },
  render: function() {
    console.log('render');
    return (
      <nav className="menu">
        <a href="#" onClick={this.handleClick}><i className="btl bt-bars bt-2x"></i></a>
      </nav>
    );
  }
});

module.exports = Menu;

