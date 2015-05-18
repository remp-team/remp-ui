import React from 'react';

let Search = React.createClass({
  handleClick: function() {
    console.log('search click');
    return;
  },
  render: function() {
    return (
      <li><a href="#" onClick={this.handleClick}><i className="btl bt-fw bt-search"></i>{this.props.name}</a></li>
    );
  }
});

let Searches = React.createClass({
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
    var list = this.props.data.map(function(obj){
      return (
        <Search name={obj.name} key={obj.id} />
      );
    });
    return (
      <ul id="searches">
        {list}
      </ul>
    );
  }
});

module.exports = Searches;

