import React from 'react';

let Inbox = React.createClass({
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
    console.log('inbox click');
    return;
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

