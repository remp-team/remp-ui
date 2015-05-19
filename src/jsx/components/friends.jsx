import React from 'react';

let Friend = React.createClass({
  handleClick: function() {
    console.log('friend click');
    return;
  },
  render: function() {
    return (
      <li><a href="#" onClick={this.handleClick}><i className="btl bt-fw bt-user"></i>{this.props.name} ({this.props.count})</a></li>
    );
  }
});

let Friends = React.createClass({
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
        <Friend name={obj.name} key={obj.id} count={obj.count} />
      );
    });
    return (
      <ul id="friends">
        {list}
      </ul>
    );
  }
});

module.exports = Friends;

