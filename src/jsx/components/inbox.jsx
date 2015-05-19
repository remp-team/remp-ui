import React from 'react';

let Inbox = React.createClass({
  handleClick: function() {
    console.log('inbox click');
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
      <ul id="inbox">
        <li key={this.props.id}><a href="#" onClick={this.handleClick}><i className="btl bt-fw bt-inbox"></i>{this.props.data.name}</a></li>
      </ul>
    );
  }
});

module.exports = Inbox;

