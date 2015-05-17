import React from 'react';

let Me = React.createClass({
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
  handleClick: function(e) {
    console.log('me click');
    return;
  },
  render: function() {
    console.log('render');
    return (
      <ul id="me">
        <li className="current"><a href="#" onClick={this.handleClick}><i className="btl bt-fw bt-user"></i>{this.props.data.name} ({this.props.data.count})</a></li>
      </ul>
    );
  }
});

export default Me;

