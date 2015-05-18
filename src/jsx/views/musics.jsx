import React from 'react';

let Music = React.createClass({
  handleClick: function() {
    console.log('music click');
    return;
  },
  render: function() {
    return (
      <li><a href="#" onClick={this.handleClick}><i className="btl bt-fw bt-music"></i>{this.props.name}</a></li>
    );
  }
});

let Musics = React.createClass({
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
        <Music name={obj.name} key={obj.id} />
      );
    });
    return (
      <ul id="musics">
        {list}
      </ul>
    );
  }
});

module.exports = Musics;

